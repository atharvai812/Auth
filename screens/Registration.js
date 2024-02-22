import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '../config'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  registerUser = async (email, password, firstName, lastName) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url: 'attendance-system-2ba42.firebaseapp.com',
        })
          .then(() => {
            alert('Email verification sent')
          }).catch((error) => {
            alert(error.message)
          })
          .then(() => {
            firebase.firestore().collection('Users').doc(firebase.auth().currentUser.uid).set({

              firstName,
              lastName,
              email,
            })
              .then(() => {
                alert('User added')
              }).catch((error) => {
                alert(error)
              })
          })
          .catch((error) => {
            alert(error.message)
          })
      })
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='First Name'
        autoCapitalize="none"
        placeholderTextColor='black'
        onChangeText={firstName => setfirstName(firstName)}
      />
      <TextInput
        style={styles.input}
        placeholder='Last Name'
        autoCapitalize="none"
        placeholderTextColor='black'
        onChangeText={lastName => setlastName(lastName)}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        autoCapitalize="none"
        placeholderTextColor='black'
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor='black'
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => registerUser(email, password, firstName, lastName)}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>


  )
}
export default Registration

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