import React from "react";
import SidebarItem from "./SidebarItem";
import HomeIcon from "@material-ui/icons/Home";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

const sidebarNav = [
    { icon: <HomeIcon />, text: "Home" },
    { icon: <ExploreOutlinedIcon />, text: "Explore" },
    { icon: <SubscriptionsOutlinedIcon />, text: "Subscriptions" },
];

const sidebarHistory = [
    { icon: <VideoLibraryOutlinedIcon />, text: "Library" },
    { icon: <HistoryOutlinedIcon />, text: "History" },
    { icon: <OndemandVideoOutlinedIcon />, text: "Your Videos" },
    { icon: <WatchLaterOutlinedIcon />, text: "Watch Later" },
    { icon: <ThumbUpAltOutlinedIcon />, text: "Liked Videos" },
    { icon: <ExpandMoreOutlinedIcon />, text: "Show More" },
];

function Sidebar() {
    let navList = sidebarNav.map((item) => (
        <SidebarItem icon={item.icon} text={item.text} />
    ));

    let historyList = sidebarHistory.map((item) => (
        <SidebarItem icon={item.icon} text={item.text} />
    ));

    return (
        <div className="sidebar">
            <div className="nav-list">{navList}</div>
            <div className="history-list">{historyList}</div>
            <div className="subscriptions-list">
                <p>SUBSCRIPTIONS</p>
            </div>
            <div className="sidebar-footer">
                <p>© 2021 Google LLC</p>
            </div>
        </div>
    );
}

export default Sidebar;
