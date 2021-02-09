import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {getPost, deletePost} from '../Services/postServices.js'
import {useGlobalState} from '../utils/stateContext'
import Jumbotron from 'react-bootstrap/Jumbotron'

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
			dispatch({type: 'deletePost', data: id})
			history.push('/posts')
		})
	}

	
	return (
		<Jumbotron fluid id="job-table" className="d-flex flex-column align-items-center">
			<h1 className="job-post-text">{post.name}</h1>			
			<p className="job-post-text">{post.text}</p>
			<img id="job-img" className="d-inline-flex" src={post.url}  alt="image"/>
			{loggedInUser ?
			<>
				<button onClick={() => history.push(`/posts/update/${id}`)}>Update</button>
				<button onClick={handleDelete}>Delete</button>
			</>
			:
			<>
			</>
			}
		</Jumbotron>
	)
}