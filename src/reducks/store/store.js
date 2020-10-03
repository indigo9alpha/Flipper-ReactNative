import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose
} from "redux";
import thunk from "redux-thunk";
import { UsersReducer } from "../users/reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function createStore() {
  return reduxCreateStore(
    UsersReducer,
    composeEnhancer(applyMiddleware(thunk))
  );
}
