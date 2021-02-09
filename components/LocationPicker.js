import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Colors from "../constants/Colors";

const LocationPicker = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPicketLocation] = useState();
  const verifyPermissions = async () => {
    const { status, expires, permissions } = await Permissions.askAsync(
      Permissions.LOCATION
    );

    if (status !== "granted") {
      Alert.alert(
        "InSufficient Permissions!",
        "You need to grant location permissions to use this app",
        [{ test: "Okay" }]
      );
      return false;
    }
    return true;
  };
  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 3000,
      });
      console.log(location);
      setPicketLocation({
          lat:location.coords.latitute,
          lng:location.coords.longitude
      });
    } catch (err) {
      Alert.alert(
        "Could not fetch location!",
        "Please try again later or pick a locationon the map.",
        [{ text: "Okey" }]
      );
    }
    setIsFetching(false);
  };
  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        {isFetching ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Text>No location choisen yet !</Text>
        )}
      </View>
      <Button
        title="Get location"
        color={Colors.primary}
        onPress={getLocationHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    margin: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent:"center",
    alignItems:"center"
  },
});

export default LocationPicker;
