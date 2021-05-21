import React from 'react';
import { BrowserRouter as Router ,Link} from 'react-router-dom';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon
} from 'mdbreact';
// import './CallToActionIntro.css';

class NavAdm extends React.Component {
  deconnection=()=>{
    localStorage.removeItem('token')}

  render() {
    
    
    return (
     
        
      <MDBContainer>
            <MDBNavbar
              color='green'
              
            
              expand='md'
             
              
            >
              
                <MDBNavbarBrand>
                  <div className='adminst'>
                  <strong>Admin</strong>
                  </div>
                </MDBNavbarBrand>
                <MDBNavbarToggler />
                <MDBCollapse  navbar>
                  <MDBNavbarNav left>
                  <div className='pardmin'>
                    <MDBNavItem active>
                      
                      <MDBNavLink to={`${this.props.match.url}/arbre`}><p>Arbre</p></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to={`${this.props.match.url}/jardin`}><p>Decorjardin</p></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to={`${this.props.match.url}/maison`}><p>Decor maison</p></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavLink to={`${this.props.match.url}/admin`}><p>Admins</p></MDBNavLink>
                    <MDBNavLink to={`${this.props.match.url}/client`}><p>Clients</p></MDBNavLink>
                    
                    <MDBNavItem>
                      <MDBNavLink to={`${this.props.match.url}/signin`}><p>signin</p></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to={`${this.props.match.url}/login`}><p>login</p></MDBNavLink>
                     
                    </MDBNavItem>
                    </div>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                  
                    
                      <div className='esclient'>
                      <a href='/client'><p>Espace Client</p></ a>
                      
                      </div>
                       <div>
                         
                        /
                         <MDBIcon icon="power-off" className='deconn' onClick={this.deconnection}/>
                         </div>
                      
                   
                  </MDBNavbarNav>
                </MDBCollapse>
              
            </MDBNavbar>
         
          
            </MDBContainer>
     
    );
  }
}

export default NavAdm;