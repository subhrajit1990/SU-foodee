'use strict';

import React from 'react';

export default class About extends React.Component{
	render(){
		return(
			<div id="about" className="container-fluid">
				<div className="row">
					<div className="col-sm-8">
			      		<h2>About Company Page</h2><br/>
			     		<h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4><br/>
			      		<br/><button className="btn btn-default btn-lg">Get in Touch</button>
			    	</div>
			    	<div className="col-sm-4">
			      		<span className="glyphicon glyphicon-signal logo"></span>
			    	</div>
				</div>
			</div>
		);
	}
}


