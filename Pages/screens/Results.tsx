import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';

// Define the type for each result item
interface ResultItem {
  id: number;
  name: string;
  specialty?: string;
  location?: string;
}

// Define the type for the props passed to the Results component
interface ResultsProps {
  query: string; // Or use a more specific type if needed
}

const Results: React.FC<ResultsProps> = ({ query }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<ResultItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      fetchResults(query);
    }
  }, [query]);

  // Function to fetch the results from the server
  const fetchResults = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://192.168.0.108:3000/search', { 
        params: { query } 
      });
      setResults(response.data); // Assuming the response is an array of ResultItem
    } catch (err) {
      setError('Error fetching results');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Render individual result item
  const renderItem = ({ item }: { item: ResultItem }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemSpecialty}>
        {item.specialty ? `Specialty: ${item.specialty}` : 'Specialty: Not Available'}
      </Text>
      <Text style={styles.itemLocation}>
        {item.location ? `Location: ${item.location}` : 'Location: Not Available'}
      </Text>
    </TouchableOpacity>
  );

  // Render the loading or error state
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  // Render the list of results
  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No results found</Text>}
      />
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  itemContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemSpecialty: {
    fontSize: 14,
    color: '#555',
  },
  itemLocation: {
    fontSize: 12,
    color: '#777',
  },
});

export default Results;
