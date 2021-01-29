import React from "react";
import { StyleSheet, Text, View } from "react-native";

//I get redux for more readable
import { Provider, store } from "./store/redux-setup";

import PlacesNavigator from "./navigation/PlacesNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
