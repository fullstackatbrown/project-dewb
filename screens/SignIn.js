import React, { useContext, useState } from "react";
import { View, Text, Image, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Context from "../context/Context";
import { signIn, signUp } from "../firebase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signUp");
  const {
    theme: { colors },
  } = useContext(Context);

  async function handlePress() {
    if (mode === "signUp") {
      await signUp(email, password);
    }
    if (mode === "signIn") {
      await signIn(email, password);
    }
  }
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <View>
        <Text
          style={{ color: colors.darkpurple, fontSize: 30, fontFamily: "Verdana", textAlign: "center"}}>
          GHS Home Visits Tracker
        </Text>
        <Text style={{color: colors.darkgreen, fontSize: 15, fontFamily: "Verdana", textAlign: "center", fontStyle: "italic"}}>provided by Rotary Club of Obuasi and </Text>
        <Text style={{color: colors.darkgreen, fontSize: 15, fontFamily: "Verdana", textAlign: "center", fontStyle: "italic", marginBottom: 20}}>Doctors and Engineers without Borders</Text>
      </View>

      <Image
        source={require("../assets/dewb_logo.png")}
        style={{ width: 180, height: 180 }}
        resizeMode="cover"
      />
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={colors.darkgreen}
          value={email}
          onChangeText={setEmail}
          style={{
            borderBottomColor: colors.darkgreen,
            borderBottomWidth: 2,
            width: 200,
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.darkgreen}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{
            borderBottomColor: colors.darkgreen,
            borderBottomWidth: 2,
            width: 200,
            marginTop: 20,
          }}
        />
        <View style={{ marginTop: 20 }}>
          <Button
            title={mode === "signUp" ? "Sign Up" : "Sign In" }
            disabled={!password || !email}
            onPress={handlePress}
            color={colors.darkpurple}
          />
        </View>
        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={() =>
            mode === "signUp" ? setMode("signIn") : setMode("signUp")
          }
        >
          <Text style={{ color: colors.darkpurple }}>
            {mode === "signUp"
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}