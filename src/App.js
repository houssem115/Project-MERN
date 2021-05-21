import React from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";
import './App.css';
import AdminRoutes from './admin/AdminRoutes';
import AdminLayout from './admin/AdminLayout';
import ClientLayout from './user/ClientLayout';
import ClientRoutes from './user/ClientRoutes';
import {DecUp} from './Component/action';
import {connect} from 'react-redux';
import Pannier from './Component/Pannier';
import Switch from 'react-bootstrap/esm/Switch';
import NavAdm from './admin/NavAdm';
import ContactPage from '../src/Component/Contact'
import Sinuser from '../src/Component/Sinuser'
import  LogUser from '../src/Component/Loginuser'


function App(props) {
  
  return (
    
    <Router>
      <Switch>
      
      <Route path='/Signinn' component={Sinuser}/>
      <Route path='/Loginn' component={ LogUser}/>
      <Route path='/contact' component={ContactPage}/>
      <Route path ='/admin' render ={(props)=><AdminLayout {...props}><AdminRoutes {...props}/></AdminLayout>}/>
      <Route  path ='/client' ><ClientLayout><ClientRoutes {...props}/></ClientLayout></Route>
      </Switch>
    </Router>

  )
}
const mapStateToProps = state => {
  return {
    count: state.count
  }
}
const mapDispachToProps= dispatch =>{
  return {
    decrement:() => dispatch(DecUp()),
    increment:() => dispatch({type:'INCREMENT'})
  }
}
export default connect(
mapStateToProps,
mapDispachToProps
)(App)


