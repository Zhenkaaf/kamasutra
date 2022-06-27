import { usersAPI, profileAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  postsData: [
    { id: 1, message: 'hi, how are you', likes: 8 },
    { id: 2, message: 'hi Kris', likes: 48 },
    { id: 3, message: 'my firsr post', likes: 17 },
    { id: 4, message: 'hi Fiiiima', likes: 5 }
  ],
  //newPostText: 'it-cma',
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newText,
        likes: 0
      };
      /* let stateCopy = {...state};//копия stata но вложенные обьекты не скопировались поэтому ниже пишем
      stateCopy.postsData = [...state.postsData]; //коппируем массив , глубокое копирование
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy; */
      //равнозначчно записи выше
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        //newPostText: ''
      };
      //state.postsData.push(newPost);
      //state.newPostText = '';   у stata не имеем права ничего менять
      //return state;
    }
   /*  case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
      return { //сразу создали объект, скопировали стэйт 
        ...state,
        newPostText: action.newText
      };
    } */
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    default:
      return state;
  }
  /* if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0
      };
      state.postsData.push(newPost);
      state.newPostText = '';
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      state.newPostText = action.newText;
    }

  return state; */
}

export const addPostActionCreator = (val) => {
  return {
    type: 'ADD-POST',
    newText: val
  };
}
/* export const updateNewPostTextActionCreator = (val) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: val,
  };
} */
export const setUserProfile = (profile) => {
  return {
    type: 'SET_USER_PROFILE',
    profile
  };
}
export const setStatus = (status) => {
  return {
    type: 'SET_STATUS',
    status
  };
}

export const setUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data));
      });
  }
}
export const getStatusThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatus(response.data));
      });
  }
}
export const updateStatusThunkCreator = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status));
        }
      });
  }
}



export default profileReducer;