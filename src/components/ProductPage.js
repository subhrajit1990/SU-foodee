
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
			<div>
				<div className="printing">{pDetailsPrint.PName}</div>
				<img className="printing" src={pDetailsPrint.PImage} alt="pDetailsImg" width="400" height="300" />
				<div className="printing">{pDetailsPrint.PPrice}</div>
				<div className="printing">{pDetailsPrint.PCategory}</div>
				<button className="m">{pDetailsPrint.PBuyBtn}</button>
			</div>
			 
		);
	}
}
