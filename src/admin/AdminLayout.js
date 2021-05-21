import React from 'react';
import NavAdm from './NavAdm';

import { Route } from 'react-router-dom';

const AdminLayout = (props) =>
{
    return(<div>
        
        <Route path={`${props.match.path}`} render={()=><NavAdm {...props}/>}/>
        <div>{props.children}</div>
        
    </div>
    )
}
export default AdminLayout;