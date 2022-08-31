import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import styles from './style'
import { useNavigation } from '@react-navigation/native'


const BackButton = () => {
    const navigation = useNavigation();
    const handleGoBacke = () => {
        navigation.goBack()
        console.log("goback")
    }

    return (
        <View>
            <TouchableOpacity onPress={handleGoBacke} style={styles.backBtn}>
                <FontAwesome name="chevron-left" size={22} color="black" />
                <Text style={styles.btnText} >Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BackButton