import React, { Component } from 'react';
import './App.css';
import {NavLink, Route} from 'react-router-dom';
import ProductsItem from './ProductsItem';
class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        slug: 'iphone10',
        name: 'Iphone 10',
        price: 1000
      },
      {
        id: 2,
        slug: 'iphone11',
        name: 'Iphone 11',
        price: 2000
      },
      {
        id: 3,
        slug: 'iphone12',
        name: 'Iphone 12',
        price: 3000
      }
    ];
    var {match} = this.props;
    var url = match.url;
    var result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}`} key={index}>
          <li className="list-group-item">
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      );
    });
    return (
      <div className="container">
        <h1>Danh sách sản phẩm</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul className="list-group">
              {result}
            </ul>
          </div>
        </div>

        
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {/* /:slug: là lấy slug -> còn muốn lấy name thì :name */}
            <Route path="/products/:slug" component={ProductsItem}/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Products;
