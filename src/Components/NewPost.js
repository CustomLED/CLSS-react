import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {createPost, getPost, updatePost} from '../Services/postServices'
import {useGlobalState} from '../utils/stateContext'

export default function NewPost() {
	const initialFormState = {
		admin_id: 1,
		name: '',
		text: ''
	}
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const {dispatch, store} = useGlobalState()
	const {posts} = store;

	useEffect(() => {
		if(id) {
			getPost(id)
			.then((post) => {
				console.log(post)
				setFormState({
					admin_id: 1,
					name: post.name,
					text: post.text
				})
			})
		}
	},[id])

	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
		
	}

	function handleClick(event) {
		event.preventDefault()
		if (validateForm() == false) {
			alert("Please fill all fields correctly")
			return
		  }
		if(id) {
			updatePost( {id: id, ...formState})
			.then(() => {
				dispatch({type: 'updatePost', data: {id: id, ...formState}})
				history.push('/posts')
			})
		}
		else {
			
			createPost({...formState})
			.then((post) => {		
				dispatch({type: 'addPost', data: post})
				history.push('/posts')
			})
			.catch((error) => console.log(error))
		}
	}

	function validateForm() {
		console.log(formState)
		if (formState.name == ""){
		  return false
		}
		if (formState.text == ""){
			return false
		  }
		return true
	}

	return (
		<div id ="new-job-table">
			<label className="job">Job Name:</label>
			<textarea className="job-box" type='text' name='name' value={formState.name} onChange={handleChange}></textarea>
			<label className="job">Job Description:</label>
			<textarea className="job-box" type='text' name='text' value={formState.text} onChange={handleChange}></textarea>
			<button className="button" onClick={handleClick}>{id ? 'Update' : 'Create'}</button>
		</div>
	)
}
