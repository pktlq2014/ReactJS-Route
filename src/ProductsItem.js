import React, { Component } from 'react';
import './App.css';

class ProductsItem extends Component {
  render(){
    var {match} = this.props;
    // products gửi qua slug thì .slug còn nếu nó gửi qua name thì .name
    var slug = match.params.slug; 
    return (
    <h1>Đây là chi tiết sản phẩm : {slug}</h1>
    );
  }
}

export default ProductsItem;
