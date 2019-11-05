import React, {Component} from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {View,AsyncStorage,ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from './src/appStore'
import Account from './src/account/account';
import Home from './src/home/home';
import Learn from "./src/learn/learn";
//import Start from './src/Start/start';
const store = createStore(Reducer);
class AuthLoading extends Component {
    constructor(){
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'Home' : 'Account' );
  };

  render() {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
        <ActivityIndicator color="darkgreen" size={30}/>
      </View>
    );
  }
}
const AppContainer = createAppContainer(createSwitchNavigator(
  {
      AuthLoading:AuthLoading,
      Account:Account,
     // Start:Start,
      Home:Home,
      Learn:Learn
  },
  {
    initialRouteName: 'Account',
  }
));

export default class App extends Component{
  render(){
    return(
        <Provider store={store}>
           <AppContainer/>
        </Provider>
    )
  }
}