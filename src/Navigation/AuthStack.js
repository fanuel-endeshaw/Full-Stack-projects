import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../auth/SignUpScreen";
import SignInScreen from "../auth/SignInScreen";
import Welcome from "../screens/Welcome";
import ForgetPassword from "../screens/ForgetPassword";
import UpdatePassword from "../auth/UpdatePassword";

const stack = createStackNavigator();
const AuthStack = () => {
  return (
    <stack.Navigator
     screenOptions={{animation : "fade_from_bottom"}}
     >
      <stack.Screen
        options={{ headerShown: false }}
        name="Welcome"
               component={Welcome}
      />
      <stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUpScreen}
      />
      <stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignInScreen}
      />
      <stack.Screen
        options={{ headerShown: false }}
        name="forgetPassword"
        component={ForgetPassword}
      />
      <stack.Screen
        options={{ headerShown: false }}
        name="updatePassword"
        component={UpdatePassword}
      />
    </stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
