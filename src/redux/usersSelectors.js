import { createSelector } from 'reselect';


export const getUsersSelectorSecond = (state) => {
    return state.usersPage.users;
}
export const getUsersSelectorFirst = (state) => {
    return getUsersSelectorSecond(state).filter(user => true);
}
export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching;
}
export const getUsersSuperSelector = createSelector(getUsersSelectorSecond, getIsFetchingSelector, (users, isFetching) => { //isFetching must be upper than this function
    return users.filter(user => true);
})






export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage;
}

export const getFollowingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress;
}