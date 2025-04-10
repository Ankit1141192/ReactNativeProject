import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

const { width } = Dimensions.get('window');

const productData = [
  { id: '1', image: { uri: 'https://cdn.pixabay.com/photo/2021/08/03/06/47/perfume-6518634_1280.jpg' } },
  { id: '2', image: { uri: 'https://cdn.pixabay.com/photo/2021/08/23/10/21/headphones-6567453_1280.jpg' } },
  { id: '3', image: { uri: 'https://cdn.pixabay.com/photo/2018/12/17/23/39/baby-shoes-3881526_1280.jpg' } },
  { id: '4', image: { uri: 'https://cdn.pixabay.com/photo/2013/07/13/12/34/handbag-159884_1280.png' } },
  { id: '5', image: { uri: 'https://cdn.pixabay.com/photo/2017/08/02/01/34/pocket-watch-2569573_1280.jpg' } },
];

const ITEM_WIDTH = width * 0.8;
const ITEM_SPACING = 10;
const INTERVAL_TIME = 3000;

const ProductScreen = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const extendedProductData = useMemo(() => [...productData, ...productData], []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % extendedProductData.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, [currentIndex, extendedProductData.length]);

  const renderItem = useCallback(({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={0.9}
      onPress={() => console.log(`Selected product: ${item.id}`)}
    >
      <Image source={item.image} style={styles.productImage} resizeMode="cover" />
    </TouchableOpacity>
  ), []);

  const handleScrollToIndexFailed = useCallback((info) => {
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({ index: info.index, animated: false });
    }, 500);
  }, []);

  const getItemLayout = useCallback((_, index) => ({
    length: ITEM_WIDTH + ITEM_SPACING,
    offset: (ITEM_WIDTH + ITEM_SPACING) * index,
    index,
  }), []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={extendedProductData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + ITEM_SPACING}
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={styles.listContent}
        onScrollToIndexFailed={handleScrollToIndexFailed}
        getItemLayout={getItemLayout}
        initialScrollIndex={0}
      />

      <View style={styles.paginationContainer}>
        {productData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              {
                backgroundColor:
                  currentIndex % productData.length === index
                    ? '#3498db'
                    : '#e0e0e0',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  
  itemContainer: {
    width: ITEM_WIDTH,
    marginHorizontal: 5,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});

export default ProductScreen;
