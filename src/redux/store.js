import profileReduser from "./profileReducer";
import dialogsReduser from "./dialogsReducer";
import friendsReduser from "./friendsReducer";

/* const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_DIALOG_TEXT = 'ADD-DIALOG-TEXT';
const UPDATE_DIALOG_TEXT = 'UPDATE-DIALOG-TEXT'; */

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'hi, how are you', likes: 8 },
        { id: 2, message: 'hi Kris', likes: 48 },
        { id: 3, message: 'my firsr post', likes: 17 },
        { id: 4, message: 'hi Fiiiima', likes: 5 }
      ],
      newPostText: 'it-cma'
    },
    messagesPage: {
      messagesData: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hi Kris' },
        { id: 3, message: 'hi Dima' },
        { id: 4, message: 'hi Fiiiima' }
      ],
      dialogsData: [
        { id: 1, name: 'Kris' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Vital' },
        { id: 4, name: 'Zhenkaf' }
      ],
      dialogText: ''
    },
    navbar: {
      friendsData: [
        { id: 1, name: 'Kris' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Vital' },
        { id: 4, name: 'Zhenkaf' }
      ]
    },
  },
  _callSubscriber() {
    alert('gogogo');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.messagesPage = dialogsReduser(this._state.messagesPage, action);
    this._state.friendsData = friendsReduser(this._state.friendsData, action);
    this._callSubscriber(this._state);

    /* if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 0
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    else if (action.type === ADD_DIALOG_TEXT) {
      let newDialog = {
        id: 5,
        message: this._state.messagesPage.dialogText
      };
      this._state.messagesPage.messagesData.push(newDialog);
      this._state.messagesPage.dialogText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_DIALOG_TEXT) {
      this._state.messagesPage.dialogText = action.newTxt;
      this._callSubscriber(this._state);
    } */
  },
/*   addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likes: 0
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addDialogText() {
    let newDialog = {
      id: 5,
      message: this._state.messagesPage.dialogText
    };
    this._state.messagesPage.messagesData.push(newDialog);
    this._state.messagesPage.dialogText = '';
    this._callSubscriber(this._state);
  },
  updateDialogText(newTxt) {
    this._state.messagesPage.dialogText = newTxt;
    this._callSubscriber(this._state);
  }, */
}
/* export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST',
  };
}
export const updateNewPostTextActionCreator = (val) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: val,
  };
} */
/* export const addDialogTextActionCreator = () => {
  return {
    type: 'ADD-DIALOG-TEXT',
  };
}
export const updateDialogTextActionCreator = (val) => {
  return {
    type: 'UPDATE-DIALOG-TEXT',
    newTxt: val,
  };
} */
/* let rerenderEntireTree = () => {
  alert('gogogo');
} */

window.state = store;
/* export let addPost = () => {
  //debugger;
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likes: 0
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
} */
/* export let updateText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
} */

/* export let addDialogText = () => {
  let newDialog = {
    id: 5,
    message: state.messagesPage.dialogText
  };
  state.messagesPage.messagesData.push(newDialog);
  state.messagesPage.dialogText = '';
  rerenderEntireTree(state);
} */
/* export let updateDialogText = (newTxt) => {
  state.messagesPage.dialogText = newTxt;
  rerenderEntireTree(state);
} */
/* export const subscribe = (observer) => {
  rerenderEntireTree = observer;
} */

export default store;