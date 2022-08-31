import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import styles from './style'
import MapView, { Callout, Circle, Heatmap, Marker, Overlay, Polygon, Polyline } from 'react-native-maps'
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import MapViewDirections from 'react-native-maps-directions';



const Map = () => {

    const pick = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    const drop = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const commonConOrdinates = [
        {
            id: "1",
            latitude: 23.7494,
            longitude: 90.4090,

        },

        {
            id: "2",
            latitude: 23.7272,
            longitude: 90.3966,

        }, {
            id: "3",
            latitude: 23.7710,
            longitude: 90.3639,

        },

        {
            id: "4",
            latitude: 23.7792,
            longitude: 90.3737,

        }, {
            id: "5",
            latitude: 23.7598,
            longitude: 90.3913,

        },
    ]

    const WeightedLatLng = {
        latitude: 23.7710,
        longitude: 90.3639,
        weight: 20
    }

    const GOOGLE_API = 'AIzaSyC49x0zWY8KGf_dUPk1yY0kyUBygq19AWk'
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 23.7494,
                    longitude: 90.4090,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >

                <Polygon
                    coordinates={commonConOrdinates}
                    // fillColor={'#fff'}
                    fillColor={'rgba(134, 115, 209, 0.31)'}
                    strokeWidth={1}
                />

                {/* <Polyline
                    coordinates={commonConOrdinates}
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000'
                    ]}
                    strokeWidth={6}
                /> */}

                <Circle
                    center={{
                        latitude: 23.7494,
                        longitude: 90.4090,
                    }}
                    radius={1500}
                    strokeColor="#000"
                    fillColor={'rgba(134, 115, 209, 0.31)'}
                />

                <Marker coordinate={{
                    latitude: 23.7494,
                    longitude: 90.4090,

                }}
                    image={require("../../../assets/images/mapImg/pin.png")}
                >

                    <Callout tooltip >
                        <View style={styles.toolTip}>
                            <Text style={
                                { fontSize: 30, }
                            }>Best Software Solution</Text>
                            <Image style={{ width: 150, height: 150, marginTop: 10, alignSelf: "center" }} source={require("../../../assets/images/mapImg/bitSoft.png")} />
                        </View>
                    </Callout>
                </Marker>
                <Marker coordinate={{

                    latitude: 23.7710,
                    longitude: 90.3639,
                }}
                    image={require("../../../assets/images/mapImg/pin.png")}
                />




            </MapView>

        </View>
    )

}

export default Map;
