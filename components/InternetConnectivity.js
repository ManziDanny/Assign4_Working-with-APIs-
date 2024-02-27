import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';

const InternetConnectivity = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      if (!state.isConnected) {
        Toast.show({
          type: 'error',
          text1: 'No Internet Connection',
          visibilityTime: 3000,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {isConnected
          ? 'You are connected to the internet'
          : 'You are not connected to the internet'}
      </Text>
      {!isConnected && (
        <Button
          title="Check Again"
          onPress={() => {
            NetInfo.fetch().then(state => {
              setIsConnected(state.isConnected);
              if (!state.isConnected) {
                Toast.show({
                  type: 'error',
                  text1: 'No Internet Connection',
                  visibilityTime: 3000,
                });
              }
            });
          }}
        />
      )}
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
    textAlign: 'center',
  },
});

export default InternetConnectivity;