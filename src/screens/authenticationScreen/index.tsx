import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import AppLoading from 'expo-app-loading';
import { useFonts, Sacramento_400Regular } from '@expo-google-fonts/sacramento';
import Button from '../../component/button/Button';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/Routers';
import { StatusBar } from 'expo-status-bar';

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;


const AuthenticationScreen = () => {

    const navigation = useNavigation<homeScreenProp>();

    const [fontsLoaded] = useFonts({
        Sacramento_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }


    const handleOrderingBtn = () => {
        navigation.navigate("Home")
    }
    return (
        <SafeAreaView style={styles.authContainer}>
            {/* Auth Banner */}
            <View style={styles.authBanner}>
                <Image
                    source={require('../../../assets/images/wlcImg/fruit-drops.png')}
                    style={{ alignSelf: 'flex-end', marginRight: 40 }}
                />
                <Image
                    source={require('../../../assets/images/authImgs/kisspng-fruit-basket.png')}
                    style={{ marginBottom: 10 }}
                />
                <Image
                    source={require('../../../assets/images/wlcImg/basket_tray.png')}

                />
            </View>

            {/* Auth Content */}
            <View style={styles.contentContainer}>
                <Text style={styles.qsTitle}>
                    What is your firstname?
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your FirstName"
                    keyboardType="default"
                />
                {/* Start Ordering Button */}
                <Button title={"Start Ordering"} handleBtn={handleOrderingBtn} />

            </View>


        </SafeAreaView>
    )
}

export default AuthenticationScreen