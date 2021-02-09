// This page seeds all the dummy data which will be changed to pull data from the rails api.
import postAPI from '../Components/config/api'



export async function getPosts() {
    const response = await postAPI.get('/api/posts')
    console.log(response);
	return response.data
}


export async function getPost(id) {
	const response = await postAPI.get(`/api/posts/${id}`)
	console.log(response.data)
    return response.data
}


export async function createPost(post) {
	const response = await fetch("http://localhost:3000/api/posts", {
		method: "POST",
		body: post,
	})
	const json = await response.json()
	return json
	
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


