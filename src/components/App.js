import React from 'react';
import {Switch,Route} from 'react-router-dom';
import { Nav } from './Nav';
import {Users} from './users';

export function App(){

    return(
        <div id="app">
            <h2>Redux Duck Setup</h2>
            <Nav/>
            <Switch>
                <Route path='/users' component ={Users}/>
            </Switch>
        </div>
    )
}