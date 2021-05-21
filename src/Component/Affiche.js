import React ,{Component }from 'react';
import Cartimage from './'
import Axios from 'axios';

class BoutiqueJardin extends Component{
  constructor(props){
    super(props);
    this.state={cartimage:[],filtredCartimage:[ ]
        
    }
}

componentDidMount(){
        
  Axios.get("http://localhost:4000/findArbre").then(res=>res.json())
  .then(data=>this.setState({
    cartimage:data,
    filtredCartimage:data
  }))
}

  render(){
    
    return(
      <div className="container">
        <h1>boutique</h1>
      <div className="row">
        <div className="col-md-8">
          <Cartimage cartimage={this.state.filtredCartimage}handleAddtoCart={this.handleAddtoCart}/>
        </div>
      </div>
        </div>
    )
     
  }
        

export default BoutiqueJardin;