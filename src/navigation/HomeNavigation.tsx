
import { Dimensions } from 'react-native';
import React from 'react';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';


import {
  BookScreen,
  LessonsScreen,
  QuestionScreen,
  TermsScreen,
  ZaimScreen
} from '@screen/Home';

import { COLORS } from '@styles';

const Tab = createBottomTabNavigator();

const { width } = Dimensions.get('screen');

export const HOME_PAGES = {
  Book: "Book",
  Lessons: "Lessons",
  Question: "Question",
  Terms: "Terms",
  Zaim: "Zaim",
};

const NAVIGATION_OPTIONS: BottomTabNavigationOptions = {
  headerTitleStyle: {
    color: COLORS.TEXT,
  },
  tabBarStyle: {
    height: 60,
  },
  headerTitleAlign: 'center',
  tabBarHideOnKeyboard: true,
  tabBarLabelStyle: {
    height: 40,
    width: width / 4,
    flexWrap: 'wrap',
    fontSize: 12,
    textAlignVertical: 'center',
    fontFamily: 'Montserrat-Medium',
    textTransform: 'capitalize',
    marginBottom: 3,
  },

  tabBarActiveTintColor: '#C38F56',
  tabBarInactiveTintColor: COLORS.TEXT,
};

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={NAVIGATION_OPTIONS}
    >

      <Tab.Screen
        name={HOME_PAGES.Zaim}
        component={ZaimScreen}
      />

      <Tab.Screen
        name={HOME_PAGES.Terms}
        component={TermsScreen}
      />

      <Tab.Screen
        name={HOME_PAGES.Lessons}
        component={LessonsScreen}
      />

      <Tab.Screen
        name={HOME_PAGES.Question}
        component={QuestionScreen}
      />

      <Tab.Screen
        name={HOME_PAGES.Book}
        component={BookScreen}
      />

    </Tab.Navigator>
  )
}

export default HomeNavigation

