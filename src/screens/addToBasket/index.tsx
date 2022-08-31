import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ProductDetails from '../../component/productDetails/ProductDetails'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ProductsData } from '../../../assets/data/productsData'
import BackButton from '../../component/backButton/BackButton'

const AddToBasket = () => {

    const navigation = useNavigation();
    // console.log(navigation.goBack())

    // const handleGoBacke = () => {
    //     navigation.goBack()
    // }

    // Get params from navigation
    const route = useRoute();
    const getId = route.params?.id;

    const filterProduct = ProductsData.filter((product) => {
        if (product.id === getId) {
            return product
        }
    })


    return (
        <SafeAreaView style={styles.basketContainer}>
            <ScrollView>
                {/* Basket Banner */}
                <View style={styles.basketBanner}>
                    {/* <BackButton goBack={handleGoBacke} /> */}
                    <View style={styles.bannerImgContainer}>
                        <Image
                            source={{ uri: filterProduct[0].img }}
                            style={styles.basketBannerImg}
                        />
                    </View>
                </View>
                {/* Product Details */}
                <ProductDetails product={filterProduct[0]} />
            </ScrollView>

        </SafeAreaView>
    )
}

export default AddToBasket