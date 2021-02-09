
import React from 'react'
import {Link} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


export default function Enquiries() {
	const {store} = useGlobalState()
    const {enquiries} = store
    if(!enquiries) return null

	return  (
		<div>
           {enquiries.map((enquiries,index) => {
				return (

					<div id="enquiry-list" className="d-flex justify-content-center" key={enquiries.id}>
					<CardDeck>
						<Card>
							<Card.Title>{enquiries.organisation}</Card.Title>
							<Link to={`/adminenquiries/${enquiries.id}`} id="enquiry-list-link">
							<Card.Body id="enquiry-list-body">{enquiries.first_name}
								<br/>(read)
							</Card.Body>
							</Link>
						</Card>
                    </CardDeck>
					</div>
                
				)
			})}
		</div>
	)
}