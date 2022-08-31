import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'
import InputText from '../textInput/InputText'
import styles from './style'
import { useNavigation } from '@react-navigation/native'


const CommonModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [cardModalVisible, setCardModalVisible] = useState(false);

    const navigation = useNavigation()

    const handlePayBtn = () => {
        navigation.navigate("OrderComplete")
    }
    return (
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
                // barStyle={statusBarStyle}
                // showHideTransition={statusBarTransition}
                // hidden={hidden} 

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
                        < InputText label={"Card Holders Name"} placeholder={"Adolphus Chris"} name={"holderName"} keyboardType={"default"} />

                        < InputText label={"ACard Number"} placeholder={"1234 5678 9012 1314"} name={"cardNumber"} keyboardType={"phone-pad"} />

                        < InputText label={"Date"} placeholder={"10/30"} name={"date"} keyboardType={"Number"} />

                        < InputText label={"CCV"} placeholder={"123"} name={"CCV"} keyboardType={"Number"} />

                        <View style={styles.btnContainer}>
                            <TouchableOpacity
                                onPress={handlePayBtn}
                                style={styles.payBtn}>
                                <Text style={styles.payBtnText}>Pay on Delivery</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handlePayBtn}
                                style={styles.payBtn}>
                                <Text style={styles.payBtnText}>Pay with Card</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default CommonModal