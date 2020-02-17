// import { View } from "react-native";
// import { createAppContainer } from "react-navigation";
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import Home from "../screens/Home";
// import Search from "../screens/Search";
// import Notifications from "../screens/Notifications";
// import Profile from "../screens/Profile";

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";

const stackFactory = (initialRoute, customConfig) =>
  createStackNavigator({
    InitialRoute: {
      screen: initialRoute,
      navigationOptions: { ...customConfig }
    }
  });
export default createBottomTabNavigator({
  Home: {
    screen: stackFactory(Home, {
      title: "Home",
      headerRight: (
        <TouchableOpacity>
          <Text>Hello</Text>
        </TouchableOpacity>
      )
    })
  },
  Search: {
    screen: stackFactory(Search, {
      title: "Search"
    })
  },
  Add: {
    screen: View,
    navigationOptions: {
      // tabBarOnPress: () => {
      //   console.log("Add");
      // }
      tabBarOnPress: ({ navigation }) => navigation.navigate("PhotoNavigation")
    }
  },
  Notifications: {
    screen: stackFactory(Notifications, {
      title: "Notifications"
    })
  },
  Profile: {
    screen: stackFactory(Profile, {
      title: "Profile"
    })
  }
});