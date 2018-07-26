import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import chatRoomReducer from './chatRoomReducer'
import loadingReducer from './loadingReducer'
import authReducer from './authReducer.js'

const rootReducer = combineReducers({
  loginReducer,
  chatRoomReducer,
  loadingReducer,
  authReducer 
})

export default rootReducer