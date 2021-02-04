import React,{useState} from 'react'
// import {Button, Label, Input} from './Styled'
import {signIn} from '../Services/authServices'
import {useGlobalState} from '../utils/stateContext'

export default function SignIn({history}) {
	const initialFormState = {
		email: '',
		password: ''
	}
	const [formState, setFormState] = useState(initialFormState)
	const {dispatch} = useGlobalState()
	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}
	function handleSubmit(event) {
		event.preventDefault()
		signIn(formState)
		.then(({username,jwt}) => {
			console.log(username, jwt);
			dispatch({type: 'setLoggedInUser', data: username})
			dispatch({type: 'setToken', data: jwt})
			history.push('/')
		})
		.catch((error) => console.log(error))

	}
	return (
		<form >
			<label>Email:</label>
			<input type='email' name='email' value={formState.username} onChange={handleChange}/>
			<label>Password:</label>
			<input type='password' name='password' value={formState.password} onChange={handleChange}/>
			<button onClick={handleSubmit}>Login</button>
		</form>
	)
}
