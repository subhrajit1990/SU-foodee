'use strict';

import React from 'react';
import {routes} from './constant';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Food from './Food';
import {Route,HashRouter,NavLink} from 'react-router-dom';

export default class Header extends React.Component{
	render(){
		return(

			<header>
				 <HashRouter>   
				    <nav className="navbar navbar-default navbar-fixed-top">
	                    <div className="container">
	                        <div className="navbar-header">
	                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	                                <span className="icon-bar"></span>
	                                <span className="icon-bar"></span>
	                                <span className="icon-bar"></span>                        
	                            </button>
	                            <a className="navbar-brand" href="#Home">Logo</a>
	                        </div>
	                        <div className="collapse navbar-collapse" id="myNavbar">
	                            <ul className="nav navbar-nav navbar-right">
	                                <li><NavLink to="/">Food</NavLink></li>
	                                 <li><NavLink to="/Home">Home</NavLink></li>
	                                <li><NavLink to="/About">About Us</NavLink></li>
	                                <li><NavLink to="/Contact">Contact</NavLink></li>
	                            </ul>
	                            
	                        </div>
	                    </div>
                	</nav>
				</HashRouter>
			</header>
		);
	}

}