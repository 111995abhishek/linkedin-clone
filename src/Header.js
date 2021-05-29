import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

function Header() {
    return (
        <div className ="header">
            <h1>This is the Header</h1>
            <div className="header_left">
                <img src="https://www.fpsa.org/wp-content/uploads/linkedin-logo-copy.png" alt=""/>
                <div className="header_search">
                     <SearchIcon/>
                     <input type="text"/>
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            </div>
        </div>
    )
}

export default Header
