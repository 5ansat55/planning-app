import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PlacesNavigator from "./navigation/PlacesNavigator";

//I get redux for more readable
import { Provider, store } from "./store/redux-setup";

//SQLİTE
import {init} from "./helpers/db";

init()
.then(()=>{
  console.log("Initialized database");
})
.catch(err=>{
  console.log("Initializing db failed");
  console.log(err);
})

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
