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
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

export default function Posts() {
	const {store} = useGlobalState()
    const {posts} = store
    if(!posts) return null
    

	return  (
		<div>
           {posts.map((post,index) => {
				return (
					// <Link key={post.id} to={`/posts/${post.id}`}>
					// 	<Post index={index} post={post.name} />
                    // </Link>
					<div id="posts-div" className="d-flex justify-content-center">
                    <CardDeck key={post.id} id="posts-card" style={{width: '20rem'}}>
						<Card style={{width: '10rem'}, {margin: '2rem'}} id="card-child">
						<Card.Img variant="top" src="https://res.cloudinary.com/custom-led-screen-solutions/image/upload/v1612589056/CLSS/CA9550F6-C742-4C1A-B307-FC965A14917A_1_105_c_dmaa1d.jpg" />
						<Card.Body className="card-body">
							<Card.Title>{post.name}</Card.Title>
							<Button variant="primary" id="card-button">
                        <Link to={`/post/${post.id}`} id="card-button-text">READ</Link>
						</Button>
						</Card.Body>
						</Card>
                    </CardDeck>
					</div>
                    // <div> index={index} post={post.name} </div>
				)
			})}
		</div>
	)
}
