import React,{useEffect} from "react";
import { StyleSheet, View, Text, Platform, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector,useDispatch } from "react-redux";
import PlaceItem from "../components/placeItem";
import * as placesActions from "../store/places-actions";

const PlacesListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);

  useEffect(()=>{
    dispatch(placesActions.loadPlaces())
  },[dispatch]);
  
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={null}
          onSelect={() => {
            navigation.navigate("PlaceDetail", {
              placeId: itemData.item.id,
              placeTitle: itemData.item.title,
            });
          }}
        />
      )}
    />
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        ></Item>
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
