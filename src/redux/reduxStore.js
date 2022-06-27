import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from "./appReduser";

let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    navbar: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;