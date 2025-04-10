import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CartScreen from './CartScreen.jsx'
const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.detailContainer}>
      <FlatList
        ListHeaderComponent={
          <>
            <Image source={{ uri: product.image }} style={styles.detailImage} />
            <View style={styles.detailInfo}>
              <Text style={styles.detailTitle}>{product.title}</Text>

              <View style={styles.detailPriceRating}>
                <Text style={styles.detailPrice}>${product.price.toFixed(2)}</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.ratingText}>
                    {product.rating.rate} ({product.rating.count} reviews)
                  </Text>
                </View>
              </View>

              <Text style={styles.categoryLabel}>Category</Text>
              <View style={styles.categoryTag}>
                <Text style={styles.categoryTagText}>
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </Text>
              </View>

              <Text style={styles.descriptionLabel}>Description</Text>
              <Text style={styles.detailDescription}>{product.description}</Text>
            </View>
          </>
        }
        data={[]}
        renderItem={null}
        contentContainerStyle={styles.detailContent}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Ionicons name="cart" size={20} color="#fff" />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  detailHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  detailContent: {
    paddingBottom: 100,
  },
  detailImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  detailInfo: {
    padding: 16,
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  detailPriceRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  categoryLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    marginBottom: 6,
  },
  categoryTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  categoryTagText: {
    color: '#333',
    fontWeight: '500',
  },
  descriptionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  detailDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 10,
  },
  addToCartButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ProductDetails;
