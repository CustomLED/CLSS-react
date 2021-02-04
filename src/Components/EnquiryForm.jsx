import React from "react";
import Row from 'react-bootstrap/Row'

export default class EnquiryForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mgepdgee"
        method="POST"
      >
        <h1 id="enquiry-title">ENQUIRIES</h1>
        <div id="enquiry-table" className="container-fluid">
          <Row md={2} className="col p-3">
        <label className="contact-title col-sm-6">First Name:</label>
        <input type="text" name="first_name" className="input-fill col-sm-6" />
        <label className="contact-title col-sm-6">Last Name:</label>
        <input type="text" name="last_name" className="input-fill col-sm-6" />
        <label className="contact-title col-sm-6">Organisation:</label>
        <input type="text" name="organisation" className="input-fill col-sm-6" />
        <label className="contact-title col-sm-6">Email:</label>
        <input type="email" name="email" className="input-fill col-sm-6" />
        <label className="contact-title col-sm-6">Phone:</label>
        <input type="tel" name="phone_number" className="input-fill col-sm-6" />
        <label id="enquiry-content" className="contact-title col-sm-6">Enquiry:</label>
        <input type="text" name="description" className="input-fill col-sm-6"/>
        {status === "SUCCESS" ? <p style={{color: "white"}}>Thanks! We will get back to you shortly!</p> : <div id="button-parent" class="offset-sm-6"><button id="button" class="">Submit</button></div>}
        {status === "ERROR" && <p style={{color: "white"}}>Oh no! There was an error.</p>}
        </Row>
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}