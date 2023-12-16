import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

export default function HomeScreen() {
    const handleLogout = async ()=>{
        await signOut(auth);
    }
    return (
        <View  style={styles.container}>
            <Text>HomeScreen</Text>
            <Pressable style={styles.button} onPress={handleLogout}>
                <Text  style={styles.buttonText}>LogOut</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding:10,
        backgroundColor:'grey',
    },
    buttonText:{
        color:'white'
    }
});