import React, { Component } from "react";
import { Link } from "react-router-dom";
 
class Home extends Component {
  render() {
    return (
      <div id="home-table">
        <Link to="/about">
        <img src="https://res.cloudinary.com/custom-led-screen-solutions/image/upload/v1612337234/CLSS/clss-logo_cppcam.png" id="home-img" />
        </Link>
      </div>
    );
  }
}
 
export default Home;