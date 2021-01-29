import React from "react";

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
        <label>First Name:</label>
        <input type="text" name="first_name" />
        <label>Last Name:</label>
		<input type="text" name="last_name" />
        <label>Organisation:</label>
		<input type="text" name="organisation" />
        <label>Email:</label>
        <input type="email" name="email" />
		<label>Phone:</label>
		<input type="tel" name="phone_number" />
        <label>Enquiry:</label>
        <input type="text" name="description" />
        {status === "SUCCESS" ? <p>Thanks! We will get back to you shortly!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Oh no! There was an error.</p>}
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