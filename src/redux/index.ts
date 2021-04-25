import thunk from "redux-thunk";
import {searchReducer} from "./search-reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import { TVChannelsReducer } from "./TVChanels-reducer copy";


const rootReducer = combineReducers({
  search: searchReducer,
  channels: TVChannelsReducer
});

const configurationStore = () => {
  const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

return store
};

export default configurationStore()