'use strict';

import React from 'react';
import requestService from '../api/api';


export default class Contact extends React.Component{

	
	render(){
		return(		
			<div id="contact" className="container-fluid">
			  <h2 className="text-center">CONTACT</h2>
			  <div className="row">
			    <div className="col-sm-5">
			      <p>Contact us and we'll get back to you within 24 hours.</p>
			      <p><span className="glyphicon"></span> India</p>
			      <p><span className="glyphicon"></span>0000000000</p>
			      <p><span className="glyphicon"></span> id@myDomain.com</p>
			    </div>
			    <div className="col-sm-7 slideanim slide">
			      <div className="row">
			        <div className="col-sm-6 form-group">
			          <input className="form-control" id="name" name="name" placeholder="Name" type="text" required="" />
			        </div>
			        <div className="col-sm-6 form-group">
			          <input className="form-control" id="email" name="email" placeholder="Email" type="email" required="" />
			        </div>
			      </div>
			      <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
			      <div className="row">
			        <div className="col-sm-12 form-group">
			          <button className="btn btn-default pull-right" type="submit">Send</button>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		);
	}

}
