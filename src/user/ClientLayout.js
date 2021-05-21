import React, { useState } from 'react'
import {MDBContainer } from "mdbreact";
import  CardExample from '../Component/BoutiqueMaison'
import AnimationPage from '../Component/Head';
import NavbarPage from '../Component/Navbar';
import CarouselPage from'../Component/Carousell';
import FooterPage from '../Component/Footer';

import '../Component/style.css'
import { withRouter } from 'react-router-dom';

const ClientLayout = (props) =>{
    const [cart,setCart]=useState([])
    const[sort,setSort]=useState('') 
    const[categori,setCategori]=useState('')

    
    return(
        <div>
              
        <AnimationPage/>
        <NavbarPage/>
        <CarouselPage/>
    <CardExample cart={setCart} />
    
        {props.children}

        <FooterPage/>
      
                </div> 
    )
}
export default  withRouter(ClientLayout);