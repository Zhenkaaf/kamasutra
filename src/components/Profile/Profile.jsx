import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsCotainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer /* store={props.store} */ />
    </div>
  )
}

export default Profile;