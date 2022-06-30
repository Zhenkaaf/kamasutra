import React from "react";
import { connect } from "react-redux";
import Users from "./Users.jsx";
import Preloader from "./../common/Preloader/Preloader";
import { follow, setUsers, unfollow, setCurrentPage, toggleFollowingProgress, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from "../../redux/usersReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";
import { compose } from "redux";
import { getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector, getPageSizeSelector, getTotalUsersCountSelector, getUsersSelector, getUsersSelectorSecond } from "../../redux/usersSelectors.js";



class UsersContainer extends React.Component {
    /* constructor(props) {
        alert('inside constructor');
        super(props);

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {   
                this.props.setUsers(response.data.items);
            });
    } */

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        /*  this.props.toggleIsFetching(true);
         usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
             .then(data => {
                 this.props.toggleIsFetching(false);
                 this.props.setUsers(data.items);
                 this.props.setTotalUsersCount(data.totalCount);
             }); */ //перенесли в редьюсер в санку
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
        /*
       this.props.toggleIsFetching(true);
       usersAPI.getUsers(pageNumber, this.props.pageSize)
           .then(data => {
               this.props.toggleIsFetching(false);
               this.props.setUsers(data.items);
           }); */
    }




    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.followThunkCreator}
                    unfollow={this.props.unfollowThunkCreator}
                    //toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}

                />
            </>
        )
    }
}

/* let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
} */

let mapStateToProps = (state) => {
    return {
        users: getUsersSelectorSecond(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
}

/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer); */

/* let withRedirect = withAuthRedirect(UsersContainer);

export default connect(mapStateToProps, {
    followThunkCreator,
    unfollowThunkCreator,

    setCurrentPage,

    toggleFollowingProgress,
    getUsers: getUsersThunkCreator
}
)(withRedirect); */

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {followThunkCreator, unfollowThunkCreator, setCurrentPage, toggleFollowingProgress, getUsers: getUsersThunkCreator})
)(UsersContainer);