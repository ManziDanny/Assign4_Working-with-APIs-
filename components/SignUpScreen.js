import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleSignUp = async () => {
  if (!email || !password) {
    setRegistrationMessage('Please enter both email and password.');
    return;
  }

  try {
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('password', password);
    
    setRegistrationMessage('Registered successfully');

    setTimeout(() => {
      setRegistrationMessage('');
      navigation.navigate('SignIn');
    }, 2000);
  } catch (error) {
    console.error('Error signing up:', error);
    setRegistrationMessage('Error signing up. Please try again.');
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      {registrationMessage ? <Text style={styles.successMessage}>{registrationMessage}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoFocus={true} 
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoFocus={false} 
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    width: '80%',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  successMessage: {
    fontSize: 16,
    color: 'green',
    marginBottom: 10,
  },
});

export default SignUpScreen;