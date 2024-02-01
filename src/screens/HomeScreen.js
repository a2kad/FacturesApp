import { StyleSheet, Text, ScrollView, TextInput, SafeAreaView, View } from 'react-native'
import React from 'react'


export default function HomeScreen() {
    const [text, onChangeText] = React.useState('');
    return (
        <SafeAreaView>
            <ScrollView>
                <View  style={styles.inputLine}>
                    <Text>Émetteur</Text>
                    <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder="Sélectionnez l'émetteur"></TextInput>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    inputLine: {
        padding:10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: '#CCC',
        padding: 10,
        marginLeft: 0,
    },
});