import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const RequestScreen = ({ navigation }: { navigation: any }) => {
  const [documentType, setDocumentType] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = () => {
    if (!documentType || !name || !address || !contactNumber) {
      Alert.alert('Error', 'Please fill in all the fields');
    } else {
      Alert.alert('Request Submitted', `Your request for ${documentType} has been submitted successfully.`);
      // Add your submit logic here (e.g., sending the request to a server)
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Request Documents</Text>
      
      <Text style={styles.label}>Select Document Type:</Text>
      <Picker
        selectedValue={documentType}
        onValueChange={(itemValue) => setDocumentType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Barangay Clearance" value="Barangay Clearance" />
        <Picker.Item label="Certificate of Indigency" value="Certificate of Indigency" />
        <Picker.Item label="Certificate of Residency" value="Certificate of Residency" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <Text style={styles.label}>Full Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.label}>Contact Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your contact number"
        keyboardType="phone-pad"
        value={contactNumber}
        onChangeText={setContactNumber}
      />

      <Button title="Submit Request" onPress={handleSubmit} color="#007BFF" />

      <Button
        title="Back to Home"
        onPress={() => navigation.goBack()}
        color="#28A745"
        style={styles.backButton}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: '#f4f4f9', // Adjust background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  backButton: {
    marginTop: 20,
  },
});

export default RequestScreen;
