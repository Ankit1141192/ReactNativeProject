import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import SearchScreen from './screens/SearchSceen'
import UserScreen from './screens/UserScreen'
const App = () => {
  return (
    <NavigationContainer>
       
      <Tab.Navigator>   
        <Tab.Screen  name="Home" component={HomeScreen} options={{headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
        let iconName = focused ? 'home' : 'home-outline';
        return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
     }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = focused ? 'search' : 'search-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          options: { headerShown: false }
        }} />
        
        <Tab.Screen name="Cart" component={CartScreen} options={{headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = focused ? 'cart' : 'cart-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          options: { headerShown: false }
        }} />
        <Tab.Screen name="User" component={UserScreen} options={{headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = focused ? 'person-circle' : 'person-circle-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          options: { headerShown: false }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})