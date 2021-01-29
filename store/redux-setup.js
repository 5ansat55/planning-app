import { createStore , combineReducers , applyMiddleware } from "redux";
import { Provider } from "react-redux";
import  ReduxThunk  from "redux-thunk";

//our reducer that combined
import placesReducer from "./places-reducer";

const rootReducer = combineReducers({
    places : placesReducer
  });
  
  const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export {Provider , store };