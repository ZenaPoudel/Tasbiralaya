import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {Signup} from "./signup";
import {Login} from "./login";
import Info from './info';
import {AccountVerify} from "./accountverify";

export default createAppContainer(createSwitchNavigator(
    {
        Login:Login,
        Info:Info,
        Signup:Signup,
        AccountVerify:AccountVerify,
    }, {
        initialRouteName:'Info'
    }))