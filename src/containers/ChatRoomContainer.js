import { connect } from 'react-redux'
import ChatRoom from '../components/ChatRoom'

const mapStateToProps = state => ({
	draft: state.draf,
	user: state.user,
	users: state.users,
	loading: state.loading,
})

const mapDispatchToProps = dispatch => ({
	loadUsers: () => {
		dispatch({type:'TURN_ON_LOADER'})
		
	}

	Promise.all([
		//apis && dispatchs
		])

})

export default connect(mapStateToProps,mapDispatchToProps)(ChatRoom)