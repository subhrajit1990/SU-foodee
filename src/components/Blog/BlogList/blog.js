'use strict';

import React from 'react';
const Blog = (props ) => <div className="blogName">

									<div>{props.name}</div>
									<div>{props.year}</div>
									<div>{props.color}</div>
									<div>{props.pantone_value}</div>
								</div> 


export default Blog;