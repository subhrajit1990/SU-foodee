'use strict';

import React,{Fragment}  from 'react';
import requestService from '../api/api';
import {Route,HashRouter,NavLink} from 'react-router-dom';

const API = '/staticData/dynamicMenu.json';
export default class Food extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			menuCategories: [],
			recentViews: []
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
		const recentViewData = JSON.parse(localStorage.getItem("viewRecentlyProducts") || "[]");

		this.setState({
        	menuCategories : resp,
        	recentViews : recentViewData
      });
	};

	render(){
		//console.log("Data neewd recent "+JSON.stringify(this.state.recentViews));
		var viewRecentDataPaintWithData = "";
		if((this.state.recentViews).length > 0){
			var viewRecentDataPaint = (this.state.recentViews);
			if(viewRecentDataPaint.length > 0){
				viewRecentDataPaintWithData = viewRecentDataPaint.map((viewProducts,i) => {
					return(	
						<div className="col-sm-2" key={i}>
							<div className="thumbnail">
								<img src={viewProducts["PImage"]} alt="pListImg" width="40" height="30"/>
								<p>{viewProducts["PName"]}</p>
								<p>{viewProducts["PPrice"]}</p>
							</div>
						</div>
					);
				});
			}
		}
		return(
			<Fragment>
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
				<div>	
					{viewRecentDataPaintWithData}	
				</div>
			</Fragment>
		);
	}
}
