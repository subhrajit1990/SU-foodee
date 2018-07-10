'use strict';

import React from 'react';
import Blog from './blog';
import requestService from '../../../api/api';

const API_URL = "";
export default class BlogList extends React.Component{
	
	constructor(props){
		super(props);

		this.state = {
			blogs: []
		};

	}

	componentDidMount(){
		this.fetchBlogs()
	}


	fetchBlogs(){
		requestService(API_URL)
		.then(response => response.json())
		.then(res => this.setState({
			blogs: res.blogs
		}));
	}
	
	

	render(){
		return(
			<div>Lorem Ipsum</div>
		);
	}
	
}