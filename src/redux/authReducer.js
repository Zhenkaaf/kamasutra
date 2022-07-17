import { authAPI, securityAPI } from '../api/api';

const SET_USER_DATA = '/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = '/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      }
      case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl
      }
    default:
      return state;
  }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, captchaUrl });
/* export const setAuthUserDataThunkCreator = () => {
  return (dispatch) => {
    return authAPI.me()
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          dispatch(setAuthUserData(id, email, login, true));
        }
      });
  }
} */
//refactor----------------------------------------------------------------------
export const setAuthUserDataThunkCreator = () => async (dispatch) => {
 
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}
export const loginThunkCreator = (email, password, captcha, rememberMe, setStatus) => {
  console.log(email, password, rememberMe, captcha, setStatus);
  return async (dispatch) => {
    const response = await authAPI.login(email, password, captcha, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserDataThunkCreator());
    }

    else {
      if (response.data.resultCode === 10) {
        alert('resultCode === 10');
        dispatch(getCaptchaUrl());
      }
      setStatus(response.data.messages);
    }
  }
}
/* export const loginThunkCreator = (email, password, rememberMe, setStatus) => {
  console.log(email, password, rememberMe, setStatus);
  return (dispatch) => {
    alert('work1');
    return authAPI.login(email, password, rememberMe)
      .then(response => {
       
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserDataThunkCreator());
        }
       
        else {
          if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
          }
          setStatus(response.data.messages);
        }
      });
  }
} */
export const logoutThunkCreator = () => {
  return async(dispatch) => {
    let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
     }
}
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
alert(captchaUrl);
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}



export default authReducer;