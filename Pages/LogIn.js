import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";


export default function LogIn() {
  const [rememberMe, setRememberMe] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const navigation = useNavigation();


  const imagePath = require("../Images/LogInImg.png");

  return (
    <SafeAreaView style={styles.view1}>
      <ScrollView>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Text style={styles.logText1}>Welcome Back To Crypto Box</Text>
          </View>

          <View style={styles.imageView}>
            <Image source={imagePath} style={styles.logImage} />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.textInput}>Email</Text>
            <TextInput
              style={styles.input}
              inputMode={"email"}
              maxLength={45}
              placeholder="Your Email"
              placeholderTextColor={"#bebebe"}
            />

            <Text style={styles.textInput}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              maxLength={45}
              placeholder="Your Password"
              placeholderTextColor={"#bebebe"}
            />

            <View style={styles.view4}>
              <View style={styles.view5}>
                <Checkbox
                  style={styles.checkbox}
                  value={rememberMe}
                  onValueChange={() => {
                    setRememberMe(!rememberMe);
                  }}
                  color={isChecked ? "#4169e1" : undefined}
                />
                <Text style={styles.text1}>Remember Me</Text>
              </View>

              <Text style={styles.text2}>Forgot Password</Text>
            </View>

            <Pressable style={styles.Btn}>
              <Text style={styles.BtnText}>Log In</Text>
            </Pressable>

            <Pressable
              style={styles.Btn}
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.BtnText}>Create New Account</Text>
            </Pressable>
          </View>

          <Text style={styles.text3}>or</Text>


          <Pressable style={styles.Btn3}>
            <Image
              source={require("../Images/google.png")}
              style={styles.googleIcon}
            />
            <Text style={styles.googleText}>Login with Google</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: "#000000",
  },
  view2: {
    justifyContent: "center",
    alignItems: "center",
  },
  view3: {
    padding: 20,
    // backgroundColor: "yellow",
  },
  logText1: {
    fontSize: 34,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffffff",
  },
  imageView: {
    // backgroundColor:'red'
  },
  logImage: {
    width: 250,
    height: 250,
  },
  inputView: {
    width: "100%",
    // backgroundColor: "yellow",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderStyle: "solid",
    borderWidth: 2,
    fontSize: 18,
    fontWeight: "bold",
    paddingStart: 15,
    borderRadius: 10,
    borderColor: "#ffcc00",
    borderWidth: 2,
    marginBottom: 5,
    color: "#ffffff",
  },
  textInput: {
    fontSize: 16,
    color: "#ffffff",
    paddingVertical: 8,
  },
  view4: {
    flexDirection: "row",
    padding: 5,
    marginTop: 5,
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  view5: {
    flexDirection: "row",
    columnGap: 10,
  },
  text1: {
    color: "#1e90ff",
    fontSize: 14,
  },
  text2: {
    color: "#dc143c",
    fontSize: 14,
  },
  Btn: {
    width: "100%",
    height: 50,
    backgroundColor: "#ffc40c",
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  BtnText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  Btn3: {
    width: "88%",
    height: 50,
    backgroundColor: "#ffffff",
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row',
    columnGap:10,
  },
  googleIcon:{
    width:30,
    height:30
  },
  googleText:{
    fontSize:18,
    fontWeight:'bold'
  },
  text3:{
    padding:5,
    fontSize:18,
    color:"#ffffff"
  }
  
});
