'use strict';

import React from 'react';
import {routes} from './constant';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Food from './Food';
import {Route,HashRouter,NavLink} from 'react-router-dom';

export default class Main extends React.Component {
    render() {
        return(
        	<HashRouter>
                <div className="routerClass">
                    { routes }
                </div>
        	</HashRouter>
        );
    } 
}

