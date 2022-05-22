import React from 'react';
import { addPostActionCreator } from '../../../redux/profileReducer';
import { updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {



  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (val) => {
          let action = updateNewPostTextActionCreator(val);
          store.dispatch(action);
        }

        return <MyPosts updateNewPostText={onPostChange}
          addPost={addPost}
          posts={state.profilePage.postsData}
          newPostText={state.profilePage.newPostText} />
      }}
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;