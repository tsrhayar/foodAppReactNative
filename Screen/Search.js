import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Search = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Search Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center'
    },
    text :{
       fontSize: 17,
       fontWeight: 'bold',
       textAlign: 'center',
       justifyContent : 'center',
    },

  });

export default Search
