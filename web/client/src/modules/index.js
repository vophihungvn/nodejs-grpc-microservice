import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import todo from './todo'
import user from './user'

export default combineReducers({
  router: routerReducer,
  counter,
  todo,
  user
})
