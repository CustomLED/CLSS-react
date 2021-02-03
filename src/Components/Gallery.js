import React, { Component } from "react";
import Posts from '../Components/Posts';
// import { getPosts } from "../Services/postServices";
 
class Gallery extends Component {
  render() {
    // const galleryitem = "wow look at all the text such text"
    return (
    <div>
        <h2>Gallery</h2>
        <p>We will either find a way or make one.</p>
        <ol>
          <li>In here we will pull the gallery items from postgresql rails api</li>
        <Posts>This components lists the gallery items</Posts>
        </ol>
      </div>
    );
  }
}
 
export default Gallery;