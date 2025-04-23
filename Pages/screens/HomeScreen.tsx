import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Results from './Results';

const HomeScreen = ({ navigation }: { navigation: any }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    
    const categories = [
        { id: 1, name: 'General Medicine', color: '#5fb9ff' },
        { id: 2, name: 'Family Medicine', color: '#5fb9ff' },
        { id: 3, name: 'Specialties', color: '#5fb9ff' }
    ];

    const quickActions = [
        { id: 1, name: 'Nearby', active: false },
        { id: 2, name: 'Top Rated', active: true }
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {!isSearchFocused && (
                    <View style={styles.header}>
                        <Text style={styles.title}>Find Your Doctor</Text>
                    </View>
                )}

                <View style={styles.searchContainer}>
                    <FontAwesome
                        name="search"
                        size={20}
                        color="#666"
                        style={[styles.searchIcon, isSearchFocused && styles.searchIconFocused]}
                    />
                    <TextInput
                        style={[styles.searchInput, isSearchFocused && styles.searchInputFocused]}
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        placeholder="Search doctors, specialties..."
                        placeholderTextColor="#999"
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                    />
                </View>

                {!isSearchFocused && (
                    <View style={styles.contentContainer}>
                        <View style={styles.quickActionsContainer}>
                            {quickActions.map((action) => (
                                <TouchableOpacity 
                                    key={action.id}
                                    style={[
                                        styles.quickActionButton,
                                        action.active && styles.quickActionButtonActive
                                    ]}
                                >
                                    <Text style={[
                                        styles.quickActionText,
                                        action.active && styles.quickActionTextActive
                                    ]}>
                                        {action.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <Text style={styles.sectionTitle}>Categories</Text>
                        <View style={styles.categoriesContainer}>
                            {categories.map((category) => (
                                <TouchableOpacity 
                                    key={category.id}
                                    style={[
                                        styles.categoryButton,
                                        { backgroundColor: category.color }
                                    ]}
                                >
                                    <Text style={styles.categoryText}>{category.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}

                {searchQuery.length > 0 && <Results query={searchQuery} />}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ffffff",
    },
    header: {
        marginBottom: 30,
        alignItems: 'center',
    },
    title: {
        color: '#2a2a2a',
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
    },
    searchContainer: {
        width: '100%',
        position: 'relative',
        marginBottom: 20,
    },
    searchInput: {
        backgroundColor: '#f0f0f0',
        borderRadius: 30,
        width: '100%',
        padding: 15,
        paddingLeft: 50,
        fontSize: 16,
        color: '#333',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    searchInputFocused: {
        backgroundColor: '#fff',
        borderColor: '#5fb9ff',
        borderWidth: 1,
    },
    searchIcon: {
        position: 'absolute',
        left: 20,
        top: 15,
        zIndex: 1,
    },
    searchIconFocused: {
        color: '#5fb9ff',
    },
    contentContainer: {
        width: '100%',
        marginTop: 20,
    },
    quickActionsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    quickActionButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        marginHorizontal: 10,
        backgroundColor: '#fff',
    },
    quickActionButtonActive: {
        backgroundColor: '#5fb9ff',
        borderColor: '#0f8ad1',
    },
    quickActionText: {
        fontWeight: '600',
        color: '#666',
    },
    quickActionTextActive: {
        color: '#fff',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2a2a2a',
        marginBottom: 15,
        paddingLeft: 10,
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    categoryButton: {
        width: '48%',
        marginBottom: 15,
        borderRadius: 15,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    categoryText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default HomeScreen;