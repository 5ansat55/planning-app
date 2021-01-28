import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import PlacesListScreen from "../Screens/PlacesListScreen";
import PlacesDetailScreen from "../Screens/PlacesDetailScreen";
import NewPlaceScreen from "../Screens/NewPlaceScreen";
import MapScreen from "../Screens/MapScreen";

import Colors  from "../constants/Colors";

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    PlacesDetail: PlacesDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(PlacesNavigator);
