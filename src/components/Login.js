import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const Login = ({ authenticate, isAuthenticated }) => {

	if (isAuthenticated) {
		return <Redirect to="/chatRoom" />
	}
	else
	{
		return (
			<div>
					<h1>BIENVENID@S</h1>
					<form onSubmit={(e)=>{
						e.preventDefault()
						authenticate()
					}}>
						<input type="text"  placeholder="Put your name please" />
						<button type="submit">UNIRSE</button>
					</form>
			</div>
		)
	}
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	isAuthenticated: false
})
const mapDispatchToProps = dispatch => ({
	authenticate: () => dispatch(login())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
