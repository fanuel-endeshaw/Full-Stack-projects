import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MyTabs from "./MyTabs";
import CheckoutPage from "../screens/CheckoutPage";
import { useEffect, useState } from "react";
import { authService } from "../config/axiosConfig";

const stack = createStackNavigator();
const MainNavigation = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const checkAuthStatus = async () => {
    try {
      const token = await authService.getToken(); 
      if (token) {
        console.log("there is token " );
        console.log(token);
        setIsAuthenticated(true);
        // console.log(isAuthenticated);
      } else {
        console.log("auth");
        console.log(isAuthenticated);
        // setIsAuthenticated(c=>!c);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false)
         }
  };
  useEffect(() => {
    // Run the check when the component mounts
    checkAuthStatus();
  }, []);
 if(loading){
  return <View style={{flex: 1,justifyContent: 'center'}}>
<ActivityIndicator size="large"></ActivityIndicator>
  </View>
 }

  return (

       <stack.Navigator screenOptions={{animation: "fade_from_right"}} initialRouteName={isAuthenticated ? "MyTabs" : "AuthStack"} >
      <stack.Screen
        options={{ headerShown: false }}
        name="AuthStack"
        component={AuthStack} />
        <stack.Screen
          options={{ headerShown: false }}
          name="MyTabs"
          component={MyTabs} />
    
    </stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
