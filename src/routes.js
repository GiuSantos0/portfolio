import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}
