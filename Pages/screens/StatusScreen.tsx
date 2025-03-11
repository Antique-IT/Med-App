import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const StatusScreen = ({ navigation }: { navigation: any }) => {
  const [requestId, setRequestId] = useState('');
  const [status, setStatus] = useState('');

  const checkStatus = () => {
    // Mock data for request status
    const mockData = {
      '12345': 'Processing',
      '67890': 'Completed',
      '11223': 'Pending',
    };

    if (mockData[requestId]) {
      setStatus(mockData[requestId]);
    } else {
      Alert.alert('Error', 'No request found with that ID');
      setStatus('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check Request Status</Text>

      <Text style={styles.label}>Enter Request ID:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your request ID"
        value={requestId}
        onChangeText={setRequestId}
        keyboardType="numeric"
      />

      <Button title="Check Status" onPress={checkStatus} color="#007BFF" />

      {status && (
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Status: {status}</Text>
        </View>
      )}

      <Button
        title="Back to Home"
        onPress={() => navigation.goBack()}
        color="#28A745"
        style={styles.backButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '80%',
  },
  statusContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#f1f1f1',
    borderRadius: 4,
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  backButton: {
    marginTop: 20,
  },
});

export default StatusScreen;
