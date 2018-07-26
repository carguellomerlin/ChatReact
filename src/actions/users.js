import { v4 } from 'node-uuid'

import {
	GET_USERS,
	ADD_USER,
	AUTH_USER
} from '../constants/actionTypes.js'


export const getUsers = (users) => ({
	type:GET_USERS,
	id: v4(),
	users
})

export const addUser = username => ({
	type: ADD_USER,
	newUser: {
		id: v4(),
		username
	}
})

export const authUser = () => ({
	type:AUTH_USER,
	id
})

export const login = () => (dispatch,getState,api) => {
		setTimeout(()=>{
			dispatch({ type: 'LOGIN_SUCESS'})
		},3000)
}
