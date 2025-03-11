import React, { useState } from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const list = [
    { id: 1, title: 'first', image: require('./assets/adaptive-icon.png') },
    { id: 2, title: 'second', image: require('./assets/adaptive-icon.png') },
    { id: 3, title: 'third', image: require('./assets/adaptive-icon.png') }
];

export default function AppCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    };

    return (
        <View style={styles.container}>
            <ScrollView 
                horizontal 
                pagingEnabled 
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {list.map((item, index) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                ))}
            </ScrollView>

            {/* Pagination Dots */}
            <View style={styles.pagination}>
                {list.map((_, index) => (
                    <View key={index} style={[styles.dot, activeIndex === index && styles.activeDot]} />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: width * 0.8,
        height: width / 2,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 5
    },
    activeDot: {
        backgroundColor: '#333'
    }
});
