// This page seeds all the dummy data which will become a rails api call.
import postAPI from '../Components/config/api'

export async function getEnquiries() {
    const response = await postAPI.get('/api/enquiries')
    console.log(response);
	return response.data
	// return Promise.resolve(jokes)
}

export async function getEnquiry(id) {
    const response = await postAPI.get(`/api/enquiries/${id}`)
    return response.data

	// const post = posts.find(post => post.id == id)
	// return post ? transformPost(post) : null
}

export async function createEnquiry(post) {
	const response = await postAPI.post('/api/enquiries', post)
	console.log(response)
	return response.data
	
}

export async function deleteEnquiry(id) {
	const response = await postAPI.delete(`/api/enquiries/${id}`)
	return response.data
}

export async function updateEnquiry(data) {
	const response = await postAPI.put(`/api/enquiries/${data.id}`, {first_name: data.first_name, last_name: data.last_name, organisation: data.organisation, email: data.email, phone_number: data.phone_number, description: data.description, admin_id: data.admin_id})
	console.log(response)
	return response.data
}

export default createEnquiry