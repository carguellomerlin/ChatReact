import React from 'react'

const chatRoomReducer = (state=[],action) => {
	switch (action.type) {
		case 'GET_MESSAGES':
			return action.messages
		case 'ADD_MESSAGE':
			return action.addmessage
		default:
			return state
	}
}
export default chatRoomReducer