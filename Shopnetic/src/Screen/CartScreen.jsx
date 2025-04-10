import React, { useLayoutEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation();

  // Hide bottom tab bar only on this screen
  useLayoutEffect(() => {
    const parent = navigation.getParent();
    parent?.setOptions({
      tabBarStyle: { display: 'none' },
    });

    return () => {
      parent?.setOptions({
        tabBarStyle: undefined,
      });
    };
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.emptyContainer}>
        <Ionicons name="cart" size={50} color="#ccc" />
        <Text style={styles.emptyCartTitle}>Your cart is empty</Text>
        <Text style={styles.emptyCartText}>
          Looks like you haven't added any products to your cart yet.
        </Text>
        <TouchableOpacity
          style={styles.shopNowButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.shopNowText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyCartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 12,
    marginBottom: 8,
  },
  emptyCartText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  shopNowButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  shopNowText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
