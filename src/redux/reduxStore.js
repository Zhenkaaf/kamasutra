import {applyMiddleware, combineReducers, legacy_createStore as createStore, compose} from "redux";
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


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;