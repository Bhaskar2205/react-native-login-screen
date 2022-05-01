import React from 'react';
import { Image } from 'react-native';
import { createAppContainer} from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import { createBottomTabNavigator} from "react-navigation-tabs";
import { createDrawerNavigator} from "react-navigation-drawer";


import Login from './screens/Login/index';
import Register from './screens/Register/index';

const Authentication = createStackNavigator({
    Login: {
      screen:Login,
      navigationOptions:{
       header:null
      }
    },
    Register: {
      screen:Register,
       navigationOptions:{
       header:null
      }
    }
});




export  default createAppContainer(Authentication);
