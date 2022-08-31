import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './style'

type Props = {
    title: string,
    handleBtn: any
}

const Button: FC<Props> = ({ title, handleBtn }) => {

    return (
        <View>
            <TouchableOpacity
                style={styles.btn}
                onPress={handleBtn}
            >
                <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button