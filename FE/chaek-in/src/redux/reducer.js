import { SET_USER_NICKNAME, SET_USER_EMAIL, SET_USER_ACCESSTOKEN, SET_USER_REFRESHTOKEN } from './actions';

const initialState = {
  nickname: '',
  email: '',
  accessToken: '',
  refreshToken: '',
};

function userReducer(state = { nickname: '', email: '', accessToken: '', refreshToken: '' }, action) {
  switch (action.type) {
    case SET_USER_NICKNAME:
      return { ...state, nickname: action.payload };
    case SET_USER_EMAIL:
      return { ...state, email: action.payload };
    case SET_USER_ACCESSTOKEN:
      return { ...state, accessToken: action.payload };
    case SET_USER_REFRESHTOKEN:
      return { ...state, refreshToken: action.payload };
    default:
      return state;
  }
}

export default userReducer;
