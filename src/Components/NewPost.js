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
				// const category = categories.find((category) => category.name.toLowerCase() === joke.category.toLowerCase())
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
		if(id) {
			updatePost( {id: id, ...formState})
			.then(() => {
				dispatch({type: 'updatePost', data: {id: id, ...formState}})
				// history.push(`/post/${id}`)
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
	return (
		<div>
			{/* <label>Category:</label> */}
			{/* <select name='category_id' value={formState.category_id} onChange={handleChange}> */}
				{/* {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
			</select> */}
			<label>Job Name:</label>
			<textarea type='text' name='name' value={formState.name} onChange={handleChange}></textarea>
			<label>Job description:</label>
			<textarea type='text' name='text' value={formState.text} onChange={handleChange}></textarea>
			<button onClick={handleClick}>{id ? 'Update' : 'Create'}</button>
		</div>
	)
}
