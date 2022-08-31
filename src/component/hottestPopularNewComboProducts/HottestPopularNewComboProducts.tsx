import { View, Text, TouchableOpacity, FlatList, Platform, RefreshControl } from 'react-native'
import React, { useCallback, useState } from 'react'
import styles from './styles'
import { ProductsData } from "../../../assets/data/productsData"
import Product from '../product/Product'
import Line from '../line/Line'

type Props = {}


const HottestPopularNewComboProducts = (props: Props) => {

    const [filterProducts, setFilterProducts] = useState<any>([]);
    const [category, setCategory] = useState<any>('');

    const hottest = "hottest";
    const popular = "popular";
    const newCombo = "new combo";
    const top = "top";


    // const [refreshing, setRefreshing] = React.useState(false);

    // const onRefresh = React.useCallback(async () => {
    //     setRefreshing(true);
    //     await (2000).then(() => setRefreshing(false));
    // }, []);


    const handleFilter = (getCatergory: any) => {
        const getFilterProducts = ProductsData.filter(product => {
            if (product.category?.toLocaleLowerCase().includes(getCatergory.toLocaleLowerCase())) {
                return product
            }
        })

        setFilterProducts(getFilterProducts);
        setCategory(getCatergory)

    }


    return (
        <View style={styles.hpntContainer}>
            {/* Products Tabs */}
            <View style={styles.tabs}>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleFilter('hottest')}>
                    {/* [styles.tabText, styles.active]  multi css */}
                    <Text style={[styles.tabText, (category === "hottest") && styles.active]}>Hottest</Text>
                    {
                        (category === hottest) && <Line />
                    }

                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleFilter('popular')}>
                    <Text style={[styles.tabText, (category === "popular") && styles.active]}>PoPular</Text>
                    {
                        (category === popular) && <Line />
                    }
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleFilter('new combo')}>
                    <Text style={[styles.tabText, (category === "new combo") && styles.active]}>New Combo</Text>
                    {
                        (category === newCombo) && <Line />
                    }
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => handleFilter('top')}>
                    <Text style={[styles.tabText, (category === "top") && styles.active]}>Top</Text>
                    {
                        (category === top) && <Line />
                    }
                </TouchableOpacity>
            </View>

            {/* Filter Products */}
            <View>
                {filterProducts.length !== 0 ?
                    <FlatList
                        ItemSeparatorComponent={(props) => {
                            // console.log('props', props); // here you can access the trailingItem with props.trailingItem
                            return (<View style={{ height: "100%", width: 16, }} />);
                        }}
                        data={filterProducts}
                        renderItem={(({ item }: any) => (
                            <Product id={item.id} title={item?.title} img={item.img} price={item.price} packConatains={item.packConatains} category={item.category} combo={""} />
                        ))}
                        keyExtractor={(item: any) => item.id as string}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    // refreshControl={
                    //     <RefreshControl
                    //         refreshing={refreshing}
                    //         onRefresh={onRefresh}
                    //     />
                    // }

                    /> :
                    // If aren't any data
                    <View style={styles.emptyProduct}>
                        <Text style={styles.emptyText}>
                            New Combo doesn't availabe!
                        </Text>
                    </View>
                }
            </View>
        </View>
    )
}

export default HottestPopularNewComboProducts