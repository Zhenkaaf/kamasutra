import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsCotainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const  Profile = (props) => {

  return (
    <div>
      <ProfileInfo saveProfileThunkCreator={props.saveProfileThunkCreator} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
      <MyPostsContainer /* store={props.store} */ />
    </div>
  )
}

export default Profile;