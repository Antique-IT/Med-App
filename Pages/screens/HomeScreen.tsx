import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }: { navigation: any }) => {
    const width = Dimensions.get('window').width
    
        const list = [
            {
                id: 1,
                title: 'first',
                image: require('../../assets/favicon.png')
    
            },
    
            {
                id: 2,
                title: 'second',
                image: require('./../../assets/Images/brgyimg2.jpg')
    
            },
    
            {
                id: 3,
                title: 'third',
                image: require('./../../assets/Images/brgyimg3.jpg')
    
            },
    
            {
                id: 4,
                title: 'third',
                image: require('./../../assets/Images/brgyimg4.jpg')
    
            },
    
        ]

    return (
        <View style={styles.container}>
             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {list.map((item)=> (
                    <View key={item.id} style={styles.card}> 
                    <Image  source={item.image} style={styles.img} />
                    <Text  style={styles.title}>{item.title}
                    </Text>
                    </View>
                    ))}
             </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        paddingTop: 50,
      },

    CT:{
        flex:1,
        justifyContent:'center',
        overflow:'hidden',
    },

    img:{
        width:'100%',
        height: '100%',
        borderRadius: 10,
        
    },

    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        alignItems: 'stretch',
    },
    title: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold",
        color:"black"
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        color: '#555',
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 100,
        alignItems: 'center',
        marginVertical: 10,
    },
    button1: {
        borderWidth: 4,
        borderColor: '#0056b3', // Blue border color
    },
    button2: {
        borderWidth: 4,
        borderColor: '#218838', // Green border color
    },
    buttonText: {
        color: 'Black',
        fontSize: 18,
        fontWeight: 'bold',
    },

    card: {
        width: 300,
        height: 350,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginHorizontal: 50,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        alignItems: "center",
        padding: 10,
      },
});

export default HomeScreen;
