import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import AppInput from "../component/AppInput";
import Buttons from "../component/Buttons";
import { useNavigation } from "@react-navigation/native";
import axiosInstance, { authService } from "../config/axiosConfig";
const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const handlelogin=async()=>{
    if(username==""&&password==""){
      Alert.alert("Error","fill the required")
      console.log( username, password)
      return;
    }
    // else{
      // console.log("post");
      
      // const response=await axiosInstance.post("/auth",{
      //   username,password
      // })
      // console.log(response.data);
        // }
        try {
          setLoading(true)
          const response = await axiosInstance.post('/auth', {
            username: username,
          password: password,
          });
              if (response.status === 200) {
            // Save JWT token
            const token = response.data;
            await authService.saveTokens(token);
            console.log('Login successful:', response.data);
            navigation.replace('MyTabs');
          } 
          else if(response.status === 401){
            Alert.alert('Invalid Credential',"Enter valid credential");
          }
          else {
            Alert.alert('Login Failed', response.data.message || 'Invalid credentials');
            console.log(response.status);
                      }
        } catch (error) {
          // console.error('Login error:', error);
          const errorMessage = error.response?.data?.message || 'Unable to login. Please try again.';
          Alert.alert('Error', errorMessage);
        }
        finally{
            setLoading(false)
        }
  }




  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >

          
    
      <Image
        source={require("../../assets/appLogo.png")}
        style={styles.logo}
      ></Image>
      <AppInput placeHolder="Email" onChangeText={setUsername}></AppInput>
      <AppInput placeHolder="Password" onChangeText={setPassword}></AppInput>
      
      <TouchableOpacity style={styles.passwordContainer} onPress={()=>navigation.navigate("forgetPassword")}>
        <Text style={styles.password}>Forget Password?</Text>
      </TouchableOpacity>
      
      <Buttons
        backgroundColor="black"
        disabled={loading}
        onpress={handlelogin}
      >
        SignIn
      </Buttons>
      <Buttons
        backgroundColor="white"
        color="black"
        onpress={() => navigation.navigate("SignUp")}
      >
        Create New Account
      </Buttons>
      </ScrollView>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // paddingHorizontal: 15,
    // paddingTop: 100,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  password:{
    color: "rgb(96, 159, 253)",
    fontWeight: "bold",
    fontSize: 16
  },
  passwordContainer:{
alignSelf: "flex-end",
marginVertical: 5,
marginRight: 10,

  },scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 100,
    paddingBottom: 20,
  }, keyboardView: {
    flex: 1,
  },
});
