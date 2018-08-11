import React, {Component} from 'react'
import {StyleSheet, View, Button} from 'react-native'
import HomeScreen from './Home';
import StreamScreen from './Stream';
import SearchScreen from './Search';

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title='I am the Profile Screen'
                    onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

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
    })
})