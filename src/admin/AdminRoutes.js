import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from '../Component/Admin';

import Arbre from '../Component/Arbre';
import Client from '../Component/Client';
import Decojardin from '../Component/Decojardin'
import DecoMaison from '../Component/Decomaison';
import Edit_Arbre from '../Component/Edit';
import Maison from '../Component/EditDecom';
import Jardin from '../Component/Editjardin';
import Login from '../Component/Login';
import SignIn from '../Component/Signin';


const AdminRoutes =({match}) =>{
    return(<div>
        
        
        <Switch>

        <Route exact path={`${match.path}/arbre`} component={Arbre}/>
        <Route path={`${match.path}/signin`} component={SignIn}/>
        <Route path={`${match.path}/login`} component={Login}/>
        <Route path={`${match.path}/admin`} component={Admin}/>
        <Route path={`${match.path}/client`} component={Client}/>
        <Route path={`${match.path}/jardin`} component={Decojardin}/>
        <Route path={`${match.path}/maison`} component={DecoMaison}/>
        
        <Route path={`${match.path}/arbre/edit/:id`} component={Edit_Arbre}/>
        <Route path={`${match.path}/maison/editmaison/:id`} component={Maison}/>
        <Route path={`${match.path}/jardin/editjardin/:id`} component={Jardin}/>
        
        </Switch>
        
            

    
    </div> )
}
export default AdminRoutes;