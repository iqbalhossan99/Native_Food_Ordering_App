import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, ScrollView, Pressable, Modal, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Banner from '../../component/banner/Banner'
import { orderListedProducts } from '../../../assets/data/productsData'
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import HrLine from '../../component/hrLine/HrLine'
import InputText from '../../component/textInput/InputText'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Button from '../../component/button/Button'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigations/Routers'

type orderCompleteScreenProp = NativeStackNavigationProp<RootStackParamList, 'OrderComplete'>;


const OrderList = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation<orderCompleteScreenProp>()

    const handlePayBtn = () => {
        navigation.navigate("OrderComplete")
    }

    const renderFooter = () => {
        return (
            <ActivityIndicator size={'large'} color={"#ffa451"} />
        )
    }

    return (
        <SafeAreaView style={styles.orderListContainer}>
            {/* <Banner /> */}
            <ScrollView>

                {/* < InputText label={"Delivery address"} placeholder={"Delivery address"} name={"address"} /> */}


                <View style={styles.orderListSection}>
                    <FlatList
                        data={orderListedProducts}
                        renderItem={({ item }) =>
                            <>
                                <View style={styles.orderList}>
                                    <View style={styles.orderListImgContainer}>
                                        <Image source={{ uri: item.img }} style={styles.orderListImg} />
                                    </View>

                                    <View>
                                        <Text style={styles.orderListName}> {item.title}</Text>
                                        <Text style={styles.quantity}> {item.quantity} packs</Text>
                                    </View>

                                    <View style={styles.price}>
                                        <MaterialCommunityIcons name="currency-ngn" size={18} color="black" />
                                        <Text style={styles.priceText}>
                                            {item.price}</Text>
                                    </View>
                                </View>
                                <HrLine />
                            </>
                        }

                        ListFooterComponent={renderFooter}
                    />
                </View>

                <View style={styles.orderListBottom}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.totalTitle}>Total</Text>
                        <View style={styles.totalPrice}>
                            <MaterialCommunityIcons name="currency-ngn" size={26} color="black" />
                            <Text style={styles.totalPriceText}>60000</Text>
                        </View>
                    </View>


                    {/* Modal Form */}
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <StatusBar
                                animated={true}
                                backgroundColor="rgba(0,0,0,0.6)"


                            />
                            <View style={styles.centeredView}>
                                {/* Close Button */}
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <AntDesign name="close" size={35} color="black" />
                                </TouchableOpacity>

                                <View style={styles.modalView}>
                                    {/* Form */}
                                    < InputText label={"Delivery address"} placeholder={"Delivery address"} name={"address"} keyboardType={"default"} />
                                    < InputText label={"Number we can call"} placeholder={"09090605708"} name={"address"} keyboardType={"phone-pad"} />

                                    <View style={styles.btnContainer}>
                                        <TouchableOpacity
                                            onPress={handlePayBtn}
                                            style={styles.payBtn}>
                                            <Text style={styles.payBtnText}>Pay on Delivery</Text>
                                        </TouchableOpacity>
                                        {/* Card Modal */}

                                        <TouchableOpacity
                                            style={styles.payBtn}>
                                            <Text style={styles.payBtnText}>Pay with Card</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>
                            </View>
                        </Modal>
                    </View>

                    {/* Checkout button */}
                    <View style={styles.checkoutBtn}>
                        <Button title={"Checkout"} handleBtn={handlePayBtn} />
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView >
    )
}





// const styles = StyleSheet.create({

// });
export default OrderList