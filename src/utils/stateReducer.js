
export default function reducer (state, action) {
	switch(action.type) {
		case 'setPosts':{
			return {
				...state,
				posts: action.data
			}
		}
		case 'addPost': {
			console.log("action.data")
			console.log(action.data)
			return {
				...state,
				posts: [...state.posts, action.data]
			}
		}
		case 'deletePost': {
			const updatedPosts = state.posts.filter((post) => {
				return post.id !== parseInt(action.data)
			})
			return {
				...state,
				posts: updatedPosts
			}
		}
		case 'updatePost': {
			const post = state.posts.find((post) => post.id == action.data.id)
			const theRest = state.posts.filter((post) => post.id != action.data.id)
			const updatedPost = Object.assign(post, action.data)
			return {
				...state,
				posts: [updatedPost, ...theRest]
			}

		}
		case 'setEnquiries':{
			return {
				...state,
				enquiries: action.data
			}
		}
		case 'addEnquiries': {
			return {
				...state,
				enquiries: [...state.enquiries, action.data]
			}
		}
		case 'deleteEnquiry': {
			console.log("Data is:")
			console.log(action.data)
			console.log("Individual Enquiry:")
			const updatedEnquiries = state.enquiries.filter((enquiry) => {
				console.log(enquiry)
				return enquiry.id !== parseInt(action.data)
			})
			console.log("All Enquiry")
			console.log(updatedEnquiries)
			return {
				...state,
				enquiries: updatedEnquiries
			}
		}
		case 'updateEnquiries': {
			const enquiries = state.enquiries.find((enquiries) => enquiries.id == action.data.id)
			const theRest = state.enquiries.filter((enquiries) => enquiries.id != action.data.id)
			const updatedEnquiries = Object.assign(enquiries, action.data)
			return {
				...state,
				enquiries: [updatedEnquiries, ...theRest]
			}

		}

		case 'setLoggedInUser': {
			return {
				...state,
				loggedInUser: action.data
			}
		}
		case 'setToken': {
			return {
				...state,
				auth: {
					...state.auth,
					token: action.data
				}
			}
		}
		default: return state
	}
}