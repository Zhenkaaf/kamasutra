import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.contentImg} src='https://image.wallperz.com/big_thumbs/wallperz.com_big_thumbs_7qs89rdrt2jyeh7c8jvvuthaca8vm7.jpg' ></img>
      </div>
      <div className={s.description}>
        ava+
      </div>

    </div>
  )
}

export default ProfileInfo;