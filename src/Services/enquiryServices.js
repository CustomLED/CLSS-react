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
