
'use strict';

import React from 'react';
import requestService from '../api/api';
import {Route,HashRouter,Link} from 'react-router-dom';
const API = '/staticData/productList.json';
export default class ProductsList extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      productCategories : this.props.match.params.productListPath,
      productList: [],
    };
    this.productsListResponse = this.productsListResponse.bind(this);
  } 
  componentDidMount(){
    requestService(API)
    .then(response => response.json())
    .then(this.productsListResponse);       
  }

  productsListResponse(reponse){

    const allowed = [this.props.match.params.productListPath];
    var filtered = Object.keys(reponse)
              .filter(key => allowed.includes(key))
              .reduce((obj, key) => {
                obj[key] = reponse[key];
                return obj;
              }, {});
          filtered = filtered[this.props.match.params.productListPath];
    this.setState({
      productList:filtered
    });
  }

  render() {
      const productListSection = (this.state.productList).map((products, i) => {
        let productDetails = {
            "PName": products["product-name"],
            "PImage": products["product-image-url"],
            "PBuyBtn": products["product-cta-text"],
            "PPrice": products["product-price"],
            "PCategory": products["header-top-left-text"]
        };
          return(
            <div className="col-sm-4" key={i}>
              <div className="thumbnail">
                  <img src={products["product-image-url"]} alt="pListImg" width="400" height="300"/>
                 <p>{products["product-name"]}</p>

                 <Link to={{ pathname: `/ProductPage`, productDetailsParams: productDetails }}>Read More...</Link>
         
              </div>
            </div>
          );
      });
    return (
      <div id="productList" className="container-fluid text-center">
        <div className="row text-center slideanim slide">
          {productListSection}
        </div>
        
      </div> 

    );
  }
}
