import React, { Component } from "react";
import BackgroundVideo from "./BackgroundVideo.jsx";
import EnquiryForm from "./EnquiryForm.jsx"
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="https://www.aumusicproductions.com.au/">already working website</a>.
        </p>
        <EnquiryForm />
      </div>
    );
  }
}
 
export default Contact;