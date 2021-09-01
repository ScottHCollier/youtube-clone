import React from "react";

function SidebarItem(props) {
    return (
        <div className="sidebar-item">
            {props.icon}
            <p className="sidebar-item-text">{props.text}</p>
        </div>
    );
}

export default SidebarItem;
