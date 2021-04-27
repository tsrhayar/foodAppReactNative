// import { StatusBar } from 'expo-status-bar';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from './Screen/Home'
import GetStarted from './Screen/GetStarted'
import Search from './Screen/Search'
import Profil from './Screen/Profil'
import Cart from './Screen/Cart'
import Home from './Screen/Home';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();


const RootTab = () => {

  return(
   
    
<Tab.Navigator>
        <Tab.Screen name="Home" 
        component={Home}
        options={{
          tabBarIcon: () => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }} />
        <Tab.Screen name="Search" 
        component={Search} 
        options={{
          tabBarIcon: () => (
            <AntDesign name="search1" size={24} color="black" />
          ),
        }}/>
        <Tab.Screen name="Profil" 
        component={Profil}
        options={{
          tabBarIcon: () => (
            <AntDesign name="user" size={24} color="black" />
          ),
        }} />
      </Tab.Navigator>
 
  )

}


export default function App() {

  return (
  
    <NavigationContainer>
     
        
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="Home" component={RootTab} options={{ title: 'Home ' }} />
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>

    </NavigationContainer>

  );
}




