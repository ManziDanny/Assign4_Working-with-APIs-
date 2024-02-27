import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Calculator from './components/Calculator'; 
import InternetConnectivity from './components/InternetConnectivity';
import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SignUpScreen';
import Preferences from './components/Preferences';
import ContactScreen from './components/ContactScreen';
import ProfileScreen from './components/ProfileScreen';

const HomeScreen = () => (
  <View style={[styles.screen, styles.center]}>
    <Text style={[styles.screenText, styles.boldText]}>Home Screen</Text>
  </View>
);

const CustomDrawerContent = ({ navigation }) => (
  <View style={styles.drawerContent}>
    <View style={styles.drawerHeader}>
      <Text style={styles.drawerHeaderText}>App Drawer</Text>
    </View>
    <Button
      title="Go to Home"
      onPress={() => navigation.navigate('Home')}
    />
    <Button
      title="Go to Profile"
      onPress={() => navigation.navigate('ProfileScreen')}
    />
    <Button
      title="Go to Calculator"
      onPress={() => navigation.navigate('Calculator')}
    />
    <Button
      title="Internet Connectivity"
      onPress={() => navigation.navigate('InternetConnectivity')}
    />
    <Button
      title="Sign In"
      onPress={() => navigation.navigate('SignInScreen')} // Remove the parameter
    />
    <Button
      title="Sign Up"
      onPress={() => navigation.navigate('SignUpScreen')} // Remove the parameter
    />
    <Button
      title="Preferences"
      onPress={() => navigation.navigate('Preferences')} // Remove the parameter
    />
  </View>
);

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 16,
        marginBottom: 5,
      },
      style: {
        backgroundColor: 'lightgray',
      },
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Contact" component={ContactScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Calculator" component={Calculator} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator
      drawerContent={({ navigation }) => (
        <CustomDrawerContent navigation={navigation} />
      )}
    >
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="SignInScreen" component={SignInScreen} />
      <Drawer.Screen name="SignUpScreen" component={SignUpScreen} />
      <Drawer.Screen name="Preferences" component={Preferences} />
    </Drawer.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    textAlign: 'center',
  },
  screenText: {
    fontSize: 24,
  },
  boldText: {
    fontWeight: 'bold',
  },
  drawerContent: {
    flex: 1,
    paddingTop: 20,
  },
  drawerHeader: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  drawerHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;