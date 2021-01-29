import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

import { useSelector } from "react-redux";

const PlacesListScreen = (props) => {
  
  return (
    <View>
      <Text>PlacesListScreen</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return { 
      headerTitle: "All Places",
      headerRight:() =>(<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
        title="Add Place"
        iconName={Platform.OS === "android" ? "md-add" : "ios-add" }
        onPress={()=>{
            navData.navigation.navigate("NewPlace");
        }}>
        </Item>
      </HeaderButtons>)
 };
};

const styles = StyleSheet.create({});
export default PlacesListScreen;