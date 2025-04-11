import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, SafeAreaView } from 'react-native';
import CartScreen from "./Screen/CartScreen.jsx"
import HomeScreen from "./Screen/HomeScreen.jsx"
import SearchScreen from "./Screen/SearchScreen.jsx"
import ProductDetails from './Screen/ProductDetails.jsx'
import UserScreen from './Screen/UserScreen.jsx'
import LoginScreen from './Screen/LoginScreen.jsx';
import SignupScreen from './Screen/SignupScreen.jsx';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



const NotificationScreen = () => (
  <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Notifications</Text>
  </SafeAreaView>
);

// Tab Navigator with Icons
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      // tabBarStyle: { display: 'none' },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search-outline';
        } else if (route.name === 'Cart') {
          iconName = focused ? 'cart' : 'cart-outline';
        } else if (route.name === 'User') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#e91e63',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} options ={{headerShown:false}} />
    <Tab.Screen name="Search" component={SearchScreen} options ={{headerShown:false}} />
    <Tab.Screen name="Cart" component={CartScreen} options ={{headerShown:false}} />
    <Tab.Screen name="User" component={UserScreen} options={{ title: 'User' }} />
  </Tab.Navigator>
);
// Stack Navigator
const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="Notifications" component={NotificationScreen}  />
    <Stack.Screen name="CartDetails" component={CartScreen} options={{ title: 'Cart Details' }} />
  </Stack.Navigator>
);

// Drawer Navigator
const App = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Shopnetic" component={MainStack} />
      <Drawer.Screen name ="Profile" component ={UserScreen}/>
      <Drawer.Screen name="ProductDetails" component={ProductDetails} />
      <Drawer.Screen name="login" component={LoginScreen} />
      <Drawer.Screen name="signup" component={SignupScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;
