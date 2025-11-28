import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppInput from '../component/AppInput'
import Buttons from '../component/Buttons'
import axiosInstance from '../config/axiosConfig'

const UpdatePassword = () => {
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const handleUpdate=async()=>{
       if(!password||!conPassword){
        Alert.alert("Fill all fields")
        return;
       }
       else if (password!==conPassword) {
        Alert.alert("Password does not match")
        return;
       }
       try {
        const response=await axiosInstance.post(`/changePassword?password=${password}`)
            if (response.data==true) {
                    Alert.alert("Password Updated","Password Updated successfully, Login and Continue")
            }
            else
            Alert.alert("Try Again","unable to Updated Password ")
        
       } catch (error) {
        Alert.alert("Error Occured")
       }
    }
  return (
    <View style={styles.container}>
   

           <Text style={styles.txt}>Please Enter Your New Password</Text>
      
            <View style={{width: "100%",marginTop: 30}}>
                <AppInput placeHolder="New Password" onChangeText={setPassword}></AppInput>
                <AppInput placeHolder="Confirm Password" onChangeText={setConPassword}></AppInput>
                <Buttons onpress={handleUpdate} backgroundColor="black">Update</Buttons>
            </View>
      

</View>
  )
}

export default UpdatePassword

const styles = StyleSheet.create({
container:{
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 170,
},
txt:{
    fontSize: 26,
    fontWeight: 'bold'
    ,
    textAlign: 'center',
},
button:{

}


})