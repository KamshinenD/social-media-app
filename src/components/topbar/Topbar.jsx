import React from 'react';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import './topbar.css';
import { Link } from 'react-router-dom';


const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <Link to='/'>
                    <span className="logo">DeewSocial</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon' />
                    <input placeholder='Search for friends or posts' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarCounter">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarCounter">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarCounter">3</span>
                    </div>
                </div>
                <img src="./assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}

export default Topbar