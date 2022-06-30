import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  let noAvatar = 'https://www.meme-arsenal.com/memes/7a74b40725214bea55ed26ef5d72b721.jpg';
  if (!props.profile) {  //если профайла нет он null или undefined
    return (
      <Preloader />
    )
  }

  return (

    <div>
      {/* <div>
        <img className={s.contentImg} src='https://image.wallperz.com/big_thumbs/wallperz.com_big_thumbs_7qs89rdrt2jyeh7c8jvvuthaca8vm7.jpg' ></img>
      </div> */}
      <div className={s.description}>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : noAvatar} />
      </div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      <div>{props.profile.fullName}</div>
    </div>
  )
}

export default ProfileInfo;