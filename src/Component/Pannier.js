import React, { useEffect, useState } from 'react';
import './style.css'
import { connect } from 'react-redux';
import {removeFromCart} from"./action"
import Fade from "react-reveal/Fade"
import { Link } from 'react-router-dom';
const Pannier = (props) => { 



    
    return (
        
        <div className="cart">
             <div>
                {props.pannier.length === 0 ?(
                    <div className='cart cart-header'>Your <i class="fas fa-cart-plus"></i> is empty </div>
                ): (
                <div className='cart cart-headerr'> You have {props.pannier.length} in the <i class="fas fa-cart-plus"></i></div>
                )
                }
            </div>
            <Fade left cascade>
             <ul className="cart-items">
    
        {props.pannier.map(el=>(
    
        <li key={el._id}>
       
            <div>
        <img src={`/image/${el.ImageArbre}`}/>
        </div>
        <div>
          {el.name}  
        </div>
    <div className="rigth">
        {el.prix} dt {el.count} {" "}

      <button className="button" onClick={()=>props.removeFromCart(el._id)}>
Delete
      </button>
</div>
      </li>
          ))}
          
         </ul>
         </Fade> 
         <div className="pass">
         {props .pannier.length!==0 &&(
              <div className="total">
              <div className='total'>
                  Total   :{ "  " }
         {(props.pannier.reduce((a, c) => a + c.prix  ,0))}
             
         <button className="buttonn" >Pay</button>
         
              </div>
          </div> 
         ) }
       </div> 

      
    </div>
        )
        }
const mapDispatchToProps = (dispatch)=>{
            return{
removeFromCart:(index) => dispatch(removeFromCart(index)),
            }
        }
const mapStateToProps=(state)=>{

return {
    

     pannier:state.pannier
    
}
}
export default connect(mapStateToProps,mapDispatchToProps) (Pannier);