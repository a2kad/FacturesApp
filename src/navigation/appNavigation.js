import { ActivityIndicator, StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuth from '../hooks/useAuth';
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    const {user, loading } = useAuth();

    if (loading){
        return(
            <ActivityIndicator size='large' />
            )
    }else{
        if (user){
            return (
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name='Home' component={HomeScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            )
        }else{
            return (
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name='Login' component={LoginScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            )
        }
    }
    
}

const styles = StyleSheet.create({})