import axios from "axios";

const KEY = "AIzaSyDfhjgC3nIMlqZkKDQorZsBrvD4Vfi7f_s";
const URL = "https://www.googleapis.com/youtube/v3";

const baseParams = {
    part: "snippet",
    maxResults: 20,
    key: KEY,
};

const videoParams = {
    part: "snippet, statistics",
    maxResults: 20,
    key: KEY,
};

function apiCall(method, path, data) {
    return new Promise((resolve, reject) => {
        return axios[method.toLowerCase()](path, data)
            .then((res) => {
                return resolve(res.data);
            })
            .catch((err) => {
                return reject(err.response.data.error);
            });
    });
}

export const fetchVideo = (id) => {
    return apiCall("get", `${URL}/videos`, {
        params: { ...videoParams, id },
    })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err.response.data.error;
        });
};

export const fetchData = () => {
    return apiCall("get", `${URL}/search`, {
        params: { ...baseParams, q: "runaway" },
    })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err.response.data.error;
        });
};

// fetchData().then((response) => {
//     for (item of response.items) {
//         fetchVideo(item.id.videoId).then((response) => {
//             let data = response.items[0];

//             let video = {
//                 link: `https://www.youtube.com/watch?v=${data.id}`,
//                 image: data.snippet.thumbnails.medium.url,
//                 title: data.snippet.title,
//                 channel: data.snippet.channelTitle,
//                 views: data.statistics.viewCount,
//                 timeStamp: data.snippet.publishedAt,
//                 channelImage: "images/pug.png",
//                 channelImageAlt: "Pug",
//                 imageAlt: "Poodle",
//             };

//             console.log(video);
//         });
//     }
// });

// fetchVideo("Bm5iA4Zupek").then((response) => {
//     let data = response.items[0];

//     let video = {
//         link: `https://www.youtube.com/watch?v=${data.id.videoId}`,
//         image: data.snippet.thumbnails.medium.url,
//         title: data.snippet.title,
//         channel: data.snippet.channelTitle,
//         views: data.statistics.viewCount,
//         timeStamp: data.snippet.publishedAt,
//         channelImage: "images/pug.png",
//         channelImageAlt: "Pug",
//         imageAlt: "Poodle",
//     };
// });
