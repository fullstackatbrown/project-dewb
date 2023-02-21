import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { StylesContext } from '@material-ui/styles'
import { useState} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Image, TouchableOpacity } from 'react-native'
import { fontStyle } from '@mui/system'

const SignUp = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        if (name === '' || email === '' || password === '') {
            alert("All fields are required");
            return;
        }
        // TODO: implement the backend server
        await axios.post("http://localhost:8001/api/signup", { name, email, password });
        alert("Sign Up Successful");
    };

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={{ marginVertical: 100 }}>
                <View style={styles.imageContainer}>
                    <Image source={require("../assets/dewb_logo.png")} style={styles.imageStyles} />
                </View>
                {/* the below isn't working with the styles below */}
                    <Text style={{fontSize: 30, textAlign: "center"}}>Sign Up</Text>
                    <View style ={{ marginHorizontal: 24}}>
                        <Text style={{ fontSize: 16, color: '#8e93a1' }}>NAME</Text>
                        <TextInput style={styles.signupInput} value={name} onChangeText={text => setName(text)}
                        autoCapitalize="words" autoCorrect={false} />
                    </View>
                    <View style ={{ marginHorizontal: 24 }}>
                        <Text style ={{ fontSize: 16, color: '#8e93a1' }}>EMAIL</Text>
                        <TextInput style={styles.signupInput} value={email} onChangeText={text => setEmail(text)}
                        autoCompleteType="email" keyboardType="email-address"/>
                    </View>
                    <View style={{ marginHorizontal: 24 }}>
                        <Text style={{ fontSize: 16, color: '#8e93a1' }}>PASSWORD</Text>
                        <TextInput style={styles.signupInput} value={password} onChangeText={text => setPassword(text)}
                        secureTextEntry={true} autoCompleteType="password" />
                    </View>
                    <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    {/* <Text style={{ marginHorizontal: 24 }}>{JSON.stringify({ name, email, password })}</Text> */}
                    <Text style={{ fontSize: 12, textAlign: "center" }}>
                        Already Joined?{" "}
                        <Text
                            style={{ color: "darkred", fontWeight: "bold" }}
                            onPress={() => navigation.navigate("SignIn")}>
                                Sign In
                        </Text>
                    </Text>
                </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    signupText: {
        fontsize: 30,
        textAlign: 'center',
    },
    signupInput: {
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: '#8e93a1',
        marginBottom: 30,
    },
    buttonStyle: {
        backgroundColor: "darkmagenta",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        marginHorizontal: 15,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 20,
        textAlign: "center",
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    imageStyles: {
        width: 100,
        height: 100,
        marginVertical: 20
    }
})

export default SignUp