// import React, { Component } from "react";

// // This page is to pull many posts from database

// class Posts extends Component {
//       render() {
//         return (
//           <div>
//             <h2>This component returns many Post objects</h2>
//             <p>We will either find a way or make one.</p>
//             <ol>
//               <li>In here we will pull many posts from postgresql rails api</li>
//             </ol>
//           </div>
//         );
//       }
//     }
//      
    // export default Posts;


import React from 'react'
import {Link} from 'react-router-dom'
// import styled from 'styled-components'
// import Post from './Post'
import {useGlobalState} from '../utils/stateContext'
// import getPosts from '../Services/postServices'


export default function Posts() {
	const {store} = useGlobalState()
    const {posts} = store
    // if(!posts) return null
    

	return  (
		<div>
           {posts.map((post,index) => {
				return (
					// <Link key={post.id} to={`/posts/${post.id}`}>
					// 	<Post index={index} post={post.name} />
                    // </Link>
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.name}</Link>
                    </li>
                    // <div> index={index} post={post.name} </div>
				)
			})}
		</div>
	)
}
