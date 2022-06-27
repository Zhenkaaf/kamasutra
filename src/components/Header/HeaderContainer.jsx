import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Preloader from "./../common/Preloader/Preloader";
import Header from "./Header.jsx";
import { logoutThunkCreator, setAuthUserData, setAuthUserDataThunkCreator } from "../../redux/authReducer";




class HeaderContainer extends React.Component {

    /* componentDidMount() {
        this.props.setAuthUserData();
    } */
    render() {
        return (
            <Header {...this.props} />
        )
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    userId: state.auth.userId
});

export default connect(mapStateToProps, {
    /* setAuthUserData: setAuthUserDataThunkCreator, */
    logoutThunkCreator
})(HeaderContainer);


    