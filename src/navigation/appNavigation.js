import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen'
import DevisScreen from '../screens/DevisScreen';
import { DocumentIcon, DocumentChartBarIcon } from "react-native-heroicons/solid";


const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Facture' component={HomeScreen} options={{tabBarLabel: 'Facture', tabBarLabelStyle:{color:"grey"}, tabBarShowLabel: true, tabBarIcon: () =>(<DocumentIcon color={"grey"} size={24} />) }} />
                <Tab.Screen name='Devis' component={DevisScreen} options={{tabBarLabel: 'Devis', tabBarLabelStyle:{color:"grey"}, tabBarShowLabel: true, tabBarIcon: () =>(<DocumentChartBarIcon color={"grey"} size={24} />) }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
