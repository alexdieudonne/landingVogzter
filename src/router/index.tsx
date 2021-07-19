
import React from 'react'
import { BrowserRouter as Routr, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CGI from '../pages/Policies & CGI/CGI';
import Policies from '../pages/Policies & CGI/Policies';
import Support from '../pages/Policies & CGI/Support';


function Router() {
    return (
        <Routr >
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/policies' component={Policies} />
                <Route exact path='/cgi' component={CGI} />
                <Route exact path='/support' component={Support} />
            </Switch>

        </Routr>
    )
}

export default Router
