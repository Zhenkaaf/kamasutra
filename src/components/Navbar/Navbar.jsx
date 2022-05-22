import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Friends from './Friends/Friends';
import StoreContext from '../../StoreContext';


/* let s = {
  'nav': 'Navbar_nav__3ou9Q',
  'item': 'Navbar_item__3qaF3'
} */
/*----------------*/
{/* <NavLink to='/profile' className={({isActive}) => isActive ? s.activeLink : ''}>Profile</NavLink> */ }
/*-------------------*/
/* const setActive = ({isActive}) => isActive ? 's.activeLink' : '';
<NavLink to='/profile' className={setActive}>Profile</NavLink> */


const Navbar = (props) => {


  /*  let friends = props.fr.map((elFromFriendsData) => {
     return <Friends name={elFromFriendsData.name} id={elFromFriendsData.id} />;
 });
   return (
     <nav className={s.nav}>
       <div className={s.item}>
         <NavLink to='/profile' className={(navData) => navData.isActive ? s.activeLink : ''}>Profile</NavLink>
       </div>
       <div className={s.item}>
         <NavLink to='/dialogs' className={(navData) => navData.isActive ? s.activeLink : ''}>Dialogs</NavLink>
       </div>
       <div className={s.item}>
         <NavLink to='/news' className={(navData) => navData.isActive ? s.activeLink : ''}>News</NavLink>
       </div>
       <div className={s.item}>
         <NavLink to='/music' className={(navData) => navData.isActive ? s.activeLink : ''}>Music</NavLink>
       </div>
       <div className={s.item}>
         <NavLink to='/settings' className={(navData) => navData.isActive ? s.activeLink : ''}>Settings</NavLink>
       </div>
       <div>
         <h2>Friends</h2>
         <div className={s.items}>{friends}</div>
       </div>
     </nav>
   ) */


  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();
          let friends = state.navbar.friendsData.map((elFromFriendsData) => {
            return <Friends name={elFromFriendsData.name} id={elFromFriendsData.id} />;
          });
          return (
            <nav className={s.nav}>
              <div className={s.item}>
                <NavLink to='/profile' className={(navData) => navData.isActive ? s.activeLink : ''}>Profile</NavLink>
              </div>
              <div className={s.item}>
                <NavLink to='/dialogs' className={(navData) => navData.isActive ? s.activeLink : ''}>Dialogs</NavLink>
              </div>
              <div className={s.item}>
                <NavLink to='/news' className={(navData) => navData.isActive ? s.activeLink : ''}>News</NavLink>
              </div>
              <div className={s.item}>
                <NavLink to='/music' className={(navData) => navData.isActive ? s.activeLink : ''}>Music</NavLink>
              </div>
              <div className={s.item}>
                <NavLink to='/settings' className={(navData) => navData.isActive ? s.activeLink : ''}>Settings</NavLink>
              </div>
              <div>
                <h2>Friends</h2>
                <div className={s.items}>{friends}</div>
              </div>
            </nav>
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default Navbar;