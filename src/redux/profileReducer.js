const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, message: 'hi, how are you', likes: 8 },
    { id: 2, message: 'hi Kris', likes: 48 },
    { id: 3, message: 'my firsr post', likes: 17 },
    { id: 4, message: 'hi Fiiiima', likes: 5 }
  ],
  newPostText: 'it-cma'
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0
      };
      state.postsData.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

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

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST',
  };
}

export const updateNewPostTextActionCreator = (val) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: val,
  };
}
export default profileReducer;