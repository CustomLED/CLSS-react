// // import React, { Component } from "react";

// // // This page is to pull one post from database

// // class Post extends Component {
// //       render() {
// //         return (
// //           <div>
// //             <h2>This component returns a single Post object</h2>
// //             <p>We will either find a way or make one.</p>
// //             <ol>
// //               <li>In here we will pull a single post from postgresql rails api</li>
// //             </ol>
// //           </div>
// //         );
// //       }
// //     }
// //      
// //     export default Post;

// import React from 'react'
// // import {Line, COLOUR1, COLOUR2} from './Styled'
// import { Link } from "react-router-dom"
// import { useContext, useState } from "react"
// import {StateContext} from '../utils/stateContext'
// import postAPI from '../Components/config/api'
// import {useGlobalState} from '../utils/stateContext'

// export default function Post({post,index}) {
// 	if (!post) return null
	
// 	return (
		
// 			<p>{post.body}</p>	
		
// 	)
// }

import React,{ useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
// import Moment from 'react-moment'
import {getPost} from '../Services/postServices.js'
// import {Button, Panel} from './Styled'
import {useGlobalState} from '../utils/stateContext'
import {deletePost} from '../Services/postServices'

export default function PostDetails() {
	const [post,setPost] = useState(null)
	const {id} = useParams()
	let history = useHistory()
	const {store,dispatch} = useGlobalState()
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
		<div>
			<p>Job: {post.name}</p>			
			<p>{post.text}</p>
			<img src="https://res.cloudinary.com/custom-led-screen-solutions/image/upload/v1612589056/CLSS/CA9550F6-C742-4C1A-B307-FC965A14917A_1_105_c_dmaa1d.jpg" alt="showgirls"/>
			{loggedInUser ?
			<>
				<button onClick={() => history.push(`/posts/update/${id}`)}>Update</button>
				<button onClick={handleDelete}>Delete</button>
			</>
			:
			<>
			</>
			}
		</div>
	
	)
}