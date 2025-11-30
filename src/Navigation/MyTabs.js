import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { CartScreen } from "../screens/CartScreen";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from "./Home";

const tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: { height: 62 },
        tabBarLabelStyle: { fontSize: 14 },

      }}
    >
      <tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            // <Ionicons size={size} color={color} name=""></Ionicons>
            <MaterialCommunityIcons name="newspaper" size={24} color="black" />
          ),
        }}
        name="Home"
        component={Home}
        // component={HomeScreen}
      />
      <tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            // <Ionicons size={size} color={color} name="cart"></Ionicons>
            <MaterialIcons name="favorite" size={24} color="black" />
          ),
        }}
        name="Favorites"
        component={CartScreen}
      />
      <tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            // <Ionicons size={size} color={color} name="cart"></Ionicons>
            <Ionicons name="person" size={24} color="black" />
          ),
        }}
        name="Profile"
        component={CartScreen}
      />
      {/* <tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name="person"></Ionicons>
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      /> */}
    </tab.Navigator>
  );
};

export default MyTabs;

const styles = StyleSheet.create({});
