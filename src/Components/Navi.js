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
            <Nav.Link><NavLink exact to="/" className="nav-link">HOME</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/about" className="nav-link">ABOUT</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/gallery" className="nav-link">GALLERY</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/contact" className="nav-link">CONTACT</NavLink></Nav.Link>
            {loggedInUser ?
              <>
              <button onClick={handleSignOut}>Sign Out</button>	
              {/* <button onClick={() => history.push('/posts/new') }>Add Joke</button>	 */}
              <span>{loggedInUser}</span>
              </>
            :
              <>
              <p>You are now signed out</p>
              {/* <button onClick={() => history.push('/register')}>Register</button> */}
              {/* <button onClick={() => history.push('/sign_in')}>Sign In</button> */}
              </>
            }
            
            </Nav>
            </Navbar.Collapse>
            {/* <Nav.Link><NavLink to="/adminenquiries">Admin Enquiry</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/adminposts">Admin Posts</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/post">A Single Post</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/posts">Many Posts</NavLink></Nav.Link> */}



          </Navbar> 
	)
}
