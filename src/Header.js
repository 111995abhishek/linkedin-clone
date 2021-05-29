import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className ="header">
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
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messages"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="https://scontent.fblr4-1.fna.fbcdn.net/v/t1.6435-9/137681381_1045162295997962_6175379581714523481_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=rAltQMqHw1oAX9zc_a2&_nc_ht=scontent.fblr4-1.fna&oh=230c4f03411c0d7ac1acf1de0e0c778f&oe=60D8C15C" 
                title="me"/>
                
            </div>
        </div>
    )
}

export default Header
