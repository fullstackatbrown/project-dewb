import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState} from 'react'

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.signupText}>Sign-Up</Text>
      <View style={{ marginHorizontal: 24 }}>
        <Text style={{ fontSize: 16, color: '#8e93a1' }}>NAME</Text>
        <TextInput style={styles.signupInput} value={name} onChangeText={text => setName(text)} />
      </View>

      <View style={{ marginHorizontal: 24 }}>
        <Text style={{ fontSize: 16, color: '#8e93a1' }}>EMAIL</Text>
        <TextInput style={styles.signupInput} value={email} onChangeText={text => setEmail(text)} />
      </View>

      <View style={{ marginHorizontal: 24 }}>
        <Text style={{ fontSize: 16, color: '#8e93a1' }}>PASSWORD</Text>
        <TextInput style={styles.signupInput} value={password} onChangeText={text => setPassword(text)} />
      </View>
      <Text style={{ marginHorizontal: 24 }}>{JSON.stringify({ name, email, password })}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  signupText: {
    fontSize: 30,
    textAlign: 'center'
  },
  signupInput: {
    borderBottomWidth: 0.5,
    height: 48,
    borderBottomColor: "#8e93a1",
    marginBottom: 30,
  }
})

export default SignUp