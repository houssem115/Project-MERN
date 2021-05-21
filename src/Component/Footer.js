import React from "react";
import './style.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";



const FooterPage = () => {
  
  return (
    
    <MDBFooter color="green" className="font-small pt-4 mt-4" 
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">CONTACTEZ NOUS</h5>
            <p>
                houssem_sf2010@live.fr

            </p>
            <p>WWW.GOMYCODE.COM</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">LIEN UTILE</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">PANIER</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">CONTACT</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">PROMOTION</a>
              </li>
              
              
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.gomycode.com"> Dziri Houssem </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;