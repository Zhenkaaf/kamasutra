import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profileReducer';
import { updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


/* const MyPostsContainer = (props) => {
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
} */


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (val) => {
      dispatch(updateNewPostTextActionCreator(val));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;