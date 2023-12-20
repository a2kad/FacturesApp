import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen'
import DevisScreen from '../screens/DevisScreen';


const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Facture' component={HomeScreen} />
                <Tab.Screen name='Devis' component={DevisScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
