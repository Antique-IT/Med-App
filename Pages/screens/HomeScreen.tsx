import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Dimensions, } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Results from './Results'; // Import the Results component

const HomeScreen = ({ navigation }: { navigation: any }) => {
    const width = Dimensions.get('window').width;
    const [text, onChangeText] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.scrollvertical} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={[styles.text1, isClicked && styles.gone]}> Antique Medical Society </Text>
                </View>

                <TextInput
                    style={[styles.textinput1, isClicked && styles.searching]}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Search"
                    onFocus={() => setIsClicked(true)}
                    onBlur={() => setIsClicked(false)}
                />

                <FontAwesome
                    name="search"
                    size={24}
                    color="black"
                    style={[styles.searchI, isClicked && styles.moveIcon]}
                />

                <View style={[styles.cont2, isClicked && styles.cont3]}>
                    <View style={styles.cont4}>
                        <TouchableOpacity style={[styles.button]}>
                            <Text style={[styles.TB]}>Others Kaw</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button2]}>
                            <Text style={[styles.TB2]}>Others Kita</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.nbd}>
                        <Text style={styles.nearbyD}>Doctors Nearby</Text>
                    </View>
                </View>

                {/* Show the Results component based on the search query */}
                {text.length > 0 && <Results query={text} />}  {/* Pass the search query to Results */}
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        paddingTop: 0,
    },
    text1: {
        backgroundColor: '#f5f5f5',
        color: 'black',
        top: '22%',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
    },
    textinput1: {
        borderWidth: 1,
        alignItems: "center",
        borderColor: 'black',
        borderRadius: 50,
        width: '80%',
        top: '5%',
        padding: 10,
        paddingLeft: 50,
    },
    searchI: {
        position: 'relative',
        right: 130,
    },
    gone: {
        display: 'none',
    },
    searching: {
        borderWidth: 1,
        alignItems: "center",
        borderColor: 'black',
        borderRadius: 50,
        width: '80%',
        top: '-5%',
    },
    moveIcon: {
        top: -54,
    },
    cont2: {
        top: 25,
    },
    nbd: {
        top: '120%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nearbyD: {
        fontWeight: 'bold',
    },
    scrollvertical: {
        flex: 1,
    },
    cont3: {
        display: 'none',
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#e0dcdc',
        borderColor: '#a6a6a6',
        borderWidth: 1,
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    },
    button2: {
        width: 150,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#5fb9ff',
        borderColor: '#0f8ad1',
        borderWidth: 1,
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    },
    TB: {
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 14,
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: 'bold',
    },
    TB2: {
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 14,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    cont4: {
        flexDirection: 'row',
        gap: 0,
        top: 20,
    },
});

export default HomeScreen;
