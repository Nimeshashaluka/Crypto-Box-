import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function StartPage() {
  const ImagePath = require("../Images/startPageImage.png");

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.view1}>
      
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text style={styles.text1}>Welcome To Crypto Box</Text>
        </View>

        <View style={styles.view4}>
          <Text style={styles.text2}>
            You can obtain the codes for the Red Packet Binance has made
            Available through this.
          </Text>
        </View>

        <View style={styles.view5}>
          <Image source={ImagePath} style={styles.image1} />
        </View>

        <View style={styles.view6}>
          <View style={styles.boxs}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
          </View>
        </View>

        <Pressable style={styles.startBtn} onPress={
          ()=>{
            navigation.navigate("LogIn");
          }
        }>
          <Text style={styles.btnText}>Get Started</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  view2: {
    // backgroundColor:'red',
    padding: 5,
  },
  view3: {
    padding: 10,
    // backgroundColor:'yellow',
  },
  view4: {
    paddingHorizontal: 18,
    // backgroundColor:'green'
  },

  view5: {
    // paddingHorizontal: 20,
    paddingTop: 65,
    alignItems: "center",
  },

  text1: {
    fontSize: 34,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffffff",
  },
  text2: {
    fontSize: 14,
    textAlign: "center",
    color: "#ffcc00",
  },
  image1: {
    width: "100%",
    height: "70%",
    // backgroundColor:'green'
  },
  view6: {
    // backgroundColor: "red",
    marginBottom: 20,
    // alignItems:'center'
  },
  boxs: {
    flexDirection: "row",
    columnGap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#f5c71a",
  },
  box2: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fffacd",
  },
  box3: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fffacd",
  },
  startBtn:{
    backgroundColor:'#ffc40c',
    height:50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  btnText:{
    fontSize:20,
    fontWeight:"bold",
    color:'black'
  }
});
