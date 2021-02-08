
import React from 'react'
import {Link} from 'react-router-dom'
// import styled from 'styled-components'
import {useGlobalState} from '../utils/stateContext'


export default function Enquiries() {
	const {store} = useGlobalState()
    const {enquiries} = store
    if(!enquiries) return null

	return  (
		<div>
           {enquiries.map((enquiries,index) => {
				return (
				
					<li key={enquiries.id}>
                        <Link to={`/adminenquiries/${enquiries.id}`}>{enquiries.first_name} {enquiries.last_name} {enquiries.organisation} {enquiries.phone_number} {enquiries.email} {enquiries.description} {enquiries.admin}</Link>
                    </li>
                
				)
			})}
		</div>
	)
}