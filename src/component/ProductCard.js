import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Ionicons } from "@expo/vector-icons";
import Buttons from "./Buttons";
import BreakingBadge from "./BreakingBadge";
const ProductCard = ({ onCartPress, price, title, imageUrl }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        ></Image>
      </View>
      <View style={styles.details}>

        <Text>This is germany and we prefer reading this mon</Text>
        {/* <Text>{title}</Text> */}
       
        {/* <Text>{price}</Text> */}
      </View>
      <TouchableOpacity
        // onPress={onCartPress}
        onPress={()=>navigation.navigate('news')}
        style={styles.button}
       
      >
       <MaterialIcons name="favorite" size={32} color="black" />
      </TouchableOpacity>
      {/* <TouchableOpacity
        // onPress={() => navigation.navigate("Checkout")}
        onPress={onCartPress}
        style={styles.button}
      >
        <Ionicons size={20} color={"white"} name="cart"></Ionicons>
      </TouchableOpacity> */}
<View style={{position:'absolute',alignItems:"center",bottom:'0',width:"100%"}}>
<Buttons  height={28} width="80%">Read more</Buttons>
</View>

    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: s(160),
    height: vs(200),
    borderRadius: s(12),
    borderColor: "grey",
    borderWidth: 0.8,
    backgroundColor: 'white',
    paddingBottom: 16
   
  },
  imageContainer: {
    width: "100%",
    height: "65%",
    overflow: "hidden",
    borderTopRightRadius: s(10),
    borderTopLeftRadius: s(10),
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  details: {
    marginLeft: 10,
    marginTop: 10,
  },
  button: {
    position: "absolute",
    top: 17,
    right: 17,
  },
});
