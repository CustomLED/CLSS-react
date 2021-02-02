export default function reducer (state, action) {
	switch(action.type) {
		case 'setPosts':{
			return {
				...state,
				posts: action.data
			}
		}
		case 'addPost': {
			return {
				...state,
				posts: [action.data, ...state.posts]
			}
		}
		case 'deletePost': {
			const updatedPosts = state.posts.filter((post) => {
				return post.id !== parseInt(action.data)
			})
			return {
				...state,
				post: updatedPosts
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