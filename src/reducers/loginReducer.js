import React from 'react'
import actionTypes from '../constants/actionTypes.js'

const loginReducer = (state=[], action) => {
	switch (action.type) {
		case 'GET_USERS':
			return action.users
		case 'ADD_USER':
			return [
				...state,
				action.newUser
			]
		case 'AUTH_USER':
			return action.auth
		default:
			return state
	}
}
export default loginReducer