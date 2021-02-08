import React, { Component } from "react";
import Posts from '../Components/Posts';
// import { getPosts } from "../Services/postServices";
 
class Gallery extends Component {
  render() {
    // const galleryitem = "wow look at all the text such text"
    return (
    <div>
        <Posts></Posts>
      </div>
    );
  }
}
 
export default Gallery;