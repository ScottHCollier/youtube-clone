import React from "react";
import Avatar from "@material-ui/core/Avatar";

function VideoCard(props) {
    const {
        link,
        image,
        title,
        channel,
        views,
        timeStamp,
        channelImage,
        imageAlt,
        channelImageAlt,
    } = props;
    return (
        <a href={link}>
            <div className="video-card">
                <img src={image} alt={imageAlt} />
                <div className="card-text">
                    <Avatar src={channelImage} alt={channelImageAlt} />
                    <div className="card-details">
                        <h3>{title}</h3>
                        <h4>{channel}</h4>
                        <p>
                            {views} views • {timeStamp} ago
                        </p>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default VideoCard;
