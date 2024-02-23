const fs = require("fs-extra");
const axios = require("axios");

module.exports.config = {
    name: "autolink",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Rahad",
    description: "any Video auto download",
    commandCategory: "group",
    usages: "autodown",
    cooldowns: 5,
};

module.exports.run = async function () { }

module.exports.handleEvent = async function ({ api, event }) {
    if (this.checkLink(event.body)) {
        var { type, url } = this.checkLink(event.body);
        this.downLoad(url, type, api, event);
    }
};

module.exports.downLoad = function (url, type, api, event) {
    var time = Date.now();
    var path = __dirname + `/cache/${time}.${type}`;
    this.getLink(url).then(res => {
        if (type == 'mp4') url = res;
        else if (type == 'mp3') url = res;

        console.log("Downloading file from:", url);
        axios({
            method: "GET",
            url: url,
            responseType: "arraybuffer"
        }).then(res => {
            console.log("File downloaded successfully. Writing to disk...");
            fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));

            if (fs.statSync(path).size / 1024 / 1024 > 25) {
                console.log("The file is too large, cannot be sent");
                return api.sendMessage("The file is too large, cannot be sent", event.threadID, () => {
                    console.log("Deleting the oversized file...");
                    fs.unlinkSync(path);
                }, event.messageID);
            }

            console.log("File written to disk. Sending message...");
            api.sendMessage({
                body: "ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿-𝘽𝘼𝘿𝘼𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿\n\n🫰ভিডিও ডাউনলোড করার সাকসেসফুল🫰",
                attachment: fs.createReadStream(path)
            }, event.threadID, () => {
                console.log("Message sent successfully. Deleting file...");
                fs.unlinkSync(path);
            }, event.messageID);
        }).catch(err => {
            console.error("Error downloading file:", err);
            api.sendMessage("Error downloading the file", event.threadID);
        });
    }).catch(err => {
        console.error("Error getting download link:", err);
        api.sendMessage("Error getting the download link", event.threadID);
    });
};

module.exports.getLink = function (url) {
    console.log("Processing URL:", url);

    if (url.includes("tiktok")) {
        return new Promise((resolve, reject) => {
            axios({
                method: "GET",
                url: `https://tikdl.mohammad-rahad.repl.co/tikdl?url=${url}&apikey=rahad2`
            }).then(res => resolve(res.data.noWatermarkMp4)).catch(err => reject(err));
        });
    } else if (url.includes("facebook") || url.includes("fb.watch")) {
        console.log("Processing Facebook URL...");
        return new Promise((resolve, reject) => {
            axios({
                method: "GET",
                url: `https://fbdl2.mohammad-rahad.repl.co/fbdl3?url=${url}&apikey=Rahad`
            }).then(res => {
                console.log("Facebook download response:", res.data);
                resolve(res.data.result.data);
            }).catch(err => {
                console.error("Error in Facebook download:", err);
                reject(err);
            });
        });
    } else if (url.includes("instagram")) {
        return new Promise((resolve, reject) => {
            axios({
                method: "GET",
                url: `https://instadl.mohammad-rahad.repl.co/insta?url=${url}`
            }).then(res => resolve(res.data.result.data)).catch(err => reject(err));
        });
    } else if (url.includes("youtu.be") || url.includes("youtube.com")) {
        return new Promise((resolve, reject) => {
            const isShorts = url.includes("/shorts/");
            axios({
                method: "GET",
                url: `https://ytdl.mohammad-rahad.repl.co/ytdl?url=${url}`
            }).then(res => {
                const videoData = res.data.data;
                resolve(isShorts ? videoData.mp4_url : videoData.mp4_url);
            }).catch(err => reject(err));
        });
    } else {
        return Promise.reject("Invalid URL");
    }
};

module.exports.checkLink = function (url) {
    const regex = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
    const found = (url).match(regex);
    var media = ['tiktok', 'facebook', 'douyin', 'youtube', 'youtube.com', 'fb.watch', 'youtu', 'twitter', 'instagram', 'kuaishou', 'fb']
    if (this.isVaildUrl(String(found))) {
        if (media.some(item => String(found).includes(item))) {
            return {
                type: "mp4",
                url: String(found)
            };
        } else if (String(found).includes("soundcloud") || String(found).includes("zingmp3")) {
            return {
                type: "mp3",
                url: String(found)
            }
        }
    }
    return !1;
};

module.exports.isVaildUrl = function (url) {
    var regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (url.match(regex) == null) return !1;
    return !0;
};