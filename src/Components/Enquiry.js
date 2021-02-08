import React,{ useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import {deleteEnquiry, getEnquiry} from '../Services/enquiryServices'

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
			history.push('/Adminenquiries')
		})
	}
	return (
		<div id="new-enquiry-table">
			<h2 className="new-enquiry-text">First Name:</h2><h3 className="new-enquiry-text">{enquiry.first_name}</h3>			
			<h2 className="new-enquiry-text">Last Name:</h2><h3 className="new-enquiry-text"> {enquiry.last_name}</h3>
            <h2 className="new-enquiry-text">Organisation:</h2><h3 className="new-enquiry-text"> {enquiry.organisation} </h3>
            <h2 className="new-enquiry-text">Email:</h2><h3 className="new-enquiry-text"> {enquiry.email}</h3>
            <h2 className="new-enquiry-text">Phone Number:</h2><h3 className="new-enquiry-text"> {enquiry.phone_number}</h3>
            <h2 className="new-enquiry-text">Description:</h2><h3 className="new-enquiry-text"> {enquiry.description}</h3>
			{loggedInUser ?
			<>
				{/* <button onClick={() => history.push(`/adminenquiries/update/${id}`)}>Update</button> */}
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