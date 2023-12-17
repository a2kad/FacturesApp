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
            <View style={styles.inputView}>
                <Text>E-mail :</Text>
                <TextInput style={styles.formField} value={email} onChangeText={value => setEmail(value)} />
            </View>
            <View style={styles.inputView}>
                <Text>Mot de passe :</Text>
                <TextInput style={styles.formField} value={password} onChangeText={value => setPassword(value)} />
            </View>
            <View style={styles.inputViewCenter}>
                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </Pressable>
            </View>
            <View style={styles.inputViewCenter}>
                <Pressable onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.linkText}>Sign Up</Text>
                </Pressable>
            </View>
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
        fontSize: 12,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:8
    },
    button: {
        padding: 10,
        backgroundColor: '#075985',
        borderRadius:8,
        padding:10
    },
    buttonText: {
        color: 'white',
        fontWeight:'bold'
    },
    inputView: {
        marginVertical: 10,
        width:'90%'
    },
    inputViewCenter: {
        marginVertical: 10,
    },
    linkText:{
        color:'#0000EE',
        fontWeight:'bold'
    }
})