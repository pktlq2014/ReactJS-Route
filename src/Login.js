import React, { Component } from 'react';
import './App.css';
import {Redirect} from 'react-router-dom';
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      txtUsername : '',
      txtPassword : ''
    };
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    });
  }
  onSubmit = (event) => {
  //  event.preventDefault();
    var {txtUsername, txtPassword} = this.state;
    if(txtPassword === 'admin' && txtUsername === 'admin'){
      localStorage.setItem('user', JSON.stringify({
        username : txtUsername,
        password : txtPassword
      }));
    }
  }
  render() {
    var {txtUsername, txtPassword} = this.state;
    var loggedInUser = localStorage.getItem('user');
    if(loggedInUser !== null){
      var {location} = this.props;
      return <Redirect 
        to={{
          pathname: '/products',
          state : {
            from : location
          }
        }}
        />
    }
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <form onSubmit={this.onSubmit}>
            <legend>Đăng nhập</legend>
            <div className="form-group">
              <label>Username</label>
              <input type="text"  
              value={txtUsername}
              onChange={this.onChange}
              className="form-control" id="" name="txtUsername" placeholder="Input field" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" 
              value={txtPassword}
              onChange={this.onChange}
              className="form-control" name="txtPassword" id="" placeholder="Input field" />
            </div>
            <button type="submit" className="btn btn-primary">Đăng nhập</button>
          </form>
        </div>
      </div>

    );
  }
}

export default Login;
