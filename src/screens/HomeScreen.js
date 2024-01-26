import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web';


export default function HomeScreen() {
    
    return (
        <ScrollView style={styles.container}>
            <Text>Factures</Text>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});