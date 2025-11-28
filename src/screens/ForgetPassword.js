import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppInput from '../component/AppInput'
import Buttons from '../component/Buttons'
import { Ionicons } from '@expo/vector-icons'
import axiosInstance from '../config/axiosConfig'
import { useNavigation} from '@react-navigation/native'

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigation=useNavigation();
  const handleSend=async()=>{
    if(!email){
      Alert.alert("Error","Please Provde Valid Email")
      return;
    }
    try {
      const response=await axiosInstance.post("/forget/password",{email})
      if(response.status==200){
        Alert.alert("Otp send successfully",response.data)
        console.log("kongrats");
        setShowModal(true);
        // navigation.navigate("MyTabs")
      }
      else{
        Alert.alert('Failed to send otp', response.data.message || 'Invalid credentials');
        console.log(response.status);
      }
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.response?.data?.message || 'Unable to login. Please try again.';
      Alert.alert('Error', errorMessage);
    }

    
  }
  const handleVerify=async()=>{
    if(!email){
      Alert.alert("Error","Please the Otp")
      return;
    }
    try {
      const response=await axiosInstance.post(`/verify?otp=${otp}`)
      if(response.data==true){
        Alert.alert("Verified successfully",String.valueOf(response.data))
        console.log("otp passed");
        // setShowModal(true);
        navigation.navigate("updatePassword")
        setShowModal(false);
      }
      else{
        Alert.alert('Invalid Otp', response.data.message || 'Invalid credentials');
        console.log(response.status);
      }
    } catch (error) {
      console.error('Unable to Send:', error);
      const errorMessage = error.response?.data?.message || 'Unable to Send OTP. Please try again.';
      Alert.alert('Error ', errorMessage);
    }

    
  }
  return (
    
    <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
                <Ionicons name="arrow-back-circle" color="black" size={34}></Ionicons>
                </TouchableOpacity>
            <Text style={styles.txt}>Please Enter your email to receive a verification code</Text>
              
                <View style={{width: "100%",marginTop: 30}}>
                      <AppInput placeHolder="Email" onChangeText={setEmail}></AppInput>
                      <Buttons onpress={handleSend} backgroundColor="black">Send</Buttons>
                </View>
          <Modal onRequestClose={() => setShowModal(false)} visible={showModal}  style={styles.modal}> 
                <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',paddingHorizontal:10}}>
                      <View style={styles.otpContainer}>
                          <AppInput placeHolder="Otp" onChangeText={setOtp}></AppInput>
                          <Buttons onpress={handleVerify} backgroundColor="black">Verify</Buttons>
                        </View>
                    </View>
            </Modal>      
     
     </View>
   
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        padding: 20,
        paddingTop: 170
      }
      ,
      txt:{
        fontSize: 20,
        textAlign: 'center',
        
      },
      button: {
        position: "absolute",
        top:45,
        left: 19
      },
otpContainer:{
  width: '100%',
  paddingVertical: 45,
  paddingHorizontal: 20,
  // elevation: 8,
  borderColor: 'gray',
 borderWidth: 1,
 borderRadius: 11,
 


}
})