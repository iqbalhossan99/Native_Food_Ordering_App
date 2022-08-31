import { Text, SafeAreaView, ScrollView, View, VirtualizedList } from 'react-native'
import React from 'react'
import Header from '../../component/header/Header'
import styles from './styles'
import SearchInput from '../../component/searchInput/SearchInput'
import ComboProducts from '../../component/comboProducts/ComboProducts'
import HottestPopularNewComboProducts from '../../component/hottestPopularNewComboProducts/HottestPopularNewComboProducts'


const HomeScreen = () => {


    return (
        <SafeAreaView style={styles.homeContainer}>


            <Header />


            <ScrollView showsVerticalScrollIndicator={false}>
                <View>

                    <Text style={styles.homeQs}>
                        Hello Tony, What fruit salad combo do you want today?
                    </Text>
                    <SearchInput />
                    <ComboProducts />
                    <HottestPopularNewComboProducts />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen