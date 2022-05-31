import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';

debugger
let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    navbar: friendsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;
console.log(store);
export default store;