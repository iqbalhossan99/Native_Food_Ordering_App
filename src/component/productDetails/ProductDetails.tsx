import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from "./style"
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import HrLine from '../hrLine/HrLine'
import Line from '../line/Line'
import { ProductType } from '../../model/productType'
import { useNavigation } from '@react-navigation/native'
import Button from '../button/Button'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigations/Routers'

type orderListScreenProp = NativeStackNavigationProp<RootStackParamList>;


const ProductDetails: React.FC<{ product: ProductType }> = ({ product: { id, title, packConatains, price, } }) => {

    const [quantity, setQuantity] = useState<number>(1)
    const navigation = useNavigation<orderListScreenProp>();

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const handleDecreaseQuantity = () => {

        quantity > 1 && setQuantity(quantity - 1)
    }

    const totalPrice = parseInt(price) * quantity;

    const handleAddToBasketBtn = () => {
        navigation.navigate("OrderList")
    }
    return (
        <View style={styles.productDetailsContainer}>
            <Text style={styles.productName}>{title}</Text>
            {/* Price and Quantity */}
            <View style={styles.priceAndQuantity}>
                <View style={styles.quantity}>
                    <TouchableOpacity onPress={handleDecreaseQuantity}>
                        <AntDesign name="minuscircleo" size={32} color="black" />
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>{quantity}</Text>

                    <TouchableOpacity onPress={handleIncreaseQuantity} style={styles.Icon}>
                        <Entypo name="plus" size={32} color="#F08626" />
                    </TouchableOpacity>
                </View>

                <View style={styles.productPrice}>
                    <MaterialCommunityIcons name="currency-ngn" size={25} color="black" style={{ fontWeight: "500" }} />
                    <Text style={styles.priceText}>
                        {totalPrice}</Text>
                </View>
            </View>
            {/* Horizontal Line */}
            <HrLine />
            <View>
                <ScrollView>
                    <View>
                        <View style={styles.packContains}>
                            <View style={{ marginBottom: 18, }}>
                                <Text style={styles.packTitle}>One Pack Contains:</Text>
                                <Line />
                            </View>
                            <Text style={styles.packDetails}>{packConatains}.</Text>
                        </View>
                        <HrLine />

                        <View style={styles.bottomDetails}>
                            <Text>If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
                            <Text>If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
                            <Text>If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
                            <Text>If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
                            <Text>If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
                            <Text>If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
                            <Text>If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
                            <Text>If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
                            <Text>If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
                            <Text>If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
                            <Text>If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>

                            <View style={styles.addToBasketContainer}>
                                <TouchableOpacity style={styles.saveIcon}>
                                    <AntDesign name="hearto" size={24} color="#FFA451" />
                                </TouchableOpacity>

                                <View style={styles.addToBasketBtn}>
                                    <Button title={"Add To basket"} handleBtn={handleAddToBasketBtn} />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default ProductDetails