import { post, setStorage, getStorage } from '../utils'

export const USER_LOGIN = 'user/login'

const USER_ID_KEY = 'userId'
const USER_EMAIL_KEY = 'userEmail'

const initialState = {
  isLogin: !!getStorage(USER_ID_KEY),
  userEmail: getStorage(USER_EMAIL_KEY),
  userId: getStorage(USER_ID_KEY) || ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        isLogin: true,
        userEmail: action.email,
        userId: action.userId
      }
    }
    default:
      return state
  }
}

export const login = ({ email }) => {
  return dispatch => {

    return post('api/user/login', { email })
    .then(res => {
      const {_id} = res.results.object
      setStorage(USER_ID_KEY, _id)
      setStorage(USER_EMAIL_KEY, email)

      dispatch({
        type: USER_LOGIN,
        userEmail: email,
        userId: _id
      })
    })
  }
}