import React from 'react'

const loadingReducer = (state=false,action) => {
	switch (action.type) {
		case "TURN_ON_LOADER":
			return true
		case "TURN_OFF_LOADER":
			return false
		default:
			return state
	}
}
export default loadingReducer