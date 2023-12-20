import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DevisScreen() {
    return (
        <View style={styles.container}>
            <Text>DevisScreen</Text>
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
});