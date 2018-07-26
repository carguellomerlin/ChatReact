import { v4 } from 'node-uuid'

import {
	LOGIN_SUCESS
} from '../constants/actionTypes.js'

export const login = () => (dispatch,getState,api) => {
		setTimeout(()=>{
			dispatch({ type: LOGIN_SUCESS})
		},3000)
}
