import React, { Component, useState } from "react";
import './style.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';
import Fade from "react-reveal/Fade"
import Axios from'axios';

class SignIn extends Component {
  constructor(props){
        super(props);
        this.state={
          lastname:'',
          email:'',
          password:'',

        }
      }
      
    signin=()=>{
    Axios.post('http://localhost:4000/signin',{lastname:this.state.lastname,email:this.state.email,password:this.state.password}).then(res=>{
    alert(res.data.message)
    this.props.history.push('/admin/login')
  })
    .catch(er=>console.log(er))

   }
   render() {
  return (

    <div className="inscrit">
       <Fade left cascade>
      <p>Subscribe Admin</p>
      <div >
      
      Your Name:
      <input className="w3-input w3-animate-input"type ='text' placeholder='lastname' onChange={(e)=>this .setState ({lastname:e.target.value})}/>
      </div>
      <div>
      Your Email:
    <input className="w3-input w3-animate-input" type ='text' placeholder='email' onChange={(e)=>this .setState ({email:e.target.value})}/>
    </div>
    <div>
    Your Password: 
    <input className="w3-input w3-animate-input" type='password' placeholder='password' onChange={(e)=>this .setState ({password:e.target.value})}/>
    </div>
    <div className="btnins">
    <button onClick={this.signin}>singin</button>
    </div>
    </Fade>
  </div> 
  );
 }
}
export default SignIn;