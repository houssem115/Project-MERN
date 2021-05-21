import React from "react";
import { Component } from 'react'
import AnimationPage from './Head'
import Axios from 'axios';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
  } from "mdbreact";

class LogUser extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',

        }
        }

            Loginn=()=>{
      
              Axios.post('http://localhost:4000/Loginn',{email:this.state.email,password:this.state.password}).then(res=>{
                localStorage.setItem('token',res.data.token)
                alert(res.data.message)
                this.props.history.push('/client')
              
              })
              .catch(er=>alert('    Failed Not Existe!!'))
            
            
              } 
          
    render() {

      
          return (
              <div className='log'>
                  <AnimationPage/>
            <MDBContainer>
                  
              <MDBRow>
                <MDBCol md="6">
                  <MDBCard>
                    <MDBCardBody>
                      <MDBCardHeader className="form-header deep-blue-gradient rounded">
                        <h3 className="my-3">
                          <MDBIcon icon="lock" /> Login:
                        </h3>
                      </MDBCardHeader>
                      <form>
                        <div className="grey-text">
                          <MDBInput
                            label="Type your email"
                            icon="envelope"
                          
                            type="email"
                            
                            
                            onChange={(e)=>this.setState({email:e.target.value})}/>
                          <MDBInput
                            label="Type your password"
                            icon="lock"
                            
                            type="password"
                            
                            onChange={(e)=>this.setState({password:e.target.value})}/>
                        </div>
                  
                      <div className="text-center mt-4">
                        <MDBBtn
                          color="light-blue"
                          className="mb-3"
                        
                          onClick={this.Loginn}> 
                          Login
                        </MDBBtn>
                      </div>
                      </form>
                      <MDBModalFooter>
                        <div className="font-weight-light">
                        < a href='/Signinn'><p>Not a member? Sign Up</p></ a>
                          
                        </div>
                      </MDBModalFooter>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            </div>
          );
        };
                
}
export default LogUser;