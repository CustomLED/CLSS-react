import React from 'react'
import {useHistory, NavLink} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import {signOut} from '../Services/authServices'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Navi() {
	let history = useHistory()

	const {store,dispatch} = useGlobalState()
	const {loggedInUser} = store

	function handleSignOut(event) {
		event.preventDefault()
		signOut(loggedInUser)
		.then(() => {
			dispatch({type: 'setLoggedInUser', data: null})
			dispatch({type: 'setToken', data: null})
		})
	}

	return (
		<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top" className="header">
		<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
		<Navbar.Collapse id="responsive-navbar-nav">
		<Nav className="mr-auto nav-fill w-100">
		<NavLink exact to="/" className="nav-link">HOME</NavLink>
		<NavLink to="/about" className="nav-link">ABOUT</NavLink>
		<NavLink to="/posts" className="nav-link">GALLERY</NavLink>
		{loggedInUser ? 
		<>
		<NavLink to="/adminenquiries" className="nav-link">ENQUIRIES</NavLink>
		<NavLink to="/posts/new" className="nav-link">NEW POST</NavLink>
		</>
		: 
		<NavLink to="/contact" className="nav-link">CONTACT</NavLink>
		}
		{loggedInUser ?
		  <>
		  <button onClick={handleSignOut}>Sign Out</button>    
		  <span>{loggedInUser}</span>
		  </>
		:
		  <>
		  <button onClick={() => history.push('/sign_in')}>Sign In</button>
		  </>
		}
		
		</Nav>
		</Navbar.Collapse>
	  </Navbar> 
	)

}
