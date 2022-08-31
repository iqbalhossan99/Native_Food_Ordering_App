import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

type Props = {}

const Header = (props: Props) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Image source={require('../../../assets/images/headerImgs/menuIcon.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.cartContainer}>
                <Image source={require('../../../assets/images/headerImgs/cartImg.png')} />
                <Text >
                    My Basket
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header