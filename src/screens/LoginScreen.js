import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        if (email && password) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (err) {
                console.log('Got error', err.message);
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
            <Pressable onPress={handleSubmit}>
                <Text>Se connecter</Text>
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
    formField:{
        backgroundColor: '#666'
    },
})