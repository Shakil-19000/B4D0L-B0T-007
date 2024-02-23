module.exports.config = {
  name: "prefix",
  version: "4.0.0",
  hasPermssion: 0,
  credits: "BADOL-KHAN",
  description: "",
  commandCategory: "system",
  usages: "",
  cooldowns: 0,
};

module.exports.handleEvent = async function ({ api, event }) {
  const axios = require("axios");
  const request = require("request");
  const fs = require("fs");
  const moment = require("moment-timezone");
  var times = moment.tz("Asia/Dhaka").format("hh:mm:ss || D/MM/YYYY");
  var thu = moment.tz("Asia/Dhaka").format("dddd");
  moment.tz("Asia/Dhaka").format("dddd");
  if (thu == "Sunday") thu = "রবিবার";
  if (thu == "Monday") thu = "সোমবার";
  if (thu == "Tuesday") thu = "মঙ্গলবার";
  if (thu == "Wednesday") thu = "বুধবার";
  if (thu == "Thursday") thu = "বৃহস্পতিবার";
  if (thu == "Friday") thu = "শুক্রবার";
  if (thu == "Saturday") thu = "শনিবার";
  var { threadID, messageID, body } = event,
    { PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
  const timeStart = Date.now();
  const tdung = require("./../../B4D9L/prefix.json");
  var video = tdung[Math.floor(Math.random() * tdung.length)].trim();
  function vtuanhihi(videoUrl, vtuandz, callback) {
    request(videoUrl)
      .pipe(fs.createWriteStream(__dirname + `/` + vtuandz))
      .on("close", callback);
  }
  if (body.toLowerCase() == "Prefix" || body.toLowerCase() == "prefix") {
    let callback = function () {
      return api.sendMessage(
        {
          body: `╭•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╮\n\n==== ╰┈► 𝗠𝘆-𝗣𝗿𝗲𝗳𝗶𝘅-𝗖𝗺𝗱 ◄┈╯ ====\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n╰┈►𝗚𝗿𝗼𝘂𝗽-𝗡𝗮𝗺𝗲: ${threadName}\n\n╰┈►𝗠𝘆-𝗕𝗼𝘁-𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${global.config.PREFIX} ]◄┈╯\n\n╰┈►𝗕𝗼𝘁-𝗡𝗮𝗺𝗲: ${global.config.BOTNAME}\n\n╰┈►𝗕𝗼𝘁-𝗔𝗹𝗹-𝗖𝗺𝗱-𝗟𝗶𝘀𝘁 :${
            client.commands.size
          } \n\n╰┈►𝗢𝘄𝗻𝗲𝗿-𝗟𝗶𝗻𝗸: m.me/100004504180813\n\n╰┈►𝗙𝗯- https://www.facebook.com/BADOL.CHOWDHURY.TERA.REAL.ABBU\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n『  ${thu} || ${times} 』\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\nꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿-𝘽𝘼𝘿𝘼𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿\n\n╰•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╯`,
          attachment: [fs.createReadStream(__dirname + `/photo.jpeg`)],
        },
        event.threadID,
        () => {
          fs.unlinkSync(__dirname + `/photo.jpeg`);
        },
        event.messageID
      );
    };
    vtuanhihi(video, "photo.jpeg", callback);
  }
};

module.exports.run = async ({ api, event, args, Threads }) => {};