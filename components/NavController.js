import React from "react";
import { View } from "react-native";
import { useIsLoggedIn } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation.js";
// import TabNavigation from "../navigation/TabNavigation.js";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
  const isLoggedIn = true;
  return (
    <View style={{ flex: 1}}>
      {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </View>
  );
};
