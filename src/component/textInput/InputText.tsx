import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
'./style'

type InputField = {
    label: string,
    name: string,
    placeholder: string,
    keyboardType: any
}

const InputText: FC<InputField> = ({ label, name, placeholder, keyboardType }) => {
    return (
        <View>

            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.inputField} placeholder={placeholder}
                name={name}
                keyboardType={keyboardType}
            />
        </View>
    )
}

export default InputText