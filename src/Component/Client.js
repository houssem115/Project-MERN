import React ,{Component } from 'react';
import './style.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import Axios from 'axios';
import { Link } from 'react-router-dom';
class Client extends Component{
    constructor(props){
        super(props);
        this.state={
          firstname:"",
          lastname:"",
            password:"",
            email:"",
            client:[]
            
        }
    }
    
    
    componentDidMount(){
              
      const token=localStorage.getItem('token')
      if(token){  
        Axios.get("http://localhost:4000/findUsers").then(res=>this.setState({
            client:res.data
        })).catch(er=>console.log(er))
      }else
      {this.props.history.push('/admin/login')}
      }


    
      componentDidUpdate(prevprops,prevstate){
        if(prevstate.client.length!==this.state.client.length){
          Axios.get("http://localhost:4000/edit").then(res=>this.setState({
            client:res.data
        })).catch(er=>console.log(er))
      
        
        Axios.get("http://localhost:4000/finUsers").then(res=>this.setState({
            client:res.data
        })).catch(er=>console.log(er))
      }
      }

      
        
      delete=(id)=>{

        Axios.delete("http://localhost:4000/DeletUsers/"+id)
      
      }
      render() {
        
        return ( 
        
    
          <div>
                  
              <h1>Client</h1>
              <table id="customers">
              <tr>
              <th> firstname</th>
              <th> lastname</th>
              <th> email</th>
            
            </tr>
              {this.state.client.map(el=>
              
            <tr>
              <td>{el.firstname}</td>
              <td>{el.lastname}</td>
              
              <td>{el. email}</td>
              
              
            </tr>
              )}
                </table>
                </div>
            
            );
        
    }
    
            
    }
    export default Client;
      
    