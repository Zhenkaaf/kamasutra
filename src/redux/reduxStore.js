import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';
import authReducer from "./authReduser";

let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    navbar: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;