import React from 'react'
import { View, StyleSheet, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'


const ProductScreen = props => {
    return (
        <View style={{flex: 1}}>
            <ImageBackground
                source={require('../assets/doodle.png')}
                style={styles.productHeader}
                imageStyle={{opacity: .1}}
            >
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate({name: 'Home'})
                        }}
                    >
                        <FontAwesome name='chevron-left' color='white' size={20}/>
                    </TouchableOpacity>
                    <FontAwesome name='shopping-bag' color='white' size={20} style={{marginRight: 5}}/>
                </View>
            </ImageBackground>
            <View style={styles.productReview}>
                <Image
                    source={require('../assets/coffee2.png')}
                    style={styles.productImage}
                    resizeMode='contain'
                />
                <Text style={styles.productReviewTitle}>Grady's COLD BREW</Text>
                <View style={styles.productReviewContainer}>
                    <View style={styles.productReviewBadge}>
                        <FontAwesome name='user-o' size={25} style={{marginRight: 5}}/>
                        <Text style={styles.productReviewText}>1.5k</Text>
                    </View>
                    <Text style={styles.productReviewBadgeSeparator}>|</Text>
                    <View style={styles.productReviewBadge}>
                        <FontAwesome name='star-o' size={25} style={{marginRight: 5}}/>
                        <Text style={styles.productReviewText}>1.5k</Text>
                    </View>
                    <Text style={styles.productReviewBadgeSeparator}>|</Text>
                    <View style={styles.productReviewBadge}>
                        <FontAwesome name='trophy' size={25} style={{marginRight: 5}}/>
                        <Text style={styles.productReviewText}>1.5k</Text>
                    </View>
                </View>
            </View>
            <View style={styles.aboutContainer}>
                <Text style={styles.aboutTitle}>About Us</Text>
                <Text style={styles.about}>Cold brewed with chicory and a unique blend of spices for 20 hours. Our concentrate is velvety-smooth and packed with flavor.</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.badgeContainer}
                >
                    <View style={styles.badge}>
                        <Text style={styles.badgePrice}>
                            $65.00
                        </Text>
                        <Text style={styles.badgeTitle}>
                            COLD BREW KIT
                        </Text>
                        <Image
                            resizeMode='contain'
                            source={require('../assets/coffee4.png')}
                            style={styles.badgeProductImage}
                        />
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgePrice}>
                            $65.00
                        </Text>
                        <Text style={styles.badgeTitle}>
                            COLD BREW KIT
                        </Text>
                        <Image
                            resizeMode='contain'
                            source={require('../assets/coffee4.png')}
                            style={styles.badgeProductImage}
                        />
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgePrice}>
                            $65.00
                        </Text>
                        <Text style={styles.badgeTitle}>
                            COLD BREW KIT
                        </Text>
                        <Image
                            resizeMode='contain'
                            source={require('../assets/coffee4.png')}
                            style={styles.badgeProductImage}
                        />
                    </View>
                </ScrollView>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.buyBtn}>
                        <Text style={styles.buyBtnText}>BUY NOW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveBtn}>
                        <FontAwesome name='bookmark-o' size={25}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productHeader: {
        backgroundColor: '#49d6f2',
        height: 200,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 35,
        paddingHorizontal: 25
    },
    productReview: {
        paddingTop: 50,
        paddingBottom: 25,
        backgroundColor: 'white',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        zIndex: 1
    },
    productReviewContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    productImage: {
        height: 200,
        width: 200,
        position: 'absolute',
        top: -150,
        left: 90
    },
    productReviewTitle: {
        fontSize: 25,
        alignSelf: 'center',
        fontFamily: 'Shoulder'
    },
    productReviewBadge: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    productReviewText: {
        color: '#179fd3',
        fontSize: 20,
        fontFamily: 'Shoulder'
    },
    productReviewBadgeSeparator: {
        fontSize: 20,
        color: 'grey',
        marginHorizontal: 10
    },
    aboutContainer: {
        backgroundColor: '#fff8f6',
        paddingLeft: 20,
        flex: 0,
        height: 350,
        paddingTop: 20,
        paddingBottom: 20,
        position: 'relative',
        top: -20,
        zIndex: 0
    },
    aboutTitle: {
        fontFamily: 'Shoulder-Bold',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 15
    },
    about: {
        fontFamily: 'Shoulder',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10,
        paddingRight: 20
    },
    badgeContainer: {
        overflow: 'visible',
        marginTop: 60,
        height: 30,
        flex: 1,
        flexDirection: 'row'
    },
    badge: {
        marginRight: 15,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingVertical: 5,
        paddingRight: 70,
        paddingLeft: 20,
        height: 70
    },
    badgePrice: {
        fontFamily: 'Shoulder-Bold',
        color: '#179fd3',
        fontSize: 30
    },
    badgeTitle: {
        fontFamily: 'Shoulder-Bold',
        fontSize: 20
    },
    badgeProductImage: {
        height: 100,
        width: 100, 
        position: 'absolute',
        top: -60,
        left: 90
    },
    btnContainer: {
        flexDirection: 'row'
    },
    buyBtn: {
        backgroundColor: '#fd866e',
        paddingHorizontal: 90,
        marginRight: 10,
        borderRadius: 10,
        justifyContent: 'center'
    },
    buyBtnText: {
        fontFamily: 'Shoulder-Bold',
        color: 'white',
        fontSize: 20
    },
    saveBtn: {
        borderWidth: 3,
        borderColor: '#fd866e',
        padding: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginLeft: 15
    }
})

export default ProductScreen
