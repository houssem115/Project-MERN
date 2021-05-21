import React ,{Component } from 'react';
import './style.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import Axios from 'axios';
import { Link } from 'react-router-dom';
class DecoMaison extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            ImageDecomaison:"",
            categori:"",
            prix:'',
            quantite:'',
            maison:[]
            
        }
    }
    
    componentDidMount(){
      const token=localStorage.getItem('token')
      if(token){
        Axios.get("http://localhost:4000/findDem").then(res=>this.setState({
            maison:res.data
       })).catch(er=>console.log(er))
      }else 
      {this.props.history.push('/admin/login')}
    
    }


    componentDidUpdate(prevprops,prevstate){
      if(prevstate.maison!==this.state.maison){
    
          if(prevstate.maison.length!==this.state.maison.length){
            Axios.get("http://localhost:4000/editmaison").then(res=>this.setState({
              maison:res.data
          })).catch(er=>console.log(er))
        
      Axios.get("http://localhost:4000/findDecomai").then(res=>this.setState({
          maison:res.data
      })).catch(er=>console.log(er))
    }
  }
}

delete=(id) => {
    Axios.delete("http://localhost:4000/DeletDem/"+id)
    //.then(res=>this.setState({
        //    maison:res.data
        //})).catch(er=>console.log(er))
        //this.props.history.push('/admin/login')
      }

    

Add_decorm=(e)=>{
    e.preventDefault()
    let file=this.state.ImageDecomaison;
    let formdata=new FormData()
    formdata.append('name',this.state.name);
    formdata.append('ImageDecomaison',file);
    formdata.append('categori',this.state.categori)
    formdata.append('prix',this.state.prix)
    formdata.append('quantite',this.state.quantite)
    Axios.post("http://localhost:4000/CreateDecMaison",formdata).then(res=>{this.setState({
    maison:[...this.state.maison,res.data]
    

}) ;alert('Decor Added')}).catch(er=>console.log(er))
}

deconnection=()=>{
    localStorage.removeItem('token')
}
render() {
    return ( 
    
<MDBContainer>
<div className='titrear'>
<p className="h4 text-center mb-4">Add Deco maison</p></div>
      <div className='arbreaffich'>
      <div className='formarbre'>
      <form>
        
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
            name
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control"
        placeholder='name decor maison'onChange={(e)=>this.setState({name:e.target.value})} />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          image
        </label>
        <input type="file" id="defaultFormContactEmailEx" className="form-control"
        onChange={(e)=>this.setState({ImageDecomaison:e.target.files[0] })} />
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Ctegorie
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" 
        placeholder='Categori'onChange={(e)=>this.setState({categori:e.target.value})}/>
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          prix
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" 
        placeholder='prix'onChange={(e)=>this.setState({prix:e.target.value})}/>
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Quantite
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" 
        placeholder='quantite'onChange={(e)=>this.setState({quantite:e.target.value})}/>
        <br />
                  <MDBBtn onClick={this.Add_decorm} color="warning" outline type="submit">
                    Add
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
            
              </form>
              </div>
              <div className='affichar'>
                DecorMaison
          <table border='1'>
          <tr>
          <th>nom</th>
          <th>image</th>
          <th>categori</th>
          <th>prix</th>
          <th>quantite</th>
          <th>action</th>
        </tr>
          {this.state.maison.map(el=>
          
        <tr>
          <td>{el.name}</td>
          <td><img src={`/image/${el.ImageDecomaison}`} width="100px" height="100px"/></td>
          <td>{el.categori}</td>
          <td>{el.prix}</td>
          <td>{el.quantite}</td>
            
           <td><Link to ={`${this.props.match.url}/editm/${el._id}`}><MDBIcon  far icon="edit" />Edit</Link>
            <button className="bt" onClick={()=>this.delete(el._id)}>Delete </button></td>
            
        </tr>
          )}
           </table>
           </div>
           </div>
        </MDBContainer>
        
        );
    
}

        
}
export default DecoMaison ;
  