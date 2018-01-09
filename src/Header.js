'use strict'

import React, { Component } from 'react'
import $ from 'jquery'
import { Glyphicon } from 'react-bootstrap'
//import { fetchUserInfo, logout } from '../../redux/cms/actions'
//import UserMenu from './UserMenu'
//import { getCookie } from '../../utils/cookie'
//import { setUserId } from '../../utils/ga'

let userId = null

const propTypes = {};

const defaultProps = {};

class Header extends Component {
  componentWillMount() {
  }
  
  componentWillReceiveProps(newProps) {
  }
  
  userLogout() {
  }

  render() {
    const { isAuth } = this.props
    // { isAuth ? <UserMenu history={ this.props.history } /> : null }

    return (
      <header>
        <nav className="navbar">
          {(
            () => {
              let retour = ''
              if (isAuth && !$('body').hasClass('home')) {
                retour = (
                  <a className="toggle-nav btn pull-left" href="#">
                    <Glyphicon glyph="menu-hamburger"/>
                  </a>
                )
              }
              return retour
            }
          )()}
          {
            isAuth
            ? <a className="navbar-brand" href="/">Move Publishing</a>
            : <span className="navbar-brand">Move Publishing</span>
          }
        </nav>
      </header>
    )
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
