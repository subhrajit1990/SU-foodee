'use strict';

import React,{Fragment } from 'react';
import Blog from './blog';
import requestService from '../../../api/api';

const API_URL = "";
export default class BlogList extends React.Component{
	
	constructor(props){
		super(props);

		this.state = {
			blogs: [],
			per: 4,
  			page: 1,
  			totalPages: null
		};

		this.loadMore = this.loadMore.bind(this);

	}

	componentDidMount(){
		this.fetchBlogs()
	}


	fetchBlogs(){
		const { per, page, blogs } = this.state;
		// callling the fake url
		const URL = `https://reqres.in/api/unknown?page=${page}`;
		fetch(URL)
		.then(response => response.json())
		.then(res => {
			this.setState({
				blogs: [...blogs , ...res.data]
			})
		 });
	}
	
	loadMore(){
		this.setState(prevState => ({
				page : prevState.page + 1,
		}),this.fetchBlogs);
	}

	render(){
		return(
			<div> 
			<ul className="myBlogs">
				{(this.state.blogs).map( (pBlogs,index) => {
			        return <li key = {pBlogs.id} ><Blog {...pBlogs} /></li>
			    })}
			</ul>
			<a onClick={this.loadMore}> Load More</a>
			</div> 
		);
	}
	
}