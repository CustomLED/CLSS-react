import Row from 'react-bootstrap/Row'
import createEnquiry from '../Services/enquiryServices'
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import axios from "axios";


export default function EnquiryForm() {
  const initialFormState = {
    first_name: '',
    last_name: '',
    organisation: '', 
		email: '', 
    phone_number: '',
    description: '',
    admin_id: 1
  }
  
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  })

  
  const [formState, setFormState] = useState(initialFormState)
  const {dispatch} = useGlobalState()
  let history = useHistory()

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }
  
  function submitForm(event) {
    event.preventDefault();
      if (validateForm() == false) {
        alert("Please fill all fields correctly")
        return
      }
      createEnquiry({...formState})
      .then((post) => {		
        dispatch({type: 'addEnquiries', data: post});    
        history.push('/')
      })
      .then(handleOnSubmit(event))
      .catch((error) => console.log(error))
    
  }
    
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    } 
  }
  
  function handleOnSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/mgepdgee",
      data: formState
    })
      .then(r => {
    handleServerResponse(true, "Thanks!", form);
  })
  .catch(r => {
        handleServerResponse(false, "failed", form);
      });
    };
    
  function validateForm() {
    console.log(formState)
    if (formState.first_name == ""){
      return false
    }
    if (formState.last_name == ""){
      return false
    }
    if (formState.organisation == ""){
      return false
    }
    if (formState.email == ""){
      return false
    }
    if (formState.phone_number == ""){
      return false
    }
    if (isNaN(parseInt(formState.phone_number))){
      return false
    }
    if (formState.description == ""){
      return false
    }
    return true
  }
    
    return (
      <form name="myForm" onSubmit={submitForm}>
        <h1 id="enquiry-title">ENQUIRIES</h1>
        <div id="enquiry-table" className="container-fluid">
          <Row md={2} className="col p-3">
        <label className="contact-title col-sm-6">First Name:</label>
        <input type="text" name="first_name" className="input-fill col-sm-6" value={formState.first_name} onChange={handleChange}/>
        <label className="contact-title col-sm-6">Last Name:</label>
        <input type="text" name="last_name" className="input-fill col-sm-6" value={formState.last_name} onChange={handleChange}/>
        <label className="contact-title col-sm-6">Organisation:</label>
        <input type="text" name="organisation" className="input-fill col-sm-6" value={formState.organisation} onChange={handleChange}/>
        <label className="contact-title col-sm-6">Email:</label>
        <input type="email" name="email" className="input-fill col-sm-6" value={formState.email} onChange={handleChange}/>
        <label className="contact-title col-sm-6">Phone:</label>
        <input type="tel" name="phone_number" className="input-fill col-sm-6" value={formState.phone_number} onChange={handleChange}/>
        <label id="enquiry-content" className="contact-title col-sm-6">Enquiry:</label>
        <textarea type="text" id="enquiry-content-fill" name="description" className="input-fill col-sm-6" value={formState.description} onChange={handleChange}/>
        <div id="button-parent" className="offset-sm-6"><button id="button" className="">Submit</button></div>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
        </Row>
        </div>
      </form>
    )
  }
