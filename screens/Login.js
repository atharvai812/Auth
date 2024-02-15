import { Text, View, TouchableOpacity,TextInput ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config'

const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    loginUser = async(email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            
        } catch (error) {
            alert(error)
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{fontSize:26,fontWeight:"bold"}}>Login</Text>
            <View>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => loginUser(email, password)}
            >
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Registration')}
            >
                <Text>Don't have an account? Sign up</Text>
            </TouchableOpacity>
          
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: 300,
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
})