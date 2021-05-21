import React from "react";
import { Component } from 'react'
import Fade from "react-reveal/Fade"
import Axios from 'axios';

class Login extends Component {

  constructor(props){
        super(props);
        this.state={
          email:'',
          password:'',

        }
        
      }

            login=()=>{
      
      Axios.post('http://localhost:4000/login',{email:this.state.email,password:this.state.password}).then(res=>{
      localStorage.setItem('token',res.data.token)
      alert(res.data.message)
      this.props.history.push('/admin')
    
    })
    .catch(er=>alert('failed .Not a Member!!'))
    
  
  
    } 

    render() {
          return(
            
          <div className="inscrit">
            <Fade button cascade={true}>
              <h1>Login Admin</h1>
              E-mail
          <input className="w3-input" type ='text' placeholder='email' onChange={(e)=>this .setState ({email:e.target.value})}/>
              Password
          <input className="w3-input" type='password' placeholder='password' onChange={(e)=>this .setState ({password:e.target.value})}/>
          
          <button onClick={this.login}>Login</button>
          < a href='/admin/signin'><h6>Not a member? Sign Up</h6></ a>
          </Fade>
        </div>   

                );
            }
}
export default Login;