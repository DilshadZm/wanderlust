import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase configuration object
};

firebase.initializeApp(firebaseConfig);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful login
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Login to Wanderlust</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 8,
    margin: 10,
    width: '80%',
    borderRadius: 5,
  },
});
