// import React, { Component } from "react";
import React,{useState, useReducer, useEffect} from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import {getPosts} from './Services/postServices'
import {getEnquiries} from './Services/enquiryServices'
import stateReducer from './utils/stateReducer'
import {StateContext} from './utils/stateContext'
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Adminenquiries from "./Components/Adminenquiries";
import Adminposts from "./Components/Adminposts";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import postAPI from "./Services/postServices";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import BackgroundVideo from "./BackgroundVideo.jsx";
 

const Main = () => {
	const initialState = {
    posts: [],
    enquiries: [],
		loggedInUser: null,
		auth: {token: null}
  }
  
  const [store, dispatch] = useReducer(stateReducer,initialState)
	// useEffect(() => {
  //   getPosts()
		// .then((posts) => dispatch({type: 'setPosts', data: posts}))
		// .catch((error) => console.log(error))
  // },[]),
  // useEffect(() => {
  //   getEnquiries()
	// 	.then((enquiries) => dispatch({type: 'setEnquiries', data: enquiries}))
	// 	.catch((error) => console.log(error))
  // },[])

   useEffect(async () => {
    getPosts()
     const posts = await getPosts
     dispatch({type: 'getPosts', data: posts})
    getEnquiries()
    const queries = await getEnquiries
    dispatch({type: 'getEnquiries', data: queries})
  }, [])

//   useEffect(() => {
//     getPosts()
//     //  .then(posts => {
//     //     setPosts(result.posts);
//     //  })
//     .then((posts) => dispatch({type: 'setPosts', data: posts}))
//      .catch(console.error)
// }, [setPosts]);

    return (
    <HashRouter>
        <div>
          <StateContext.Provider value={{store,dispatch}}>
          <BackgroundVideo />
          <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top" className="header">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto nav-fill w-100">
            <Nav.Link><NavLink exact to="/" className="nav-link">HOME</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/about" className="nav-link">ABOUT</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/gallery" className="nav-link">GALLERY</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/contact" className="nav-link">CONTACT</NavLink></Nav.Link>
            
            </Nav>
            </Navbar.Collapse>
            {/* <Nav.Link><NavLink to="/adminenquiries">Admin Enquiry</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/adminposts">Admin Posts</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/post">A Single Post</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/posts">Many Posts</NavLink></Nav.Link> */}



          </Navbar> 
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/gallery" component={Gallery}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/adminenquiries" component={Adminenquiries}/>
             <Route path="/adminposts" component={Adminposts}/>
             <Route exact path="/posts" component={Posts}/>
             <Route path="/post/:id" component={Post}/>



          </div>
          </StateContext.Provider>
         </div>
        </HashRouter>

    );
}

 
export default Main;