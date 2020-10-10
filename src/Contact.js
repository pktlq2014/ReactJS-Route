import React, { Component } from 'react';
import './App.css';
import {Prompt} from 'react-router-dom';
class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      isChecked : false
    }
  }
  allowMovePage = (status) =>{
    this.setState({
      isChecked : status
    }); 
  }
  render() {
    var {isChecked} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div>Đây là liên hệ</div>
          <button type="button" 
          onClick={() => this.allowMovePage(false)}
          className="btn btn-danger">Cho phép</button> <br />
          <button type="button" 
          onClick={() => this.allowMovePage(true)}
          className="btn btn-primary">Không cho phép</button>
          <Prompt
            when={isChecked}
            message={localtion => (`Bạn chắc chắn muốn đi đến ${localtion.pathname}`)}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
