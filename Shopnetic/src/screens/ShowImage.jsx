import React, { useRef, useEffect } from 'react';
import { ScrollView, StyleSheet, Image, View, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ShowImage = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef(null);

    const images = [
        'https://cdn.pixabay.com/photo/2020/09/23/20/27/headphones-5596987_1280.jpg',
        'https://cdn.pixabay.com/photo/2019/11/29/13/09/perfume-4661282_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/01/16/13/58/sale-7722453_1280.png',
        'https://cdn.pixabay.com/photo/2015/04/04/19/08/fifty-706883_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/08/29/14/47/perfume-3640056_1280.jpg',
        "https://cdn.pixabay.com/photo/2020/12/10/12/33/laptop-5820171_1280.png",
        'https://cdn.pixabay.com/photo/2016/10/07/12/03/camera-1721378_1280.jpg',
        'https://cdn.pixabay.com/photo/2021/10/06/19/57/deal-of-the-day-6686603_1280.png',
    ];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index === images.length - 1) {
                scrollViewRef.current?.scrollTo({
                    x: 0,
                    animated: false,
                });
                index = 0;
            } else {
                index += 1;
                scrollViewRef.current?.scrollTo({
                    x: index * (width - 40),
                    animated: true,
                });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <View>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ padding: 10 }}
                pagingEnabled
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >
                {images.map((uri, index) => (
                    <Image key={index} style={styles.ShowImage} source={{ uri }} />
                ))}
            </ScrollView>
        </View>
    );
};

export default ShowImage;

const styles = StyleSheet.create({
    ShowImage: {
        width: width - 40, // Adjust for padding
        height: 200,
        borderRadius: 10,
        marginBottom: 8,
        resizeMode: 'cover',
        marginHorizontal: 5,
    },
});