import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import NavAdm from '../admin/NavAdm';

import Decojardin from '../Component/Decojardin'
import DecoMaison from '../Component/Decomaison';
import Edit_Arbre from '../Component/Edit';
import Maison from '../Component/EditDecom';
import Jardin from '../Component/Editjardin';
import Login from '../Component/Login';
import Sinuser from '../Component/Sinuser';
import Loginuser from '../Component/Loginuser'
import ContactPage from '../Component/Contact'


const ClientRoutes =({match}) =>{
    return(<div>
        <Route path={`${match.path}/admin`} component={NavAdm}/>
        <Route path={`${match.path}/Signinn`} component={Sinuser}/>
        <Route path={`${match.path}/Loginn`} component={Loginuser}/>
       
        
    
    
    </div> )
}
export default  withRouter (ClientRoutes);