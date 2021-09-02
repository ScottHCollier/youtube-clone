import React from "react";

function SidebarItem(props) {
    const { icon, text } = props;
    return (
        <div className="sidebar-item">
            {icon}
            <p className="sidebar-item-text">{text}</p>
        </div>
    );
}

export default SidebarItem;
