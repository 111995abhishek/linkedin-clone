import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt=""/>
                <Avatar className="sidebar_avatar"/>
                <h2>Abhishek Singh</h2>
                <h4>111995abhishek@gmail.com</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who Viewed you</p>
                    <p className="sidebar_statNumber">2,453</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">2,448</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("Reactjs")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
                
            </div>
        </div>
    )
}

export default Sidebar
