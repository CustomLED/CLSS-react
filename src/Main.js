import React,{useReducer, useEffect} from 'react'
import {
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom"
import {getPosts} from './Services/postServices'
import {getEnquiries} from './Services/enquiryServices'
import stateReducer from './utils/stateReducer'
import {StateContext} from './utils/stateContext'
import Home from "./Components/Home"
import About from "./Components/About"
import Adminenquiries from "./Components/Adminenquiries"
import Post from "./Components/Post"
import Posts from "./Components/Posts"
import BackgroundVideo from "./BackgroundVideo.jsx"
import Navi from './Components/Navi'
import SignIn from './Components/SignIn'
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
  
   function PrivateRoute({ children, ...rest }) {
    let auth = store.loggedInUser;
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  
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
  
  return (
    <BrowserRouter>
        <div>
          <StateContext.Provider value={{store,dispatch}}>
            <BackgroundVideo />
              <Navi/>
                <div className="content">
                  
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/contact" component={EnquiryForm}/>
                  <PrivateRoute exact path="/adminenquiries">
                    <Adminenquiries />
                  </PrivateRoute>
                  <Route exact path="/adminenquiries/new" component={EnquiryForm} />
                  <PrivateRoute exact path="/adminenquiries/:id">
                    <Enquiry />
                  </PrivateRoute>
                  <Route exact path="/posts" component={Posts}/>
                  <PrivateRoute exact path="/posts/new">
                    <NewPost />
                  </PrivateRoute>
                  <PrivateRoute exact path="/posts/update/:id">
                    <NewPost />
                  </PrivateRoute>
                  <Route exact path="/post/:id" component={Post}/>
                  <Route path='/sign_in' component={SignIn}/>
                </div>
          </StateContext.Provider>
        </div>
      </BrowserRouter>

    );
}

export default Main;
