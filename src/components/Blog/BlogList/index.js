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
			<Fragment> 

				<div className="container-fluid">
				    <div className="w3-container w3-padding">
				      <h4>Popular Posts</h4>
				    </div>
				 	<ul className="col-sm-8">
				 		{(this.state.blogs).map( (pBlogs,index) => {
					        return <li className="w3-padding-16" key = {pBlogs.id} ><Blog {...pBlogs} /></li>
					    })}
	    			</ul>
				</div>

				<a onClick={this.loadMore}> Load More</a>
			</Fragment> 
		);
	}
	
}