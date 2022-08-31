import { View, Text, FlatList, Platform } from 'react-native'
import React from 'react'
import styles from './styles'
import { comboProducts } from '../../../assets/data/productsData'
import Product from '../product/Product'

const ComboProducts = () => {

    return (
        <View style={styles.combocontainer}>
            <Text style={styles.comboTitle}>Recommended Combo</Text>

            <FlatList
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
                renderItem={({ item }) => <Product id={item.id} title={item?.title} img={item.img} price={item.price} combo={"combo"} category={item.category} packConatains={item.packConatains} />}
                keyExtractor={item => item.id}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                inverted={false} //reverse the item default is true

            // ListFooterComponent={() => (
            //     <HottestPopularNewComboProducts />  // ...Some components those need to be below the list 

            // )}
            />
        </View>
    )
}

export default ComboProducts