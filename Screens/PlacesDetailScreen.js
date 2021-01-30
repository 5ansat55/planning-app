import React from "react";
import {  StyleSheet, View, Text } from "react-native";

const PlacesDetailScreen = props => {
    return <View>
        <Text>PLACESDETAİLSCREEN</Text>
    </View>
}

const styles = StyleSheet.create({

})

PlacesDetailScreen.navigationOptions = navData => {
    return {
        headerTitle:navData.navigation.getParam("placeTitle")
    };
}
export default PlacesDetailScreen;