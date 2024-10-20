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
import { useNavigation } from "@react-navigation/native";


export default function SignUp() {
    const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.view1}>
      <ScrollView>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Text style={styles.logText1}>Crypto Box User 
            Registration</Text>
          </View>

          <View style={styles.view4}>
            <Text style={styles.text2}>
            First Create an Account On Crypto Box
            </Text>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.textInput}>First Name</Text>
            <TextInput
              style={styles.input}
              inputMode={"text"}
              maxLength={45}
              placeholder="Your First Name"
              placeholderTextColor={"#bebebe"}
            />

            <Text style={styles.textInput}>Last Name</Text>
            <TextInput
              style={styles.input}
              inputMode={"text"}
              maxLength={45}
              placeholder="Your Last Name"
              placeholderTextColor={"#bebebe"}
            />

            <Text style={styles.textInput}>Mobile</Text>
            <TextInput
              style={styles.input}
              inputMode={"tel"}
              maxLength={10}
              placeholder="Your Mobile Number"
              placeholderTextColor={"#bebebe"}
            />

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

            
          </View>

          <Pressable style={styles.Btn}>
              <Text style={styles.BtnText}>Register</Text>
            </Pressable>

            <Pressable style={styles.Btn} onPress={
                ()=>{
                    navigation.navigate("LogIn");
                }
            }>
              <Text style={styles.BtnText}>Already have an Account</Text>
            </Pressable>

            <Text style={styles.text3}>or</Text>

          <Pressable style={styles.Btn3}>
            <Image
              source={require("../Images/google.png")}
              style={styles.googleIcon}
            />
            <Text style={styles.googleText}>SignUp with Google</Text>
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
    padding: 10,
    // backgroundColor: "yellow",
  },
  view4: {
    paddingBottom:10,
    // backgroundColor:'green'
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

  text2: {
    fontSize: 14,
    textAlign: "center",
    color: "#ffcc00",
  },
  Btn: {
    width: "90%",
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
    width: "90%",
    height: 50,
    backgroundColor: "#ffffff",
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    columnGap: 10,
  },
  googleIcon: {
    width: 30,
    height: 30,
  },
  googleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text3:{
    padding:10,
    fontSize:18,
    color:"#ffffff"
  }
});
