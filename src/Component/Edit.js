import React ,{Component } from 'react';
import './style.css'
import Axios from 'axios';
import { render } from '@testing-library/react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
class Edit_Arbre extends Component{
    state={
      name:'',
      categori:"",
      prix:"",
      quantite:""
    }
componentDidMount(){
    Axios.get('http://localhost:4000/findArId/'+this.props.match.params.id).then(res=>this.setState({
        name:res.data.name,
        categori:res.data.categori,
        prix:res.data.prix,
        quantite:res.data.quantite
    }))
}
    
    EditArbre=(id,e)=>{
   e.preventDefault()
        let formdata=new FormData()
        formdata.append('name',this.state.name);
        formdata.append('categori',this.state.categori)
        formdata.append('prix',this.state.prix)
        formdata.append('quantite',this.state.quantite)
        console.log('edit')
        Axios.put("http://localhost:4000/EditArbre/"+id,{name:this.state.name,categori:this.state.categori,prix:this.state.prix,quantite:this.state.quantite}).then(res=>
this.props.history.push('/admin/arbre')
 ) }  
    render() {
        return (
    <MDBContainer>
    <MDBRow>
      <MDBCol md="6">
        <form>
          <p className="h4 text-center mb-4">Edit arbre</p>
          <label htmlFor="defaultFormContactNameEx" className="grey-text">
             name
          </label>
          <input type="text" id="defaultFormContactNameEx" value={this.state.name} className="form-control"
          placeholder='name arbre'onChange={(e)=>this.setState({name:e.target.value})} />
          <br />
        
          <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
            Ctegorie
          </label>
          <input type="text" id="defaultFormContactSubjectEx" value={this.state.categori} className="form-control" 
          placeholder='Categori'onChange={(e)=>this.setState({categori:e.target.value})}/>
          <br />
          <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
            prix
          </label>
          <input type="text" id="defaultFormContactSubjectEx"  value={this.state.prix}className="form-control" 
          placeholder='prix'onChange={(e)=>this.setState({prix:e.target.value})}/>
          <br />
          <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
            Quantite
          </label>
          <input type="text" id="defaultFormContactSubjectEx" value={this.state.quantite} className="form-control" 
          placeholder='quantite'onChange={(e)=>this.setState({quantite:e.target.value})}/>
          <br />
                    <MDBBtn onClick={(e)=>this.EditArbre(this.props.match.params.id,e)} color="warning" outline type="submit">
                      Edit
                        <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
              
                </form>
                
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        )
}
}

export default Edit_Arbre ;