import { Text, View, StyleSheet ,SafeAreaView ,TouchableOpacity} from 'react-native'
import React, { Component,useState,useEffect } from 'react'
import { firebase } from '../config'


const Dashboard = () => {
  const [user , setUser] = useState("")
  useEffect(() => {
    firebase.firestore().collection('Users').doc(firebase.auth().currentUser.uid).get()
    .then((Snapshot) => {
      if(Snapshot.exists) {
        setUser(Snapshot.data())
      }
      else {
        console.log('User does not exist')
      }
    })
  })
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome {user.firstName} {user.LastName}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {firebase.auth().signOut()}}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Dashboard

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
  text: {
    fontSize: 26,
    fontWeight: 'bold',
  }
})