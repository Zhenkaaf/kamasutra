import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Loginnn from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeAppThunkCreator, setAuthUserDataThunkCreator } from './redux/appReduser';
import Preloader from './components/common/Preloader/Preloader';



class App extends React.Component {
  //let state = props.store.getState();
  componentDidMount() {
    this.props.initializeAppThunkCreator();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavbarContainer /* fr={state.navbar.friendsData} */ />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/dialogs/*' element={<DialogsContainer /* store={props.store} */ />} />
              <Route path='/profile' element={<ProfileContainer />} />
              <Route path='/profile/:userId' element={<ProfileContainer /* store={props.store} */ />} />
              <Route path='/users' element={<UsersContainer /* <div>users</div> */ />} />
              <Route path='/login' element={<Loginnn />} />
              <Route path='/music' element={<Music />} />
              <Route path='/news' element={<News />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


/* let Appw = connect(null, {initializeAppThunkCreator})(App);
export default Appw; */

export default connect(mapStateToProps, {initializeAppThunkCreator})(App);
