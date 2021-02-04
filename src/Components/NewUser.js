import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
// import {Panel,Label, Input, Button} from './Styled'
import {signUp} from '../Services/authServices'
import {useGlobalState} from '../utils/stateContext'

export default function NewUser() {
	const initialFormState = {
		username: '', 
		email: '', 
		password: '', 
		password_confirmation: ''
	}
	const [formState, setFormState] = useState(initialFormState)
	const {dispatch} = useGlobalState()
	let history = useHistory()
	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}
	function handleRegister(event) {
		event.preventDefault()
		signUp(formState)
		.then((user) => {
			dispatch({type: 'setLoggedInUser', data: user.username})
			// history.push('/posts')
		})
	}
	return (
		<>
		<form>
			<label>Username:</label>
			<input type="text" name='username' value={formState.username} onChange={handleChange}/>
			<label>Email:</label>
			<input type='email' name='email' value={formState.email} onChange={handleChange}/>
		</form>
		<form>
			<label>Password:</label>
			<input type='password' name='password' value={formState.password} onChange={handleChange}/>
			<label>Password Confirmation:</label>
			<input type='password' name='password_confirmation' value={formState.password_confirmation} onChange={handleChange}/>
			<button onClick={handleRegister}>Register</button>
		</form>
		</>
	)
}
