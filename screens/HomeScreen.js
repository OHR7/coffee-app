import React from 'react'
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const HomeScreen = props => {

    const menuItems = ['Gold Brew', 'McCaffee', 'Nescafe', 'Cold Brew', 'Black Gold', 'Hot']

    return (
        <View style={styles.mainContainer}>
            <View style={styles.sidebar}>
                <FontAwesome name='bars' size={20} style={styles.menuIcon}/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        menuItems.map( value => {
                            return (
                                <TouchableOpacity style={styles.menuBtnTextWrapper}>
                                    <Text style={styles.menuBtnText}>
                                        {value}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <View style={styles.subContainer}>
                <View style={styles.shopIconContainer}>
                    <FontAwesome name='shopping-bag' size={20} style={styles.menuIcon}/>
                </View>
                <Text style={styles.title}>
                    Coffe House
                </Text>
                <Text style={styles.subTitle}>
                    A lot can happen over coffee.
                </Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        placeholder='search...'
                        placeholderTextColor='grey'
                    > 
                    </TextInput>
                    <FontAwesome name='search' size={20} style={{color: 'lightgrey'}}/>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.productsContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate({name: 'Product'})
                        }}
                    >
                        <ImageBackground
                            source={require('../assets/doodle.png')}
                            style={styles.productContainer}
                            imageStyle={{opacity: .1}}
                        >
                            <Image
                                source={require('../assets/coffee4.png')}
                                style={styles.productImage}
                            />
                            <Text style={styles.priceTitle}>
                                Price
                            </Text>
                            <Text style={styles.priceText}>
                                $150
                            </Text>
                            <Text style={styles.productName}>
                                Grady's COLD BREW
                            </Text>
                            <View style={styles.productBottom}>
                                <View>
                                    <Text style={styles.reviewText}>
                                        G5 Review
                                    </Text>
                                    <View style={styles.reviewStarContainer}>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.addBtn}>
                                    <Text>+ Add</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate({name: 'Product'})
                        }}
                    >
                        <ImageBackground
                            source={require('../assets/doodle.png')}
                            style={styles.productContainer2}
                            imageStyle={{opacity: .1}}
                        >
                            <Image
                                source={require('../assets/coffee2.png')}
                                style={styles.productImage}
                            />
                            <Text style={styles.priceTitle}>
                                Price
                            </Text>
                            <Text style={styles.priceText}>
                                $150
                            </Text>
                            <Text style={styles.productName}>
                                Grady's COLD BREW
                            </Text>
                            <View style={styles.productBottom}>
                                <View>
                                    <Text style={styles.reviewText}>
                                        G5 Review
                                    </Text>
                                    <View style={styles.reviewStarContainer}>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.addBtn}>
                                    <Text>+ Add</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate({name: 'Product'})
                        }}
                    >
                        <ImageBackground
                            source={require('../assets/doodle.png')}
                            style={styles.productContainer}
                            imageStyle={{opacity: .1}}
                        >
                            <Image
                                source={require('../assets/coffee4.png')}
                                style={styles.productImage}
                            />
                            <Text style={styles.priceTitle}>
                                Price
                            </Text>
                            <Text style={styles.priceText}>
                                $150
                            </Text>
                            <Text style={styles.productName}>
                                Grady's COLD BREW
                            </Text>
                            <View style={styles.productBottom}>
                                <View>
                                    <Text style={styles.reviewText}>
                                        G5 Review
                                    </Text>
                                    <View style={styles.reviewStarContainer}>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                        <FontAwesome name='star' size={10} color='white' style={{marginRight: 5}}/>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.addBtn}>
                                    <Text>+ Add</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        flex: 1
    },
    subContainer: {
        flex: 5,
        marginHorizontal: 30,
        marginTop: 30
    },
    title: {
        fontSize: 55,
        fontFamily: 'Shoulder'
    },
    subTitle: {
        fontSize: 20,
        fontFamily: 'Shoulder',
        color: 'grey'
    },
    searchContainer: {
        borderWidth: 1.5,
        borderColor: 'lightgrey',
        borderRadius: 5,
        padding: 10,
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    shopIconContainer: {
        alignItems: 'flex-end'
    },
    sidebar: {
        backgroundColor: 'pink',
        alignItems: 'center',
        paddingVertical: 30
    },
    menuIcon: {
        marginBottom: 15
    },
    menuBtnTextWrapper: {
        height: 120,
        transform: [
            { rotate: '-90deg'}
        ],
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuBtnText: {
        fontSize: 20,
        fontFamily: 'Shoulder'
    },
    productsContainer: {
        marginVertical: 10
    },
    productContainer: {
        backgroundColor: '#fcc07e',
        padding: 20,
        borderRadius: 20,
        marginTop: 70
    },
    productContainer2: {
        backgroundColor: '#49d6f2',
        padding: 20,
        borderRadius: 20,
        marginTop: 70
    },
    productImage: {
        height: 160,
        width: 160,
        position: 'absolute',
        top: -50,
        left: 90
    },
    priceTitle: {
        fontFamily: 'Shoulder',
        fontSize: 20
    },
    priceText: {
        fontFamily: 'Shoulder',
        fontSize: 50,
        color: 'white'
    },
    productName: {
        fontFamily: 'Shoulder-Bold',
        fontSize: 25,
        marginTop: 15
    },
    reviewStarContainer: {
        flexDirection: 'row',
        marginTop: 2
    },
    reviewText: {
        color: 'white',
        fontFamily: 'Shoulder-Bold',
        fontSize: 16
    },
    addBtn: {
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8
    },
    productBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
    }
})

export default HomeScreen
