  import { createStackNavigator } from 'react-navigation-stack';
  // import { createMaterialTopTabNavigator } from "react-navigation-tabs" ;
  import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

  // import {createMaterialTopTabNavigator} from 'react-navigation';
  import SelectPhoto from "../screens/Photo/SelectPhoto";
  import TakePhoto from "../screens/Photo/TakePhoto";
  import UploadPhoto from "../screens/Photo/UploadPhoto";
  
  const PhotoTabs = createMaterialTopTabNavigator(
    {
      SelectPhoto
      // TakePhoto
    },
  );
  
  export default createStackNavigator({
    // PhotoTabs,
    UploadPhoto

  });