import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import {createSwitchNavigator, createBottomTabNavigator} from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
import StramScreen from './screens/Stream'
import SearchScreen from './screens/Search'
import ProfileScreen from './screens/Profile'

export default Switch = createSwitchNavigator({
  Login: LoginScreen,
  Home: HomeScreen
}, {initialRouteName: 'Login'})

const Tabs = createBottomTabNavigator({
  Home: HomeScreen,
  Stream: StreamScreen,
  Search: SearchScreen,
  Profile: ProfileScreen
}, {
  navigationOptions: ({navigation}) => ({
    tabBarIcon: ({tintColour}) => {
      const {routeName} = navigation.state
      let iconName
      if (routeName === 'Home') {
        iconName = 'home'
      } else if (routeName === 'Stream') {
        iconName = 'flash'
      } else if (routeName === 'Search') {
        iconName = 'search'
      } else if (routeName === 'Profile') {
        iconName = 'account'
      }

      return iconName === 'search'
        ? <MaterialIcons name={iconName} size={25} color={tintColour}/>
        : <MaterialCommunityIcons name={iconName} size={25} color={tintColour}/>
    }
  }),
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: 'grey',
    activeBackgroundColor: 'grey',
    showLabel: false,
    style: {
      backgroundColor: '#000'
    }
  }
})

export default Switch = createSwitchNavigator({
  Login: LoginScreen,
  Home: Tabs
}, {
  initialRouteName = 'Login'
})