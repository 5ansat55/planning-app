import React from "react";
import { View, Button, Image, Text, StyleSheet, Alert } from "react-native";
import Colors from "../constants/Colors";

//import expo image
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default ImageSelector = ({onImageTake}) => {
   const [pickedImage,setPickedImage] = React.useState(null);
    
  const verifyPermissions = async() => {
    const { status, expires, permissions} = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.MEDIA_LIBRARY
      
    );

    if (status !== "granted") {
      Alert.alert(
        "InSufficient Permissions!",
        "You need to grant camera permissions to use this app",
        [{ test: "Okay" }]
      )
      return false;
    }
    return true;
  }

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
        return
    }
    const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
    });
     
    setPickedImage(image.uri);
    onImageTake(image.uri);
  };


  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
       {!pickedImage ? (<Text>No image picked yet :( </Text> ):
        (<Image style={styles.image} source={{uri:pickedImage}} />)
        }
      </View>
      <Button
        title="Take Image"
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
    marginBottom:15
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
