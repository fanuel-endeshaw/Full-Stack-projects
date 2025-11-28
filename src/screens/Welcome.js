import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  StatusBar,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Buttons from "../component/Buttons";
import Animated, { Easing, FadeIn, FadeInDown, FadeInUp } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
     
        <View style={styles.overlay}>
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <Animated.Image
              entering={FadeInUp.duration(700).delay(700)}
              source={require("../../assets/appLogo.png")}
              style={styles.logo}
              resizeMode="contain"
            />

          </View>

          {/* Buttons Section */}
          <Animated.View style={styles.buttonContainer} entering={FadeInDown.duration(700).delay(700)}>
            <Buttons
              backgroundColor="black"
              color="white"
              onpress={() => navigation.navigate("SignIn")}
            >
              Get Started
            </Buttons>
         
            
          </Animated.View>
        </View>
    
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 255)",
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 255)",
    justifyContent: "space-between",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  logo: {
    width: 290,
    height: 290,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 24,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 20,
  },
  footerText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    opacity: 0.8,
  },
});