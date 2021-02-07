
import React,{ useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import {deleteEnquiry,getEnquiry} from '../Services/enquiryServices'

export default function EnquiryDetails() {
	const [enquiry,setEnquiry] = useState(null)
	const {id} = useParams()
	let history = useHistory()
	const {store,dispatch} = useGlobalState()
	const {loggedInUser} = store
	useEffect(() => {
		getEnquiry(id)
		.then((enquiry) => setEnquiry(enquiry))
		.catch((error) => console.log(error))
	},[id])
	

	if (!enquiry) return null
	function handleDelete() {
		deleteEnquiry(id)
		.then(() => {
			dispatch({type: 'deleteEnquiry', data: id})
			history.push('/adminenquiries')
		})
	}
	return (
		<div>
			<p>First Name: {enquiry.first_name}</p>			
			<p>Last Name: {enquiry.last_name}</p>
            <p>Organisation: {enquiry.organisation} </p>
            <p>Email: {enquiry.email}</p>
            <p>Phone Number: {enquiry.phone_number}</p>
            <p>Description: {enquiry.description}</p>
			{loggedInUser ?
			<>
				<button onClick={() => history.push(`/adminenquiries/update/${id}`)}>Update</button>
				<button onClick={handleDelete}>Delete</button>
			</>
			:
			<>
			<p>no one logged in</p>
			</>
			}
		</div>
	
	)
}