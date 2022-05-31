import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
  let posts = props.posts.map((elFromPostdData) => {
    return <Post message={elFromPostdData.message} key={elFromPostdData.id} likeCounts={elFromPostdData.likes} />
  });

  let onAddPost = () => {
    props.addPost();
    //let text = newPostElem.current.value;
    //debugger
    //props.dispatch(addPostActionCreator());
    //props.dispatch({type: 'ADD-POST'});
    //props.updateText('');
  }
  let onPostChange = () => {
    let val = newPostElem.current.value;
    props.updateNewPostText(val);
    //let action = {type: 'UPDATE-NEW-POST-TEXT', newText: val};
    //let action = updateNewPostTextActionCreator(val);
    //props.dispatch(action);
  }
  let newPostElem = React.createRef();

  return (
    <div className={s.postsBlock}>
      <h3>mypost</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElem} value={props.newPostText} />
        </div>
        <div><button onClick={onAddPost}>Add post</button></div>
      </div>
      <div className={s.posts}>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts;