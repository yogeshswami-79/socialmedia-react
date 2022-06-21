import { Search , Person, Chat, Notifications} from '@mui/icons-material';
import React from 'react';

import "./topbar.css"


const Topbar = () => {
    return (
        <div className='topbarContainer'>
            
            <div className="topbarLeft">
                <span className="logo">Lamasocial</span>
            </div>
            
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon'/>
                    <input placeholder='Search for friend, post or video' className="searchInput" />
                </div>
            </div>

            <div className="topbarRight">

                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>

                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person className='notificationIcon'/>
                        <span className="topbarIconBadge">1</span>
                    </div>

                    <div className="topbarIconItem">
                        <Chat className='notificationIcon'/>
                        <span className="topbarIconBadge">2</span>
                    </div>

                    <div className="topbarIconItem">
                        <Notifications className='notificationIcon'/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    );
};

export default Topbar;