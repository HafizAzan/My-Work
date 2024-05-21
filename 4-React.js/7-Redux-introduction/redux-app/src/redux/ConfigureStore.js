import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./duck/Counter";


const reducer = combineReducers({
    counter: counterReducer,
});

export default createStore(reducer, composeWithDevTools());
