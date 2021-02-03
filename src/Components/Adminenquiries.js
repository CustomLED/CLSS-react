// import React, { Component } from "react";

// // This page is for stephen to edit enquiries through admin user

// class Adminenquiries extends Component {
//       render() {
//         return (
//           <div>
//             <h2>Enquiries for Admin Dashboard</h2>
//             <p>We will either find a way or make one.</p>
//             <ol>
//               <li>In here we will pull the Admin enquiries from postgresql rails api</li>
//             </ol>
//           </div>
//         );
//       }
//     }
//      
//     export default Adminenquiries;

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
//     export default Posts;


import React from 'react'
import {Link} from 'react-router-dom'
// import styled from 'styled-components'
import {useGlobalState} from '../utils/stateContext'


export default function Enquiries() {
	const {store} = useGlobalState()
    const {enquiries} = store
    // if(!posts) return null
    // console.log(enquiries)

	return  (
		<div>
           {enquiries.map((enquiries,index) => {
				return (
					// <div key={post.id} to={`/posts/${post.id}`}>
					// 	<Post index={index} post={post} />
					// </div>
					<li key={enquiries.id}>
                        <Link to={`/adminenquiries/${enquiries.id}`}>{enquiries.first_name} {enquiries.last_name}</Link>
                    </li>
                    // <div> index={index} enquiries={enquiries.name} </div>
				)
			})}
		</div>
	)
}