import React ,{Component } from 'react';
import './style.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import Axios from 'axios';
import { Link } from 'react-router-dom';
class Admin extends Component{
    constructor(props){
        super(props);
        this.state={
            lastname:"",
            email:"",
            password:"",
            admin:[]
            
        }
    }
    
    
    componentDidMount(){
              
      const token=localStorage.getItem('token')
      if(token){
       
       Axios.get("http://localhost:4000/findAdmin").then(res=>this.setState({
           admin:res.data
       })).catch(er=>console.log(er))
      }else
      {this.props.history.push('/admin/login')}
      }


    
      componentDidUpdate(prevprops,prevstate){
        if(prevstate.admin.length!==this.state.admin.length){
          Axios.get("http://localhost:4000/edit").then(res=>this.setState({
            admin:res.data
        })).catch(er=>console.log(er))
      
        
        Axios.get("http://localhost:4000/findAdmin").then(res=>this.setState({
            admin:res.data
        })).catch(er=>console.log(er))
      }
      }

      
        
      delete=(id)=>{

        Axios.delete("http://localhost:4000/DeletAdmin/"+id)
      
      }
      render() {
        
        return ( 
                <div><h1>Admin</h1>  
              
              <table id="customers">
              <tr>
              <th>name</th>
              <th> email</th>
              
            </tr>
              {this.state.admin.map(el=>
              
            <tr>
              
              <td>{el.lastname}</td>
              <td>{el. email}</td>
            
            
            </tr>
              )}
                </table>
                </div> 
            
            
            );
        
    }
    
            
    }
    export default Admin;
      
    