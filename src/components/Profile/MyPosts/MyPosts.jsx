import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator } from '../../../utils/validators/validators';

const MyPosts = React.memo((props) => {

  let posts = props.posts.map((elFromPostdData) => {
    return <Post message={elFromPostdData.message} key={elFromPostdData.id} likeCounts={elFromPostdData.likes} />
  });

  let onAddPost = (val) => {
    props.addPost(val);

    //let text = newPostElem.current.value;
    //debugger
    //props.dispatch(addPostActionCreator());
    //props.dispatch({type: 'ADD-POST'});
    //props.updateText('');
}
  /* 
 let onPostChange = () => {
   let val = newPostElem.current.value;
   props.updateNewPostText(val);
   //let action = {type: 'UPDATE-NEW-POST-TEXT', newText: val};
   //let action = updateNewPostTextActionCreator(val);
   //props.dispatch(action);
 }
 let newPostElem = React.createRef(); */

  return (
    <div className={s.postsBlock}>
      <h3>mypost</h3>
      <MyPostForm onAddPost={onAddPost} />
      {/* <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElem} value={props.newPostText} />
        </div>
        <div><button onClick={onAddPost}>Add post</button></div>
      </div> */}
      <div className={s.posts}>
        {posts}
      </div>
    </div>
  )
});



const maxLength10 = maxLengthCreator(10);



const MyPostForm = (props) => {

  let submit = (values, { setSubmitting }) => {
    props.onAddPost(values.newMessageText);
    setTimeout(() => {
      //alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  return (
    <Formik initialValues={{ newMessageText: '' }} onSubmit={submit} >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              //type="textarea"
              name="newMessageText"
              placeholder="Enter your message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newMessageText}
              validate={maxLength10}
              component={Textarea}
            />
            {errors.newMessageText && touched.newMessageText && <div className={s.bgTestError}>{errors.newMessageText}</div>}
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}


export default MyPosts;