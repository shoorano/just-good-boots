import React from 'react';
import './header.css';

import search from './images/search.svg';
import user from './images/user.svg';
import favourites from './images/favourites.svg';
import cart from './images/cart.svg';

import Icon from '../icon/icon.jsx';

const Header = () => (
    <div className="header">
        <div className="header-main">
            <div className="header-search-bar">
                <input type="text"/>
                <button type="submit" className="search-button"><img src={ search } alt="" className="search-button-icon"></img></button>
            </div>
            <div className="header-icon">
                <Icon/>
            </div>
            <div className="header-main-nav">
                <img src={ search } alt="" className="nav-icon"/>
                <a href="/user"><img src={ user } alt="user" className="nav-icon"/></a>
                <a href="/favourites"><img src={ favourites } alt="favourites" className="nav-icon"/></a>
                <a href="/cart"><img src={ cart } alt="cart" className="nav-icon"/></a>
            </div>
        </div>
        <div className="header-sub-menu">
                <a className="sub-menu-items" href="/mens">MENS</a>
                <a className="sub-menu-items" href="/womens">WOMENS</a>
                <a className="sub-menu-items" href="/sale">SALE</a>
        </div>
    </div>
)

export default Header;