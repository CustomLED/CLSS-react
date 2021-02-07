
import React from 'react'
import {Link} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'


export default function Posts() {
	const {store} = useGlobalState()
    const {posts} = store
    if(!posts) return null
    

	return  (
		<div>
           {posts.map((post,index) => {
				return (
				
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.name} {post.text} {post.admin}</Link>
                    </li>
                    
				)
			})}
		</div>
	)
}
