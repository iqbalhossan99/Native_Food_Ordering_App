import { View, Text, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import React from 'react'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';


type Props = {}

const SearchInput = (props: Props) => {
    return (
        <View style={styles.searchContainer}>
            <TouchableOpacity style={styles.searchInput} activeOpacity={.5}>
                <AntDesign name="search1" size={20} color="#86869E" />
                <TextInput style={styles.textIput}
                    placeholder="Search for fruit salad combos"
                    keyboardType="default"
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchRight}>
                <AntDesign name="menu-fold" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput