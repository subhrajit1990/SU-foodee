'use strict';

import React from 'react';

export default class Footer extends React.Component{
	render(){
		return(

			<footer className="container-fluid text-center">
  				<a href="#myPage" title="To Top" >
    				<span className="glyphicon glyphicon-chevron-up"></span>
  				</a>
  				<p>React and BootStrap <a href="#" title="Subhrajit" >Subhrajit</a></p>
			</footer>
		);
	}

}