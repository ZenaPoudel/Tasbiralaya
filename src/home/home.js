import React, {Component} from 'react';
import {View, Text, ViewPagerAndroid, Image, TextInput,ScrollView} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import Profile from './../profile/profile';
import Posts from './../home/posts';
import Search from './../home/search';
import Suggestion from '../home/Suggestion';
import Trendings from '../home/Trendings';
const HomeContainer = createAppContainer(createBottomTabNavigator(
  {
      Posts:Posts,
      Search:Search,
      Suggestion:Suggestion,
      Profile:Profile, 
     

  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Posts') {
            iconName = require('./../assets/icons/002-heart.png');
        }
        else if (routeName === 'Search') {
            iconName = require('./../assets/icons/008-musica-searcher.png');
        }
        else if (routeName === 'Suggestion') {
            iconName = require('./../assets/icons/Suggestion.png');
        }
        else if (routeName === 'Profile') {
            iconName = require('./../assets/icons/010-user.png');
        }
        return <Image style={{height:20,width:20}} source={iconName} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'red',
        showLabel:false,
        style:{elevation:8,borderWidth:0}
    },
  }
));
export default class Home extends Component{
    render(){
        return(
            <ViewPagerAndroid
              style={{flex:1}}
              initialPage={0}>
              <View key="1">
                <Trendings/>
        </View>
              <View key="2">
                <HomeContainer/>
              </View>
            </ViewPagerAndroid>
        )
    }
}