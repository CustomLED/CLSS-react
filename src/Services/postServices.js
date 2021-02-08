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
	const response = await postAPI.post('/api/posts', post)
	console.log(response)
	return response.data
	
}

export async function deletePost(id) {
	const response = await postAPI.delete(`/api/posts/${id}`)
	return response.data
}

export async function updatePost(data) {
	const response = await postAPI.put(`/api/posts/${data.id}`, {name: data.name, text: data.text, admin_id: data.admin_id})
	console.log(response)
	return response.data
}


