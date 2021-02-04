import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
 
class About extends Component {
  render() {
    return (
      <Container fluid="md" id="about-parent" >
        <h1 className="about-text">ABOUT US</h1>
            <p className="about-text">We are dedicated to providing the highest quality of LED screen installations for your business</p>
            <p className="about-text">We have a proven track record and boast a history of working with a large range of clients across the
                hospitality, live music, retail and events industries.
            </p>
      </Container>
    );
  }
}
 
export default About;