import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useRef } from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {createPost, getPost, updatePost} from '../Services/postServices'
import {useGlobalState} from '../utils/stateContext'
import api from "./config/api.js"
// import NewImageForm from './NewImageForm'

const useForceUpdate = () => useState()[1];


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

	function handleSubmit(event) {
		event.preventDefault()
		const fileInput = document.querySelector("#file-upload")
		const formData = new FormData()
		formData.append('file', fileInput.files[0])
		Object.entries(formState).forEach(pair => {
			formData.append(`${pair[0]}`, pair[1])
		})
		
		if(id) {
			updatePost( {id: id, ...formState})
			.then(() => {
				dispatch({type: 'updatePost', data: {id: id, ...formState}})
				// history.push(`/post/${id}`)
				history.push('/posts')
			})
		}
		else {
			createPost(formData)
			.then((post) => {
				dispatch({type: 'addPost', data: post})
				history.push('/posts')
			})
			.catch((error) => console.log(error))
		}
	}
	return (
		<form onSubmit={handleSubmit} id ="new-job-table">
			<label className="job">Job Name:</label>
			<textarea className="job-box" type='text' name='name' value={formState.name} onChange={handleChange}></textarea>
			<label className="job">Job Description:</label>
			<textarea className="job-box" type='text' name='text' value={formState.text} onChange={handleChange}></textarea>
			<label>Image</label>
			<input 
				type="file"
				id="file-upload"
				/>
			<button className="button">{id ? 'Update' : 'Create'}</button>
		</form>
	)
}
