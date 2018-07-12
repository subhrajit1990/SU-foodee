'use strict';

import React from 'react';
const Blog = (props ) => <div className="blogName">
									
			<img src="/w3images/workshop.jpg" alt="Image" className="w3-left w3-margin-right"/>
									<span>{props.name}</span><br/>
									<span>{props.color}</span><br/>
									<span>{props.year}</span><br/>
									<span>{props.pantone_value}</span><br/>
									<span className="w3-large">Lorem</span><br/>
								</div> 


export default Blog;


