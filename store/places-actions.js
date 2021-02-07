import * as FileSystem from "expo-file-system";

export const ADD_PLACES = "ADD_PLACES";
import { insertPlace } from "../helpers/db";
export const addPlaces = (title,image) => {
  return async dispatch =>{
    const fileName = image.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from:image,
        to:newPath
      });
      const dbResult = await insertPlace(title,newPath,'Dummy Address',15.6,12.3);
      console.log(dbResult);
    dispatch({ type: ADD_PLACES, placeData: { id: dbResult.insertId , title: title , image:newPath } });
    }
    catch(err){
      console.log(err);
      throw err;
    }

  }
};
