
'use strict';

import React from 'react';
import viewRecentlyStorage from '../api/localStorage';

export default class ProductPage extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      pDetails: {}
	    };
		this.viewRecently(this.props.location.productDetailsParams)
  	} 

  	componentDidMount(){
		if(Object.keys(this.props.location.productDetailsParams).length > 0){
		  this.setState({
		  	pDetails : this.props.location.productDetailsParams
		  });
		}
  	}

	viewRecently(res){
		viewRecentlyStorage("viewRecentlyProducts",res,"PName");
	};

	render() {
		const pDetailsPrint = this.state.pDetails;
		return (

			<div className="container-fluid bg-grey">
			  <div className="row">
			    <div className="col-sm-4">
			      	<img className="printing" src={pDetailsPrint.PImage} alt="pDetailsImg" width="400" height="300" />

			    </div>
			    <div className="col-sm-8 panel-default text-center">
			    	<div className="panel-heading">
          				<h1>{pDetailsPrint.PName}</h1>
        			</div>
			      	<h3>{pDetailsPrint.PPrice}</h3><br/>
			     	<p>{pDetailsPrint.PPrice}</p><br/>
			     	<button className="btn btn-lg">{pDetailsPrint.PBuyBtn}</button>
			    </div>
			  </div>
			</div>

			
			 
		);
	}
}


