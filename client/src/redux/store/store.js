import { applyMiddleware, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import rootReducer from "../reducer/reducer";



//import rootReducer from "../reducer/reducer.js";


const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))


export default store
