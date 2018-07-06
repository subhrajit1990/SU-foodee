'use strict';

import React from 'react';

export default class Home extends React.Component{
	render(){
		return(

			<div className="jumbotron text-center">
	  			<h1>Company</h1> 
	  			<p>Lorem Ipsum Lorem Ipsum</p> 
	  			<form>
		    		<div className="input-group">
		      			<input type="email" className="form-control" size="50" placeholder="Email Address" required />
		      			<div className="input-group-btn">
		       				 <button type="button" className="btn btn-danger">Subscribe</button>
		      			</div>
		    		</div>
	  			</form>
			</div>

		);
	}
}