import React, { Component, useState } from "react";
import './style.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';
import AnimationPage from './Head'
import Axios from'axios';


class Sinuser extends Component {
  constructor(props){
        super(props);
        this.state={
          firstname:'',
          lastname:'',
          email:'',
          password:'',

        }
      }
      
    Signinn=()=>{

    Axios.post('http://localhost:4000/Signinn',{firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email,password:this.state.password}).then(res=>{
    alert(res.data.message)
     this.props.history.push('/Loginn')
  })
    .catch(er=>console.log(er))
    
    }
    render() {
  return (

    <div>
      <AnimationPage/>


      


<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" 
             onChange={(e)=>this .setState ({firstname:e.target.value})}/>
             <MDBInput label="Your last name" icon="user" group type="text" 
             onChange={(e)=>this .setState ({lastname:e.target.value})}/>
          
          <MDBInput label="your email" icon="exclamation-triangle"  type="text" onChange={(e)=>this .setState ({email:e.target.value})}/>
          <MDBInput label="Your password" icon="lock"  type="password" onChange={(e)=>this .setState ({password:e.target.value})}/>
        </div>
        <div className="text-center">
          <MDBBtn color="primary"  onClick={this.Signinn}>Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
     
  );
 }
}
export default Sinuser;