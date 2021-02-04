// This page handles async sign up sign in sign out with JWT token
import postAPI from "../Components/config/api"

export async function signUp(data) {
    const response = await postAPI.post('/api/auth/sign_up', data)
    return response.data
}
export async function signIn(data) {
	const response = await postAPI.post('/api/auth/sign_in', data)
    return response.data
}
export async function signOut(data) {
    sessionStorage.clear();
    return "Logged Out";
}