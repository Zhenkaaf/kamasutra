import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from "../../redux/profileReducer";
import { Navigate } from "react-router-dom";

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";



class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
          }
        this.props.setUserProfile(userId);
        this.props.getStatusThunkCreator(userId);
       /*  let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        usersAPI.getUserById(userId)
            //axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            }); */
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunkCreator} />
            </div>
        )
    }
}


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}


 /* (props) => {
    if (this.props.isAuth === false) (!this.props.isAuth) {
        return <Navigate to={'/login'} /> 
    }
    return <ProfileContainer {...props} />
} */

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}
export default compose(
    connect(mapStateToProps, { getStatusThunkCreator, updateStatusThunkCreator,
        setUserProfile: setUserProfileThunkCreator }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

/* export default connect(mapStateToProps, { 
    setUserProfile: setUserProfileThunkCreator })(withRouter(AuthRedirectComponent)); */

/* export default connect(mapStateToProps, {
    setUserProfile
}
)(ProfileContainer); */