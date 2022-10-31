import React from 'react';
import { Route, Router } from 'react-router-dom';

import { List } from './List'; 
import { AddEdit } from './AddEdit';
export { Users };

function Users({ match }) {
    const { path } = match;
    
    return (
        <div className="p-4">
            <div className="container">
                <Router>
                    <Route exact path={path} component={List} /> 
                    <Route path={`${path}/add`} component={AddEdit} />
                    <Route path={`${path}/edit/:id`} component={AddEdit} /> 
                </Router>
            </div>
        </div>
    );
}