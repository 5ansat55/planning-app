import React, { useState, useCallback } from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";

import { useDispatch } from "react-redux";
import * as placesActions from "../store/places-actions";
import ImagePicker from "../components/imageSelector";
import LocationPicker from "../components/LocationPicker";

import Colors from "../constants/Colors";

const NewPlaceScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [selectedLocation, setSelectedLocation] = useState();

  const titleChangeHandler = (text) => {
    // you could add validation
    setTitleValue(text);
  };
  const locationPickedHandler = useCallback((location) => {
    setSelectedLocation(location);
  }, []);
  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };
  const savePlaceHandler = () => {
    dispatch(placesActions.addPlaces(titleValue, selectedImage,selectedLocation));
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImagePicker onImageTake={imageTakenHandler} />
        <LocationPicker
          navigation={navigation}
          onLocationPicked={locationPickedHandler}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: "Add Place",
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
