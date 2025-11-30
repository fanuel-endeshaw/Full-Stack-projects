import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Buttons = ({
  children,
  backgroundColor = "black",
  color = "white",
  height = 46,
  width = "100%",
  onpress,
  disabled=false
}) => {
  return (
    <TouchableOpacity
      onPress={onpress}
      activeOpacity={0.6}
      style={[
        styles.buttons,
        { backgroundColor: backgroundColor, width: width, height: height,opacity: disabled ? 0.8 :  1 } ]}
      disabled={disabled}
      
    >{
      !disabled ? <Text style={{ color: color }}>{children}</Text>:<ActivityIndicator size="small"></ActivityIndicator>}
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  buttons: {
    marginVertical: 10,
opacity:.8,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
