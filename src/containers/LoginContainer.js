import {connect} from 'react-redux'
import Login from '../components/Login'


// const mapStateToProps = state => ({
// 	isAuthenticated: false
// })
// const mapDispatchToProps = dispatch => ({
// 	authenticate: () => dispatch({ type: 'ALGO' }) 
// })


const mapStateToProps = state => ({
	login: state.login,
	authenticated: state.authenticated,
	isAuthenticated: state.isAuthenticated,
	loading: state.loading
})

const mapDispatchToProps = dispatch => ({
	loadUsers: () => {
		dispatch({type:'TURN_ON_LOADER'})
		
	// Promise.all([
	// 	//apis && dispatchs
	// 	])
	}


})

export default connect(mapStateToProps,mapDispatchToProps)(Login);