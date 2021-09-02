import React from "react";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import Avatar from "@material-ui/core/Avatar";

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <MenuOutlinedIcon className="header-icon" />

                <img
                    className="header-logo header-icon"
                    src="images/youtube-logo.svg"
                    alt="YouTube Logo"
                />
            </div>
            <div className="header-input">
                <input type="text" placeholder="Search"></input>
                <SearchOutlinedIcon className="header-input-button header-icon" />
            </div>
            <div className="header-icons">
                <VideoCallOutlinedIcon className="header-icon" />
                <AppsOutlinedIcon className="header-icon" />
                <NotificationsOutlinedIcon className="header-icon" />
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
