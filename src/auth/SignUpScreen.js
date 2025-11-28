import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import AppInput from "../component/AppInput";
import Buttons from "../component/Buttons";
import { useNavigation } from "@react-navigation/native";
import axiosInstance from "../config/axiosConfig";
const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();


const handleSubmit=async ()=>{
  if(username==""&&email==""&&password==""){
    Alert.alert("Error","fill the required")
    console.log(username, email, password)
  }
  else{
    try {
      const response = await axiosInstance.post('/register', {
        username,
        email,
        password,
      });

      console.log('Registration successful:', response.data);
      Alert.alert(
        'Success', 
        'Account created successfully! Please login.',
        [
          { text: 'OK', onPress: () => navigation.navigate('Login') }
        ]
      );
    } catch (error) {
      // console.error('Registration error:', error);
      const errorMessage = error.response?.data?.message || 'Unable to create account. Please try again.';
      Alert.alert('Error', errorMessage);
    } 
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
            />
            <AppInput placeHolder="Username" onChangeText={setUsername} />
            <AppInput placeHolder="Email" type="email-address" onChangeText={setEmail} />
            <AppInput placeHolder="Password" onChangeText={setPassword} />
          
            <Buttons
              backgroundColor="black"
              onpress={handleSubmit}
            >
              Sign Up
            </Buttons>
            <Buttons
              backgroundColor="white"
              color="black"
              onpress={() => navigation.navigate("SignIn")}
            >
              Go to Sign In
            </Buttons>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 100,
    paddingBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
