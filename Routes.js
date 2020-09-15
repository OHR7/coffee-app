import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'


const Stack = createStackNavigator()

const Routes = () => {
    let [fontsLoaded] = useFonts({
        'Shoulder' : require('./assets/fonts/BigShouldersText-Regular.ttf'),
        'Shoulder-Bold' : require('./assets/fonts/BigShouldersText-Bold.ttf'),
    })

    if (fontsLoaded) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Home'
                        component={HomeScreen}
                        options={{header: () => null}}
                    />
                    <Stack.Screen
                        name='Product'
                        component={ProductScreen}
                        options={{header: () => null}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
    else {
        return (
            <AppLoading/>
        )
    }

}

export default Routes
