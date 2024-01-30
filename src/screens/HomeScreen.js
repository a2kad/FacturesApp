import { StyleSheet, Text, ScrollView, TextInput, SafeAreaView } from 'react-native'
import React from 'react'


export default function HomeScreen() {
    const [text, onChangeText] = React.useState('Useless Text');
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <TextInput style={styles.input} onChangeText={onChangeText} value={text}></TextInput>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});