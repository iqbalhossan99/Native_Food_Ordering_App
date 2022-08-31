import { View, Text, FlatList, TouchableHighlight, Platform } from 'react-native'
import React, { useState } from 'react'
import Product from '../product/Product'
// import { comboProducts } from '../../../assets/data/productsData'
import styles from './styles'
import HottestPopularNewComboProducts from '../hottestPopularNewComboProducts/HottestPopularNewComboProducts'


type Props = {}
const Products = (props: Props) => {
    const [refresh, setRefresh] = useState(false)


    return (
        <View style={styles.products}>
            {/* Recommended Combo Products */}
            {/* <FlatList
                ItemSeparatorComponent={
                    Platform.OS === 'android' &&
                    (({ highlighted }) => (
                        <View
                            style={[
                                styles.separator,
                                highlighted && { marginLeft: 0 }
                            ]}
                        />
                    ))
                }
                data={comboProducts}
                renderItem={({ item }) => <Product id={item.id} title={item?.title} img={item.img} price={item.price} />}
                keyExtractor={item => item.id}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                inverted={false} //reverse the item default is true

            // ListFooterComponent={() => (
            //     <HottestPopularNewComboProducts />  // ...Some components those need to be below the list 

            // )}
            /> */}




        </View>
    )
}

export default Products