import React, { Component } from "react";
import VideoCard from "./VideoCard";
// import { fetchData, fetchVideo } from "../services/api";

class RecommendedVideos extends Component {
    componentDidMount() {
        // let videoIds = [];

        // fetchData().then((response) => {
        //     response.items.map((item) => videoIds.push(item.id.videoId));
        //     // for (item of response.items) {
        //     //     fetchVideo(item.id.videoId).then((response) => {
        //     //         let data = response.items[0];

        //     //         let video = {
        //     //             link: `https://www.youtube.com/watch?v=${data.id}`,
        //     //             image: data.snippet.thumbnails.medium.url,
        //     //             title: data.snippet.title,
        //     //             channel: data.snippet.channelTitle,
        //     //             views: data.statistics.viewCount,
        //     //             timeStamp: data.snippet.publishedAt,
        //     //             channelImage: "images/pug.png",
        //     //             channelImageAlt: "Pug",
        //     //             imageAlt: "Poodle",
        //     //         };

        //     //         console.log(video);
        //     //     });
        //     // }
        // });

        // console.log(videoIds);
    }

    render() {
        const videos = [
            {
                link: "https://www.youtube.com/watch?v=Bm5iA4Zupek",
                image: "https://i.ytimg.com/vi/Bm5iA4Zupek/mqdefault.jpg",
                title: "Kanye West - Runaway (Video Version) ft. Pusha T",
                channel: "KanyeWestVEVO",
                views: "65011207",
                timeStamp: "2010-10-21T21:07:56Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=9LGXATiZEKs",
                image: "https://i.ytimg.com/vi/9LGXATiZEKs/mqdefault.jpg",
                title: "AURORA - Runaway (Lyrics)",
                channel: "Blissful Mind",
                views: "63395745",
                timeStamp: "2020-11-25T05:25:10Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=Jg5wkZ-dJXA",
                image: "https://i.ytimg.com/vi/Jg5wkZ-dJXA/mqdefault.jpg",
                title: "Kanye West - Runaway (Full-length Film)",
                channel: "KanyeWestVEVO",
                views: "30204250",
                timeStamp: "2010-10-25T21:44:46Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=s86K-p089R8",
                image: "https://i.ytimg.com/vi/s86K-p089R8/mqdefault.jpg",
                title: "Bon Jovi - Runaway (Official Music Video)",
                channel: "BonJoviVEVO",
                views: "117666190",
                timeStamp: "2009-06-16T21:52:09Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=5XR7naZ_zZA",
                image: "https://i.ytimg.com/vi/5XR7naZ_zZA/mqdefault.jpg",
                title: "Galantis - Runaway (U & I) (Official Video)",
                channel: "Galantis",
                views: "378502118",
                timeStamp: "2015-01-19T22:00:33Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=EMnQwBTJnMM",
                image: "https://i.ytimg.com/vi/EMnQwBTJnMM/mqdefault.jpg",
                title: "Runaway",
                channel: "Kanye West - Topic",
                views: "948736",
                timeStamp: "2018-07-26T19:45:28Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=L7_jYl8A73g",
                image: "https://i.ytimg.com/vi/L7_jYl8A73g/mqdefault.jpg",
                title: "Kanye West - Runaway (Extended Video Version) ft. Pusha T",
                channel: "KanyeWestVEVO",
                views: "39147581",
                timeStamp: "2010-10-22T09:25:36Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=zMCVp6INpnw",
                image: "https://i.ytimg.com/vi/zMCVp6INpnw/mqdefault.jpg",
                title: "Lil Peep - Runaway (Official Video)",
                channel: "Lil Peep",
                views: "47381119",
                timeStamp: "2018-11-01T13:30:04Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=ODbmJhsc9cU",
                image: "https://i.ytimg.com/vi/ODbmJhsc9cU/mqdefault.jpg",
                title: "AURORA - Runaway (1 HOUR/LYRICS)",
                channel: "ZenoMusic",
                views: "1001662",
                timeStamp: "2021-04-04T18:03:30Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=d_HlPboLRL8",
                image: "https://i.ytimg.com/vi/d_HlPboLRL8/mqdefault.jpg",
                title: "AURORA - Runaway",
                channel: "iamAURORAVEVO",
                views: "279459923",
                timeStamp: "2015-02-27T06:00:01Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=DB5USH8Vr1w",
                image: "https://i.ytimg.com/vi/DB5USH8Vr1w/mqdefault.jpg",
                title: "Aurora - Runaway (Live on the Honda Stage)",
                channel: "iamAURORAVEVO",
                views: "9999867",
                timeStamp: "2016-06-23T16:00:00Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=QlueTdEB34M",
                image: "https://i.ytimg.com/vi/QlueTdEB34M/mqdefault.jpg",
                title: "AURORA - Runaway (Lyrics)",
                channel: "Vibe Music",
                views: "531497",
                timeStamp: "2021-04-20T20:37:15Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=NqFeNHOwv7c",
                image: "https://i.ytimg.com/vi/NqFeNHOwv7c/mqdefault.jpg",
                title: "Aurora - Runaway (Karaoke Version)",
                channel: "Sing King",
                views: "1773172",
                timeStamp: "2021-05-04T16:59:49Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=GeV4j6lo7Yw",
                image: "https://i.ytimg.com/vi/GeV4j6lo7Yw/mqdefault.jpg",
                title: "Runaway - AURORA (Lyrics) �",
                channel: "DopeLyrics",
                views: "22005070",
                timeStamp: "2021-04-04T14:44:41Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=Fc7XWW_Ehb8",
                image: "https://i.ytimg.com/vi/Fc7XWW_Ehb8/mqdefault.jpg",
                title: "AURORA - RUNAWAY - The 2015 Nobel Peace Prize Concert",
                channel: "Nobel Peace Prize Concert",
                views: "17262433",
                timeStamp: "2015-12-11T22:37:39Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=zfWiseeZ-M8",
                image: "https://i.ytimg.com/vi/zfWiseeZ-M8/mqdefault.jpg",
                title: "Runaway",
                channel: "Ed Sheeran - Topic",
                views: "3709057",
                timeStamp: "2014-11-08T02:45:43Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=0fMUYU8DC1U",
                image: "https://i.ytimg.com/vi/0fMUYU8DC1U/mqdefault.jpg",
                title: "The Corrs - Runaway [Official Video]",
                channel: "The Corrs",
                views: "15620840",
                timeStamp: "2009-09-29T01:27:50Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=cv1naUa3_3g",
                image: "https://i.ytimg.com/vi/cv1naUa3_3g/mqdefault.jpg",
                title: "Runaway (Explicit)",
                channel: "Kanye West - Topic",
                views: "819753",
                timeStamp: "2018-07-31T14:29:21Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=0S13mP_pfEc",
                image: "https://i.ytimg.com/vi/0S13mP_pfEc/mqdefault.jpg",
                title: "Del Shannon - Runaway",
                channel: "folkman 123",
                views: "25391516",
                timeStamp: "2008-01-03T16:40:36Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
            {
                link: "https://www.youtube.com/watch?v=uGd8Csat4ok",
                image: "https://i.ytimg.com/vi/uGd8Csat4ok/mqdefault.jpg",
                title: "Kanye West - Runaway (Full-length Clean)",
                channel: "KanyeWestVEVO",
                views: "1946556",
                timeStamp: "2020-11-19T22:01:04Z",
                channelImage: "images/pug.png",
                channelImageAlt: "Pug",
                imageAlt: "Poodle",
            },
        ];

        const videoList = videos.map((video, index) => (
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

                <div className="video-list">{videoList}</div>
            </div>
        );
    }
}

export default RecommendedVideos;
