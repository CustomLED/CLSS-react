// import React, { Component } from "react";
import React,{useState, useReducer, useEffect} from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import {getPosts} from './Services/postServices'
import {getEnquiries} from './Services/enquiryServices'
import stateReducer from './utils/stateReducer'
import {StateContext} from './utils/stateContext'
import Home from "./Components/Home"
import Gallery from "./Components/Gallery"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Adminenquiries from "./Components/Adminenquiries"
import Adminposts from "./Components/Adminposts"
import Post from "./Components/Post"
import Posts from "./Components/Posts"
import postAPI from "./Services/postServices"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import BackgroundVideo from "./BackgroundVideo.jsx"
import {signOut} from './Services/authServices'
import Navi from './Components/Navi'
import SignIn from './Components/SignIn'
import NewUser from './Components/NewUser'
import NewPost from './Components/NewPost'
import EnquiryForm from './Components/EnquiryForm'
import Enquiry from './Components/Enquiry'

 

const Main = () => {
	const initialState = {
    posts: [],
    enquiries: [],
		loggedInUser: sessionStorage.getItem("user") || null,
		auth: {token:sessionStorage.getItem("token") || null}
  }
  
  const [store, dispatch] = useReducer(stateReducer,initialState)
	useEffect(() => {
    getPosts()
		.then((posts) => dispatch({type: 'setPosts', data: posts}))
		.catch((error) => console.log(error))
  },[])

  useEffect(() => {
    getEnquiries()
		.then((enquiries) => dispatch({type: 'setEnquiries', data: enquiries}))
		.catch((error) => console.log(error))
  },[])

  //wrong syntax
  // useEffect(() => {
  //   getEnquiries()
	// 	.then((enquiries) => dispatch({type: 'setEnquiries', data: enquiries}))
	// 	.catch((error) => console.log(error))
  // },[])

  //kinda works but doesn't actully. doesn;t show posts
  //  useEffect(async () => {
  //   getPosts()
  //    const posts = await getPosts
  //    dispatch({type: 'getPosts', data: posts})
  //   getEnquiries()
  //   const queries = await getEnquiries
  //   dispatch({type: 'getEnquiries', data: queries})
  // }, [])

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
              <Navi/>
                <div className="content">
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/gallery" component={Gallery}/>
                  <Route path="/contact" component={Contact}/>
                  <Route exact path="/adminenquiries" component={Adminenquiries}/>
                  <Route exact path='/adminenquiries/new' component={EnquiryForm} />
						      <Route exact path='/adminenquiries/update/:id' component={EnquiryForm} />
                  <Route exact path='/adminenquiries/:id' component={Enquiry}/>
                  <Route path="/adminposts" component={Adminposts}/>
                  <Route exact path="/posts" component={Posts}/>
                  <Route exact path='/posts/new' component={NewPost} />
						      <Route exact path='/posts/update/:id' component={NewPost} />
                  <Route exact path="/post/:id" component={Post}/>
                  <Route path='/sign_in' component={SignIn}/>
                  <Route path='/register' component={NewUser}/>
                </div>
          </StateContext.Provider>
        </div>
      </HashRouter>

    );
}

 
export default Main;