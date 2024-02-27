import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const phoneContacts = [
  { id: '1', name: 'Mugisha Kevin', phoneNumber: '0789384939' },
  { id: '2', name: 'Ineza Raissa', phoneNumber: '0783948933' },
  { id: '2', name: 'Kalisa James', phoneNumber: '0789322394' },
  { id: '2', name: 'Manzi Denis', phoneNumber: '0780617661' },
  { id: '2', name: 'Ishimwe John', phoneNumber: '0784929384' },
];

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts:</Text>
      <FlatList
        data={phoneContacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactPhone}>{item.phoneNumber}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactItem: {
    marginBottom: 10,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 14,
    color: '#888',
  },
});

export default ContactScreen;
