import React, { Component } from "react";

import { Link } from "react-router-dom";
 
class Home extends Component {
  render() {
    return (
      <div id="home-table">
        <Link to="/about">
        <img src="https://www.dropbox.com/s/368nuiuekyfi6m6/Untitled%20design%20%288%29.png?dl=0" alt="CLSS-logo" id="home-img" />
        </Link>
      </div>
    );
  }
}
 
export default Home;
