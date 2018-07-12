
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
			    <div className="col-sm-8">
			      <h2>{pDetailsPrint.PName}</h2><br/>
			      <h4>{pDetailsPrint.PPrice}</h4><br/>
			     	<p>{pDetailsPrint.PPrice}</p><br/>
			     	<button className="m">{pDetailsPrint.PBuyBtn}</button>
			    </div>
			  </div>
			</div>

			
			 
		);
	}
}


