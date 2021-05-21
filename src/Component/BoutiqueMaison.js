import React, { Component, useEffect, useState , props } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,
   MDBCardText, MDBRow, MDBCol,MDBIcon,MDBTooltip,MDBCardFooter, MDBContainer} from 'mdbreact';
import './style2.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Pannier from './Pannier';
import  Fade  from 'react-reveal/Fade';

const CardExample = (props)=> {

 const [cart,setCart]=useState([])
 const [categori,setCategori]=useState('')
 const [prix,setPrix]=useState('')
 const [sort,setSort]=useState('')
 const[search,setSearch]=useState('')

      
const handleSearch=(e)=>{
    e.preventDefault()
    setSearch(e.target.value)
}
 const sortProducts =(event)=>{

  setSort(event.target.value)


 }
 const filteredProducts =(event)=>{
setCategori(event.target.value)
 
  
  
 }
 
 useEffect(()=>{
  
  Axios.get("http://localhost:4000/findArbre").then(res=>setCart(res.data)).catch(er=>console.log(er))
   
 })
    return ( <div className="grid-container">
     
       <header >
         </header>
         <main>
      
      <div className="content">
        <div className="main">
          <div className="filter">
         <div className="filter-result">{cart.length} prduit</div> 
    <div className="filter-arbre">
          <select
            onChange={filteredProducts}
          >  <option value="">All</option>
            <option value="arbre">Arbre</option>
            <option value="plante">plante</option>
            <option value="deco-maison">Deco-maison</option>
            <option value="deco-jardin">Deco-jardin</option>
          </select>
          </div>
          <div className="filter-sort">
        <select
            onChange={sortProducts}
          >  <option value="">price</option>
            <option value="Highest">Highest </option>
            <option value="Lower">Lower</option>
            </select>
            
            <input  type="text" placeholder="Search" onInput={handleSearch}/>
        </div>
        </div>
        <Fade bottom cascade={true}>
        <ul className="products">
        
      {cart.filter(cart => cart.categori.toUpperCase().includes(categori.toUpperCase())).filter(el=>el.name.toUpperCase().includes(search.toUpperCase()))
      
      
        .slice().sort((a,b) =>(
         sort==="Highest"
         ?a.prix > b.prix
         ? 1
         :-1
         :sort==="Lower"
         ?
         a.prix <b.prix
         ? 1
         :-1
         : a._id> b._id 
         ? -1:
         1
        )) .map(el => 
    
           
             <li key={el._id}>
             <div className="product">
                  <a href={"#" + el._id}>
                   <img src={`/image/${el.ImageArbre}`}/>
                     <p>{el.name}</p>
                    <p>{el.categori}</p>
                    </a>
            <div className="product-price">
            
                <div>    {el.prix} dt   </div>
                
                  <button className="button" onClick={()=>props.ajout(el)}>ADD </button>
                   
                  </div>
                  </div>
                  </li>
             
            )} 
               </ul></Fade>
               </div> 
               
              <div className="sidebar" > 
              
              <Pannier/> 
              </div>
              </div> 
          </main>
       
        </div>
    
    )
  }

  const mapDispatchToProps=(dispatch)=>{
    return {
        ajout:(a)=>dispatch({type:"AJOUT",payload:a})

    }
}
 
export default connect(null,mapDispatchToProps)(CardExample);
