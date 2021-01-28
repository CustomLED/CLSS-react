import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";
import About from "./About";
 
class Main extends Component {
  render() {
    return (
    <HashRouter>
        <div>
          <h1>SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul> 
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/gallery" component={Gallery}/>
             <Route path="/contact" component={Contact}/>
          </div>
        </div>
    </HashRouter>
    );
  }
}
 
export default Main;