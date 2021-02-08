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
    admin_id: 1,
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
  // const { status } = formState;
  
  function submitForm(event) {
      event.preventDefault();
      createEnquiry({...formState})
      .then((post) => {		
        dispatch({type: 'addEnquiry', data: post});
        history.push('/adminenquiries')
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
      // url: "https://formspree.io/f/mgepdgee",
      url: "https://formspree.io/f/xwkwrkyr",
      // data: new FormData(form)
      data: formState
    })
    .then(r => { console.log("posted");
    handleServerResponse(true, "Thanks!", form);
  })
  .catch(r => {
        handleServerResponse(false, "failed", form);
      });
    };
    
    
    return (
      // <div onSubmit={form}>
      <form
      // onSubmit={handleOnSubmit}
      action="https://formspree.io/f/mgepdgee"
      method="POST"
      >
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
        <textarea type="text" name="description" className="input-fill col-sm-6" value={formState.description} onChange={handleChange}/>
        <div id="button-parent" class="offset-sm-6"><button id="button" class="" onClick={submitForm}>Submit</button></div>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
        </Row>
        </div>
      </form>
    // </div>
    )
    
    
    // export default class EnquiryForm extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.submitForm = this.submitForm.bind(this);
    //     this.state = {
    //       status: ""
    //     };
    //   }
    
  // function form(ev){
  // ev.preventDefault()
  //   const form = ev.target;
  //   const data = new FormData(form);
  //   // const data = new formState();
  //   const xhr = new XMLHttpRequest();
  //   xhr.open(form.method, form.action);
  //   xhr.setRequestHeader("Accept", "application/json");
  //   xhr.onreadystatechange = () => {
  //       if (xhr.readyState !== XMLHttpRequest.DONE) return;
  //     if (xhr.status === 200) {
  //       form.reset();
  //       // this.setState({ status: "SUCCESS" });
  //     } else {
  //       // this.setState({ status: "ERROR" });
  //     }
  //   };
  //   // xhr.send(data);
  //   xhr.send(data);
  // }
  }
