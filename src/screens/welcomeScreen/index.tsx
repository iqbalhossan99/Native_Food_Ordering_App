import { View, Text, SafeAreaView, Image, } from 'react-native'
import React from 'react'
import styles from './styles'
import AppLoading from 'expo-app-loading';
import { useFonts, Sacramento_400Regular } from '@expo-google-fonts/sacramento';
import Button from '../../component/button/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/Routers';
import { StatusBar } from 'expo-status-bar';


type authenticationScreenProp = NativeStackNavigationProp<RootStackParamList, 'Authentication'>;


const WelcomeScreen = () => {

    const navigation = useNavigation<authenticationScreenProp>();

    const [fontsLoaded] = useFonts({
        Sacramento_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }


    const handleContinueBtn = () => {
        navigation.navigate("Authentication")

    }
    return (
        <SafeAreaView style={styles.wlcContainer}>
            {/* <StatusBar backgroundColor="#6a51ae" /> */}
            {/* Welcome Banner */}

            <View style={styles.wlcBanner}>
                <Image
                    source={require('../../../assets/images/wlcImg/fruit-drops.png')}
                    style={{ alignSelf: 'flex-end', marginRight: 40 }}
                />
                <Image
                    source={require('../../../assets/images/wlcImg/imgbin-basket-of-fruit.png')}
                    style={{ marginBottom: 10 }}
                />
                <Image
                    source={require('../../../assets/images/wlcImg/basket_tray.png')}

                />
            </View>

            {/* Welcome Content */}
            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>
                    Get The Freshest Fruit Salad Combo
                </Text>
                <Text style={styles.wlcDesc}>
                    We deliver the best and freshest fruit salad in town. Order for a combo today!!!                </Text>
                <Button title={"Let’s Continue"} handleBtn={handleContinueBtn} />

            </View>


        </SafeAreaView>
    )
}

export default WelcomeScreen