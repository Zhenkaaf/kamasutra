import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png'></img>
    <div className={s.loginBlock}>
      {props.isAuth ? props.login : <NavLink to={'/login'}>LOGIN</NavLink>}
      
    </div>
  </header>
}

export default Header;