import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation()

    const handleSubmit = async () => {
        if (email && password) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (err) {
                console.log('Login error', err.message);
            }
        }
    }
    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
            <Text>E-mail</Text>
            <TextInput style={styles.formField} value={email} onChangeText={value => setEmail(value)} />
            <Text>Password</Text>
            <TextInput style={styles.formField} value={password} onChangeText={value => setPassword(value)} />
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
                <Text>Sign Up</Text>
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
    formField: {
        backgroundColor: '#CCC',
        fontSize:12
    },
    button: {
        padding:10,
        backgroundColor:'grey',
    },
    buttonText:{
        color:'white'
    }
})