export const ADD_PLACES = "ADD_PLACES";

export const addPlaces = (title) => {
  console.log(title);
  return { type: ADD_PLACES, placeData: { title: title } };
};
