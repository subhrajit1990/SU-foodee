import React from 'react';


export default class ProductPage extends React.Component{
	

	constructor(props) {
	    super(props);
	    this.state = {
	      pDetails: {}
	    };
  	 
  	} 

  	componentDidMount(){
  		console.log("Inside did mount "+this.props.location.productDetailsParams);

		if(Object.keys(this.props.location.productDetailsParams).length > 0){
		  this.setState({
		  	pDetails : this.props.location.productDetailsParams
		  });
		}
  	}


	render() {
		const pDetailsPrint = this.state.pDetails;
		console.log(JSON.stringify(pDetailsPrint)+"DATA "+JSON.stringify(this.props.location.productDetailsParams));
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
