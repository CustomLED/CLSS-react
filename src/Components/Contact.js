import React, { Component } from "react";
import EnquiryForm from "./EnquiryForm.jsx"
import Container from 'react-bootstrap/Container'

class Contact extends Component {
  render() {
    return (
      <Container id="contact">
        <div>
        <EnquiryForm />
        </div>
      </Container>
    );
  }
}
 
export default Contact;