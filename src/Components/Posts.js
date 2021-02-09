
import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

export default function Posts() {
	const {store} = useGlobalState()
    const {posts} = store
	console.log(posts)
	
    if(!posts) return null


	return  (
		<div>
           {posts.map((post,index) => {
				return post ? (
					<div id="posts-div" className="d-flex justify-content-center" key={post.id}>

                    <CardDeck id="posts-card" style={{width: '20rem'}}>
						<Card style={{width: '10rem'}, {margin: '2rem'}} id="card-child">
						<Card.Img variant="top" src={post.url} />
						<Card.Body className="card-body">
							<Card.Title>{post.name}</Card.Title>
							<Button variant="primary" id="card-button">
                        <Link to={`/post/${post.id}`} id="card-button-text">READ</Link>
						</Button>
						</Card.Body>
						</Card>
                    </CardDeck>
					</div>
				) : null
			})}
		</div>
	)
}
