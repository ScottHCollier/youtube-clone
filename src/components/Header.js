import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import { red } from "@material-ui/core/colors";

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon className="header-icon" />

                <img
                    className="header-logo header-icon"
                    src="images/youtube-logo.svg"
                    alt="YouTube Logo"
                />
            </div>
            <div className="header-input">
                <input type="text" placeholder="Search"></input>
                <SearchIcon className="header-input-button header-icon" />
            </div>
            <div className="header-icons">
                <VideoCallIcon className="header-icon" />
                <AppsIcon className="header-icon" />
                <NotificationsIcon className="header-icon" />
                <Avatar
                    id="avatar"
                    src="https://avatars.githubusercontent.com/u/71890174?s=400&u=752e5637406ddf6f72eb345d725df0e88eb94760&v=4"
                    alt="Scott Collier"
                />
            </div>
        </div>
    );
}

export default Header;
