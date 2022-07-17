
import React from 'react';
import { useState } from 'react';

import Preloader from '../../common/Preloader/Preloader';
import ProfileDataForm from './ProfileDataForm';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {
 
  let [editMode, setEditMode] = useState(false);

  let noAvatar = 'https://www.meme-arsenal.com/memes/7a74b40725214bea55ed26ef5d72b721.jpg';
  if (!props.profile) {  //если профайла нет он null или undefined
    return (
      <Preloader />
    )
  }


  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0]);
    }
  }


  return (
    <div>
      {/* <div>
        <img className={s.contentImg} src='https://image.wallperz.com/big_thumbs/wallperz.com_big_thumbs_7qs89rdrt2jyeh7c8jvvuthaca8vm7.jpg' ></img>
      </div> */}
      <div className={s.description}>

        <img src={props.profile.photos.large != null ? props.profile.photos.large : noAvatar} />
        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
      </div>
     
{editMode ? <ProfileDataForm setEditMode={setEditMode} saveProfileThunkCreator={props.saveProfileThunkCreator} profile={props.profile} /> 
          : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner} />}

      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      <div>{props.profile.fullName}</div>
    </div>
  )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div>
      {isOwner && <div><button onClick={goToEditMode} >edit</button></div>}
    <div>
        Full name: {profile.fullName}
      </div>
      <div>
        Loking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lokingForAJob &&
        <div>
          My professional skills: {profile.lookingForAJobDescription}
        </div>
      }
      <div>
        About me: {profile.aboutMe}
      </div>
      <div>
       Contacts: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
       })}
      </div>
    </div>
  )
}
const Contact = ({contactTitle, contactValue}) => {
  return (
  <div>{contactTitle}:{contactValue}</div>
  )
}

export default ProfileInfo;