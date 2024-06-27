
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions
} from '@react-navigation/native-stack';


import HomeNavigation from './HomeNavigation';

import OnBoard, { ON_BOARD_NAVIGATION_SETTINGS } from '@screen/OnBoard';

import { COLORS } from '@styles';


const Stack = createNativeStackNavigator();

const NAVIGATION_OPTIONS: NativeStackNavigationOptions = {
    animation: 'slide_from_right',
};

const BASE_SCREEN_OPTIONS =
{
    title: "",
    navigationBarColor: COLORS.ACCENT,
    headerStyle: {
        backgroundColor: COLORS.ACCENT,
    },
};


const AppNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ ...NAVIGATION_OPTIONS }}>
                <Stack.Screen name='OnBoard' component={OnBoard} options={ON_BOARD_NAVIGATION_SETTINGS} />
                <Stack.Screen name='Home' component={HomeNavigation} options={BASE_SCREEN_OPTIONS} />                
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default AppNavigation;