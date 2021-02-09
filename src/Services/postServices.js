// Database functions.
import postAPI from '../Components/config/api'


export async function getPosts() {
    const response = await postAPI.get('/api/posts')
	return response.data
}


export async function getPost(id) {
	const response = await postAPI.get(`/api/posts/${id}`)
    return response.data
}


export async function createPost(post) {
	const response = await postAPI.post('/api/posts', post)
	return response.data
	
}

export async function deletePost(id) {
	const response = await postAPI.delete(`/api/posts/${id}`)
	return response.data
}

export async function updatePost(data) {
	const response = await postAPI.put(`/api/posts/${data.id}`, {name: data.name, text: data.text, admin_id: data.admin_id})
	return response.data
}


