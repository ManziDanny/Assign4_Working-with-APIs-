import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Preferences = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    
    AsyncStorage.getItem('theme').then((storedTheme) => {
      if (storedTheme) {
        setTheme(storedTheme);
      }
    });
  }, []);

  const toggleTheme = () => {
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    AsyncStorage.setItem('theme', newTheme);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>Toggle Theme</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Theme Preference: {theme}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  toggleButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'lightgray',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Preferences;