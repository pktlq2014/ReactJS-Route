import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      var active = match ? 'changeBackground' : '';
      return (
        <li className={active}>
          <Link to={to}>{label}</Link>
        </li>
      )
    }} />
  )
}
const menu = [
  {
    name: 'Trang Chủ',
    to: '/',
    exact: true
  },
  {
    name: 'Giới Thiệu',
    to: '/about',
    exact: false
  },
  {
    name: 'Liên Hệ',
    to: '/contact',
    exact: false
  },
  {
    name: 'Sản Phẩm',
    to: '/products',
    exact: false
  },
  {
    name: 'Đăng Nhập',
    to: '/login',
    exact: false
  }
]
class Menu extends Component {
  showMenu = (menu) => {
    var result = null;
    if (menu.length > 0) {
      result = menu.map((menus, index) => {
        return (
          <MenuLink
            key={index}
            label={menus.name}
            to={menus.to}
            activeOnlyWhenExact={menus.exact} />
        );
      });
    }
    return result;
  }
  render() {
    return (
      <div>
        {/* menu */}
        <nav className="navbar navbar-inverse">
          {/* <a className="navbar-brand">Title</a> */}
          <ul className="nav navbar-nav">
            {this.showMenu(menu)}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
