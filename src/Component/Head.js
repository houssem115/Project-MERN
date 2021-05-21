import React from "react";
import './style.css'
import {Component} from "react"
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import {MDBContainer , MDBRow,MDBCol} from "mdbreact"
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import {MDBAnimation} from "mdbreact";

const AnimationPage = () => {

  return (<div className='im'>
       <div>
      <img  className ="zimage" src="/gazons.jpg" />
      <MDBAnimation type="swing" infinite>
          <img className="img-fluid" alt="j" src="/logo.jpg" />
         
      </MDBAnimation>
      
    </div>
    <div>
    <h2>Le Plus  grande Choix Au plus Bas prix
    
    <audio  className='odi' controls autoPlay>

  <source   src="mp3.mp3" type="audio/mpeg"/>
  
</audio></h2> 

</div>
      </div>
  );
  
 
  
};


export default  AnimationPage;



