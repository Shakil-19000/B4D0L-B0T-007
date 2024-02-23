const Canvas = require('canvas');
const axios = require('axios');
const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
    name: "uid2",
    version: "1.0.0",
    hasPermision: 0,
    credits: `Deku & Yan Maglinte and canvas editor by jonell Magallanes`, //Added Canvas Design by Yan and Editor Canvas Design By Jonell Magallanes 
    description: "get info using uid/mention/reply to a message",
    usePrefix: true,
    usages: "[reply/uid/@mention/url]",
    commandCategory: "info",
    cooldowns: 0,
};

const background = "https://i.imgur.com/NiuvY86.jpg";
const fontlink = 'https://drive.google.com/u/0/uc?id=1ZwFqYB-x6S9MjPfYm3t3SP1joohGl4iw&export=download';

module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let {
            threadID,
            senderID,
            messageID
        } = event;

        var id;
        if (args.join().indexOf('@') !== -1) {
            id = Object.keys(event.mentions);
        } else if (args[0]) {
            id = args[0];
        } else {
            id = event.senderID;
        }

        if (event.type == "message_reply") {
            id = event.messageReply.senderID;
        } else if (args.join().indexOf(".com/") !== -1) {
            const res = await axios.get(`https://api.reikomods.repl.co/sus/fuid?link=${args.join(" ")}`);
            id = res.data.result;
        }

        let name = (await api.getUserInfo(id))[id].name;
        let username = (await api.getUserInfo(id))[id].vanity === "unknown" ? "Not Found" : id;
        let url = (await api.getUserInfo(id))[id].profileUrl;

        let callback = async function() {
            const profilePic = await Canvas.loadImage(__dirname + `/cache/avt.png`);
            const canvas = Canvas.createCanvas(626, 352);
            const ctx = canvas.getContext('2d');
            const backgroundImage = await Canvas.loadImage(background);
            ctx.drawImage(backgroundImage, 0, 0, 626, 352);

            ctx.save();
            let size = 250;
            let x = 90;
            let y = (canvas.height - size) / 2;
            let radius = 10;
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + size - radius, y);
            ctx.arcTo(x + size, y, x + size, y + radius, radius);
            ctx.lineTo(x + size, y + size - radius);
            ctx.arcTo(x + size, y + size, x + size - radius, y + size, radius);
            ctx.lineTo(x + radius, y + size);
            ctx.arcTo(x, y + size, x, y + size - radius, radius);
            ctx.lineTo(x, y + radius);
            ctx.arcTo(x, y, x + radius, y, radius);
            ctx.closePath();
            ctx.clip();

            ctx.drawImage(profilePic, x, y, size, size);
            ctx.restore();

            const fontBuffer = (await axios.get(fontlink, { responseType: "arraybuffer" })).data;
            fs.writeFileSync("./modules/commands/noprefix/Semi.ttf", Buffer.from(fontBuffer, "utf-8"));
            Canvas.registerFont("./modules/commands/noprefix/Semi.ttf", { family: "Semi" });

            let fontSize = 30;
            ctx.font = `${fontSize}px Semi`;
            
            while (ctx.measureText(name).width > size) {
                fontSize -= 2;
                ctx.font = `${fontSize}px Semi`;
            }

            let textX = x + size / 2 - ctx.measureText(name).width / 2;
            let textY = y + size + fontSize + 10;

            ctx.fillStyle = "white";
            ctx.fillText(name, textX, textY);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(__dirname + '/cache/Image.png', buffer);

            return api.sendMessage({
                body: `▶▶▶▶( 𝗨𝗜𝗗-𝗨𝗦𝗘𝗥 )  ▶▶▶▶\n\n━━━━━━━━━━━━━━━━━━\n\n[ ▶]⏩:𝗡𝗔𝗠𝗘 ${name}\n\n[ ▶]⏩𝗟𝗜𝗡𝗞: https://facebook.com/${username}\n\n[ ▶]⏩𝗜𝗗: ${id}\n\n━━━━━━━━━━━━━━━━━━\n\n▶𝗕𝗔𝗗𝗢𝗟▶𝗕𝗢𝗧▶【𝟎𝟎𝟕】`,
                attachment: fs.createReadStream(__dirname + `/cache/Image.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/Image.png`), event.messageID);
        };

        return request(encodeURI(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
            .pipe(fs.createWriteStream(__dirname + `/cache/avt.png`))
            .on("close", callback);
    } catch (err) {
        console.log(err);
        return api.sendMessage(`Error`, event.threadID);
    }
};