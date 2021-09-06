import React, { Component } from "react";
import VideoCard from "./VideoCard";
import { fetchVideo } from "../services/api";
import { abbreviateNumber, timeSince } from "../services/timeStamps";

class RecommendedVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
        };
    }
    componentDidMount() {
        let videos = [];
        fetchVideo()
            .then((response) => {
                response.items.map((item) => {
                    let formattedViews = abbreviateNumber(
                        item.statistics.viewCount
                    );

                    let formattedTimeSince = timeSince(
                        item.snippet.publishedAt
                    );

                    let video = {
                        link: `https://www.youtube.com/watch?v=${item.id}`,
                        image: item.snippet.thumbnails.medium.url,
                        title: item.snippet.title,
                        channel: item.snippet.channelTitle,
                        views: formattedViews,
                        timeStamp: formattedTimeSince,
                        channelImage: "images/pug.png",
                        channelImageAlt: "Pug",
                        imageAlt: "Poodle",
                    };
                    videos.push(video);
                });
            })
            .then(() => {
                this.setState({ videos });
            });
    }

    render() {
        const videoList = this.state.videos.map((video, index) => (
            <VideoCard
                key={index}
                link={video.link}
                image={video.image}
                title={video.title}
                channel={video.channel}
                views={video.views}
                timeStamp={video.timeStamp}
                channelImage={video.channelImage}
                channelImageAlt={video.channelImageAlt}
                imageAlt={video.imageAlt}
            />
        ));

        return (
            <div className="recommended-videos">
                <div className="link-list">
                    <ul>
                        <p>All</p>
                        <p>Live</p>
                        <p>Basketball</p>
                        <p>Podcasts</p>
                        <p>Javascript</p>
                        <p>Computer Science</p>
                        <p>Sci-fi Films</p>
                        <p>Superheroes</p>
                        <p>Sports Leagues</p>
                        <p>Cryptocurrency</p>
                        <p>TV Recap</p>
                        <p>Javascript</p>
                        <p>Computer Science</p>
                        <p>Sci-fi Films</p>
                        <p>Superheroes</p>
                        <p>Sports Leagues</p>
                        <p>Cryptocurrency</p>
                        <p>TV Recap</p>
                    </ul>
                </div>

                {/* <YoutubeEmbed embedId="Bm5iA4Zupek" /> */}

                <div className="video-list">{videoList}</div>
            </div>
        );
    }
}

export default RecommendedVideos;
