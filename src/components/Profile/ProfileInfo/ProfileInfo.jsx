import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  if (!props.profile) {  //если профайла нет он null или undefined
    return (
      <Preloader />
    )
  }

  return (
    <div>
      <div>
        <img className={s.contentImg} src='https://image.wallperz.com/big_thumbs/wallperz.com_big_thumbs_7qs89rdrt2jyeh7c8jvvuthaca8vm7.jpg' ></img>
      </div>
      <div className={s.description}>
        <img src={props.profile.photos.large} />
      </div>

    </div>
  )
}

export default ProfileInfo;