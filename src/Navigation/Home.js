import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../auth/SignUpScreen";
import SignInScreen from "../auth/SignInScreen";
import Welcome from "../screens/Welcome";
import ForgetPassword from "../screens/ForgetPassword";
import UpdatePassword from "../auth/UpdatePassword";
import { HomeScreen } from "../screens/HomeScreen";
import { CartScreen } from "../screens/CartScreen";
import News from "../screens/News";

const stack = createStackNavigator();
const Home = () => {
  return (
    <stack.Navigator
     screenOptions={{animation : "fade_from_bottom"}}
     >
      <stack.Screen
        options={{ headerShown: false }}
        name="Welcome"
               component={HomeScreen}
      />
    
      <stack.Screen
        options={{ headerShown: false }}
        name="news"
        component={News}
      />
     
    </stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
