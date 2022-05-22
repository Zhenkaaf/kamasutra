import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import friendsReducer from './friendsReducer';


let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    navbar: friendsReducer
});

let store = createStore(reducers);

export default store;