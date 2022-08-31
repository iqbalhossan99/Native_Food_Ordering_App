import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ProductType } from '../../model/productType';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/Routers';

type detailsScreenProp = NativeStackNavigationProp<RootStackParamList>;


const Product: FC<ProductType> = ({ id, title, img, price, combo }) => {

    const navigation = useNavigation<detailsScreenProp>();
    const handleNavigate = () => {
        navigation.navigate("Details", { id: id })
    }

    return (
        <TouchableOpacity onPress={handleNavigate} style={[styles.product, combo && styles.comboGap]} activeOpacity={0.5}>
            <TouchableOpacity >
                <Entypo name="heart-outlined" size={20} color="#F08626" style={{ alignSelf: "flex-end" }} />
            </TouchableOpacity>
            <View style={styles.productImgContainer}>
                <Image source={{ uri: img }} style={styles.productImg} />
            </View>
            <Text style={styles.productName}> {title}</Text>

            <View style={styles.productBottom}>
                <View style={styles.productPrice}>
                    <MaterialCommunityIcons name="currency-ngn" size={20} color="#F08626" />
                    <Text style={styles.priceText}>
                        {price}</Text>
                </View>
                <TouchableOpacity style={styles.plusIcon}>
                    <Entypo name="plus" size={20} color="#F08626" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>

    )
}

export default Product