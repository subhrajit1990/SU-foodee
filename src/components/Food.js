'use strict';

import React from 'react';
import requestService from '../api/api';
import {Route,HashRouter,NavLink} from 'react-router-dom';

const API = '/staticData/dynamicMenu.json';
export default class Food extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			menuCategories: [],
		};

		this.menuCategoriesResponse = this.menuCategoriesResponse.bind(this);
	}
	componentDidMount(){
		let menuCategories =[];
	 	requestService(API)
      	.then(response => response.json())
     	.then(this.menuCategoriesResponse);
    }
	menuCategoriesResponse(menuCategories){
		const resp = menuCategories.menu;
		this.setState({
        	menuCategories : resp
      });
	}
	render(){
		return(
			<div id="services" className="container-fluid text-center">
				<h2>FOODEE</h2>
				<br/>
				 <div className="row">
				 	<HashRouter>
	        			<div className="col-sm-12"> 
	        				<ul className="nav navbar-nav navbar-center">
	        					{(this.state.menuCategories).map( (menus,index) => {
	        						return <li key = {index} ><NavLink  key = {index} to={`ProductsList/${menus.id}`} ><h4>{menus.title}</h4></NavLink></li>
	        					})}
	        				</ul>
	        			</div>
        			</HashRouter>
				 </div>
			</div>			
		);
	}
}
