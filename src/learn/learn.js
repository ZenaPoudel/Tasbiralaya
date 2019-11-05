import React from 'react';
import { Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1,justifyContent:'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1,justifyContent:'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default createAppContainer({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
})