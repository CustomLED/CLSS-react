// Enquiry database functions
import postAPI from '../Components/config/api'

export async function getEnquiries() {
    const response = await postAPI.get('/api/enquiries')
	return response.data
}

export async function getEnquiry(id) {
    const response = await postAPI.get(`/api/enquiries/${id}`)
    return response.data
}

export async function createEnquiry(post) {
	const response = await postAPI.post('/api/enquiries', post)
	return response.data
	
}

export async function deleteEnquiry(id) {
	const response = await postAPI.delete(`/api/enquiries/${id}`)
	return response.data
}

export async function updateEnquiry(data) {
	const response = await postAPI.put(`/api/enquiries/${data.id}`, {first_name: data.first_name, last_name: data.last_name, organisation: data.organisation, email: data.email, phone_number: data.phone_number, description: data.description, admin_id: data.admin_id})
	return response.data
}

export default createEnquiry