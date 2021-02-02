// import React, { Component } from "react";

// // This page is to pull one post from database

// class Post extends Component {
//       render() {
//         return (
//           <div>
//             <h2>This component returns a single Post object</h2>
//             <p>We will either find a way or make one.</p>
//             <ol>
//               <li>In here we will pull a single post from postgresql rails api</li>
//             </ol>
//           </div>
//         );
//       }
//     }
//      
//     export default Post;

import React from 'react'
// import {Line, COLOUR1, COLOUR2} from './Styled'

export default function Post({post,index}) {
	if (!post) return null
	
	return (
	
			<p>{post.body}</p>
	
	)
}