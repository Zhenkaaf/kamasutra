import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Loginnn from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeAppThunkCreator, setAuthUserDataThunkCreator } from './redux/appReduser';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import React, { Suspense, lazy } from 'react';
import { Navigate } from "react-router-dom";

//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));






class App extends React.Component {
  //let state = props.store.getState();
  catchAllUnhandledErrors = (promiseRejectEvent) => {
    alert(promiseRejectEvent);
  }
  componentDidMount() {
    this.props.initializeAppThunkCreator();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (

      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer /* fr={state.navbar.friendsData} */ />
        <div className='app-wrapper-content'>
          <Routes>

            {/* <Route exact path="/" element={<Redirect exact from="/" to="/profile" /> } /> */}
            <Route path='/dialogs/*' element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <DialogsContainer /* store={props.store} */ />
              </Suspense>
            } />
            <Route path='/profile' element={<Suspense fallback={<div>Загрузка...</div>}><ProfileContainer /></Suspense>} />
            <Route path='/profile/:userId' element={<ProfileContainer /* store={props.store} */ />} />
            <Route exact path="/" element={<Navigate to={'/profile'} />} />
            <Route path='/users' element={<UsersContainer /* <div>users</div> */ />} />
            <Route path='/login' element={<Loginnn />} />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
            <Route path="*" element={<div>404 NOT FOUND</div>} />

          </Routes>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


/* let Appw = connect(null, {initializeAppThunkCreator})(App);
export default Appw; */

/* export default connect(mapStateToProps, {initializeAppThunkCreator})(App); */
let AppContainer = connect(mapStateToProps, { initializeAppThunkCreator })(App);
const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <AppContainer /* store={store} dispatch={store.dispatch.bind(store)} */ />
      </Provider>
    </BrowserRouter>
  )
};
export default SamuraiJSApp;