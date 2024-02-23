const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "new",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "BADOL-KHAN",
    description: "",
    commandCategory: "Tiện ích",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Dhaka").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `╭•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╮\n\n [ 𝙐𝙎𝙀𝙍 𝙍𝙀𝙋𝙇𝙔 ] \n━━━━━━━━━━━━━━━━\n『𝗧𝗶𝗺𝗲』: ${gio}\n\n━━━━━━━━━━━━━━━━\n『𝙍𝙀𝙋𝙇𝙔』👇👇\n\n : ★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\n${body}\n\n ★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\n━━━━━━━━━━━━━━━━\n𝙐𝙎𝙀𝙍 𝙉𝘼𝙈𝙀 ${name}\n\n  𝙁𝙍𝙊𝙈 𝙂𝙍𝙊𝙐𝙋 ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, ` [ 𝙐𝙎𝙀𝙍 𝙍𝙀𝙋𝙇𝙔 ] \n━━━━━━━━━━━━━━━━\n『𝗧𝗶𝗺𝗲』: ${gio}\n\n━━━━━━━━━━━━━━━━\n『𝙍𝙀𝙋𝙇𝙔』👇👇\n\n : ${body}\n\n━━━━━━━━━━━━━━━━\n𝙐𝙎𝙀𝙍 𝙉𝘼𝙈𝙀: ${name}\n\n 𝙁𝙍𝙊𝙈 𝙂𝙍𝙊𝙐𝙋 ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n\n╰•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╯`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `╭•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╮\n\n [𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙁𝙊𝙍 𝘼𝘿𝙈𝙄𝙉] \━━━━━━━━━━━━━━━━\n『𝗧𝗶𝗺𝗲』: ${gio}\n\━━━━━━━━━━━━━━━━\n『𝙈𝙀𝙎𝙎𝘼𝙂𝙀』 :\n\n ★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★ \n\n${body}\n\n★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\━━━━━━━━━━━━━━━━\n『𝘼𝘿𝙈𝙄𝙉 𝙉𝘼𝙈𝙀』 ${name}\━━━━━━━━━━━━━━━━\n\nReply to this Message if you want to respond to this Announce \n\n ╰•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╯`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body} [𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙁𝙊𝙍 𝘼𝘿𝙈𝙄𝙉] \━━━━━━━━━━━━━━━━\n『𝗧𝗶𝗺𝗲』: ${gio}\n\━━━━━━━━━━━━━━━━\n『𝘼𝘿𝙈𝙉 𝙉𝘼𝙈𝙀』 ${name}\━━━━━━━━━━━━━━━━\n\nReply to this Message if you want to respond to this Announce.amar \n\n ╰•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╯`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Dhaka").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `╭•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╮\n\n [𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙁𝙍𝙊𝙈 𝘼𝘿𝙈𝙄𝙉] \n━━━━━━━━━━━━━━━━\n『𝗧𝗶𝗺𝗲』: ${gio}\n\n━━━━━━━━━━━━━━━━\n『𝙈𝙀𝙎𝙎𝘼𝙂𝙀』 👇👇\n\n ★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\n ${args.join(" ")}\n\n ★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\n━━━━━━━━━━━━━━━━\n『𝘼𝘿𝙈𝙄𝙉 𝙉𝘼𝙈𝙀』 ${await Users.getNameUser(senderID)} \n\n━━━━━━━━━━━━━━━━\n\nReply to this Message if you want to respond to this Announce \n\n╰•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╯`;
    if(event.type == "𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙍𝙀𝙋𝙇𝙔") text = await getAtm(messageReply.attachments, ` [ 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙁𝙍𝙊𝙈 𝘼𝘿𝙈𝙄𝙉 ] \n━━━━━━━━━━━━━━━━\n『𝗧𝗶𝗺𝗲』: ${gio}\n\n━━━━━━━━━━━━━━━━\n『𝙈𝙀𝙎𝙎𝘼𝙂𝙀』 :\n\n ★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\n ${args.join(" ")}\n\n★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\n━━━━━━━━━━━━━━━━\n『𝘼𝘿𝙈𝙄𝙉 𝙉𝘼𝙈𝙀』 ${await Users.getNameUser(senderID)}\n━━━━━━━━━━━━━━━━\nReply to this Message if you want to respond to this Announce \n\n╰•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╯`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`Send to ${can} thread, not send to ${canNot} thread`, threadID);
          }