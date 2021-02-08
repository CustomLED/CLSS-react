import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {getPost, deletePost} from '../Services/postServices.js'
import {useGlobalState} from '../utils/stateContext'

export default function PostDetails() {
	const [post, setPost] = useState(null)
	const {id} = useParams()
	let history = useHistory()
	const {dispatch, store} = useGlobalState()
	const {loggedInUser} = store
	
	
	useEffect(() => {
		getPost(id)
		.then((post) => setPost(post))
		.catch((error) => console.log(error))
	},[id])
	

	if (!post) return null
	function handleDelete() {
		deletePost(id)
		.then(() => {
			console.log(post)
			dispatch({type: 'deletePost', data: id})
			history.push('/posts')
		})
	}

	
	return (
		<div>
			<p>Job: {post.name}</p>			
			<p>{post.text}</p>
			{loggedInUser ?
			<>
				<button onClick={() => history.push(`/posts/update/${id}`)}>Update</button>
				<button onClick={handleDelete}>Delete</button>
			</>
			:
			<>
			
			<p>no one logged in </p>
			</>
			}
		</div>
	
	)
}