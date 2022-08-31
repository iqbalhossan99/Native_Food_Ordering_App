import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import { Entypo } from '@expo/vector-icons'
import Map from '../../component/map/Map'



const TrackOrderScreen = () => {
    return (
        <SafeAreaView style={styles.tarckOrderContainer}>
            <ScrollView>
                <View>
                    <View >
                        {/* Track Step-1 */}
                        <View style={styles.trackStep}>
                            <View style={styles.trackImgAndText}>
                                <View style={styles.imgContainer}>

                                    <Image style={styles.trackImg} source={require('../../../assets/images/orderTarckingImg/orderTaken.png')} />
                                </View>
                                <Text style={styles.text}>Order Taken</Text>
                            </View>
                            <Image source={require('../../../assets/images/orderTarckingImg/tick.png')} />
                        </View>
                        <View style={styles.lineImgContainer}>

                            <Image style={styles.lineImg} source={require("../../../assets/images/orderTarckingImg/Line.png")} />
                        </View>
                    </View>
                    {/* Track Step-2 */}
                    <View>
                        <View style={styles.trackStep}>
                            <View style={styles.trackImgAndText}>
                                <View style={[styles.imgContainer, styles.prepared]}>
                                    <Image style={styles.trackImg} source={require('../../../assets/images/orderTarckingImg/orderPrepared.png')} />
                                </View>
                                <Text style={styles.text}>Order Taken</Text>
                            </View>
                            <Image source={require('../../../assets/images/orderTarckingImg/tick.png')} />
                        </View>
                        <View style={styles.lineImgContainer}>

                            <Image style={styles.lineImg} source={require("../../../assets/images/orderTarckingImg/Line.png")} />
                        </View>
                    </View>

                    {/* Track Step-3 */}
                    <View>
                        <View style={styles.trackStep}>
                            <View style={styles.trackImgAndText}>
                                <View style={[styles.imgContainer, styles.deliver]}>
                                    <Image style={styles.trackImg} source={require('../../../assets/images/orderTarckingImg/delivery-man-riding.png')} />
                                </View>
                                <Text style={styles.text}>Order Taken</Text>
                            </View>
                            <Image source={require('../../../assets/images/orderTarckingImg/phoneCall.png')} />
                        </View>
                        <View style={styles.lineImgContainer}>

                            <Image style={styles.lineImg} source={require("../../../assets/images/orderTarckingImg/Line.png")} />
                        </View>
                    </View>
                    {/* Map */}
                    <Map />
                    <View style={styles.lineImgContainer}>
                        <Image style={styles.lineImg} source={require("../../../assets/images/orderTarckingImg/Line.png")} />
                    </View>
                    {/* Order Received */}
                    <View>
                        <View style={styles.trackStep}>
                            <View style={styles.trackImgAndText}>
                                <View style={[styles.imgContainer, styles.received]}>
                                    <Image style={styles.trackImg} source={require('../../../assets/images/orderTarckingImg/tickBig.png')} />
                                </View>
                                <Text style={styles.text}>Order Received something</Text>
                            </View>
                            <Entypo name="dots-three-horizontal" size={40} color="#FFA451" />
                        </View>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default TrackOrderScreen