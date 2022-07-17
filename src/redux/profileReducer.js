import { usersAPI, profileAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
};

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
    case DELETE_POST: {
      return { ...state, postsData: state.postsData.filter(post => post.id != action.postId) }
    }
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: {...state.profile, photos: action.photos} }
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
export const deletePostActionCreator = (postId) => {
  return {
    type: 'DELETE_POST',
    postId
  };
}
export const savePhotoSuccessActionCreator = (photos) => {
  return {
    type: 'SAVE_PHOTO_SUCCESS',
    photos
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
export const savePhotoThunkCreator = (file) => {
  return (dispatch) => {
    profileAPI.savePhoto(file)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(savePhotoSuccessActionCreator(response.data.data.photos));
        }
      });
  }
}
export const saveProfileThunkCreator = (profile) => {
  alert('reducer');
  console.log(profile);
  return (dispatch, getState) => {
    const userId = getState().auth.userId;
    profileAPI.saveProfile(profile)
      .then(response => {
        alert('reducer2');
        if (response.data.resultCode === 0) {
          dispatch(setUserProfileThunkCreator(userId));
        }
        else {
          dispatch(stopSubmit('login', {_error: response.data.messages[0]}));
        }
      });
  }
}


/* export const savePhotoThunkCreator = (file) => {
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccessActionCreator(response.data.photos));
    }
  }
}
export const savePhotoThunkCreator = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccessActionCreator(response.data.photos));
  }
} */




export default profileReducer;