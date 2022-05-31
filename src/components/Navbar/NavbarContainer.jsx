import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";



/* const Navbar = (props) => {
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

export default Navbar; */





let mapStateToProps = (state) => {
    return {
        friendsData: state.navbar.friendsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        
    }
}
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;