import React from "react";
import { BrowserRouter as Router,Link ,Route, withRouter} from "react-router-dom";
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import SearchPage from './Recherche' 
import {MDBAnimation} from "mdbreact";
import ContactPage from './Contact'
import { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
 deconnection=()=>{
  localStorage.removeItem('token')}
render() {
  return (
    
      <MDBNavbar color="##00C851 green" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Dziri Garden</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to='/client/home'>Home</MDBNavLink>
            </MDBNavItem>
           
            <MDBNavItem>
            <div className="sh">< a href='/contact'><h6>contact</h6></ a></div>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Jardin</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
               <div className='box'>
                 
                 
                  <div>
                  <MDBDropdownItem href='./Arbust'>Arbustes</MDBDropdownItem>
                  <MDBDropdownItem href='./Palmiers'>Palmiers</MDBDropdownItem>
                  <MDBDropdownItem href='./Bordur'>Plante de bordure</MDBDropdownItem>
                  <MDBDropdownItem href='./Grimpantes'>Plante grimpantes</MDBDropdownItem>
                  </div>
                  <img  className ="zimageee" src="/jardin.jpg" />
                  </div>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Maison</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                <div className='box'>
                  <div>
                  <MDBDropdownItem href="./Pinter">Plante d'intérieur</MDBDropdownItem>
                  <MDBDropdownItem href="./Pots">Pots d'entérieur</MDBDropdownItem>
                  <MDBDropdownItem href='./Cache'>Caches-pots</MDBDropdownItem>
                  
                  </div>
                  <div>
                  <img  className ="zimagee" src="maison.jpg" />
                  </div>
                  </div>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
         <div className='con'><a href='/Loginn'><h6>Connection</h6></a></div> 
   <MDBIcon icon="power-off" className='decon' onClick={this.deconnection}/>
            <MDBNavItem>
      
               <div className="ad"><p>< a href='/admin'>Admin</ a></p></div> 
              
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      
    );
  }
}

export default withRouter (NavbarPage);



