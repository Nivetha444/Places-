import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import App from './App';
import UserId from './UserId';
import Invalid from './InvalidUrl'
import Home from './Home';

const Routing = () =>{
    return(
        <div>
<Switch>
        <Route exact path={"/"} component={Home}/>
            <Route exact path={"/places"} component={App}/>
            <Route path={"/place/:id"} component={UserId}/>
            <Route component={Invalid}/>
            </Switch>
        </div>
    )
}

export default Routing;
