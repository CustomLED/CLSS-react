// import React, { Component } from "react";
import React,{useState, useReducer, useEffect} from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import {getPosts} from './Services/postServices'
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
 

const Main = () => {
	const initialState = {
		posts: [],
		loggedInUser: null,
		auth: {token: null}
  }
  const [store, dispatch] = useReducer(stateReducer,initialState)
	useEffect(() => {
    getPosts()
		.then((posts) => dispatch({type: 'setPosts', data: posts}))
		.catch((error) => console.log(error))
  },[])

    return (
    <HashRouter>
        <div>
          <StateContext.Provider value={{store,dispatch}}>
          <h1>SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/adminenquiries">Admin Enquiry</NavLink></li>
            <li><NavLink to="/adminposts">Admin Posts</NavLink></li>
            <li><NavLink to="/post">A Single Post</NavLink></li>
            <li><NavLink to="/posts">Many Posts</NavLink></li>


          </ul> 
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/gallery" component={Gallery}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/adminenquiries" component={Adminenquiries}/>
             <Route path="/adminposts" component={Adminposts}/>
             <Route path="/post" component={Post}/>
             <Route path="/posts" component={Posts}/>

          </div>
          </StateContext.Provider>
         </div>
        </HashRouter>
    );
}

 
export default Main;