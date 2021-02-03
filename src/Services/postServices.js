// This page seeds all the dummy data which will be changed to pull data from the rails api.
import postAPI from '../Components/config/api'

// const posts = [
//  {id: 1, name: "Install at some place", text: "lots of hard work to make this", created_at: "2021-01-11T01:33:50.019Z", updated_at: "2021-01-11T01:33:50.019Z", admin_id: 2},
//  {id: 2, name: "Install at znnsgf place", text: "lots of hard work to make this", created_at: "2021-01-11T01:33:50.019Z", updated_at: "2021-01-11T01:33:50.019Z", admin_id: 2}
//  ]


function transformPost(post) {
	return {
		author: "Test",
        posted: post.created_at,
        name: post.name,
		text: post.text
	}

}

export async function getPosts() {
    const response = await postAPI.get('/api/posts')
    console.log(response);
	return response.data
	// return Promise.resolve(jokes)
}


export async function getPost(id) {
	const response = await postAPI.get(`/api/posts/${id}`)
	console.log(response.data)
    return response.data
    // old code
	// const post = posts.find(post => post.id == id)
	// return post ? transformPost(post) : null
}


export async function createPost(post) {
	return post
}

export async function deletePost(id) {
	console.log("ran")
	return id
}

export async function updatePost(post) {
	return post
	
}


