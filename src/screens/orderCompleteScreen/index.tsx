import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native'
import Button from '../../component/button/Button'
import OutLineButton from '../../component/outLineButton/OutLineButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigations/Routers'
type screenProp = NativeStackNavigationProp<RootStackParamList>;
// type orderCompleteScreenProp = NativeStackNavigationProp<RootStackParamList, 'OrderComplete'>;


const OrderCompleteScreen = () => {

    const navigation = useNavigation<screenProp>();

    const handleTrackOrder = () => {
        navigation.navigate("TrackOrder")
    }
    const handleContinueShoping = () => {
        navigation.navigate("Home")
    }


    return (
        <SafeAreaView style={styles.orderCompleteContainer}>
            <View>
                <Image
                    style={styles.orCompleteImg}
                    source={require('../../../assets/images/OrderCompleteImg/orComplete.png')}
                />
            </View>

            <View>
                <Text style={styles.congratulationsTitle}>
                    Congratulations!!!
                </Text>
                <Text style={styles.congratulationsText}>
                    Your order have been taken and is being attended to
                </Text>
            </View>
            {/* Button */}
            <View >
                <View style={styles.trackOrderingBtn}>
                    <Button title="Track order" handleBtn={handleTrackOrder} />
                </View>

                <OutLineButton title='Continue shopping' handleBtn={handleContinueShoping} />
            </View>
        </SafeAreaView>
    )
}

export default OrderCompleteScreen