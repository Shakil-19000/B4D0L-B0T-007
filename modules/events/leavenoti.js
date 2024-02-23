module.exports.config = {
  name: "leave",
  eventType: ["log:unsubscribe"],
  version: "1.0.0",
  credits: "BADOL-KHAN",
  description: "Notify the Bot or the person leaving the group with a random gif/photo/video",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "left", "");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "left", "");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
  const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
  const { join } =  global.nodemodule["path"];
  const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("DD/MM/YYYY || hh:mm:s");
  const hours = moment.tz("Asia/Dhaka").format("hh");
  const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? "leave" : "managed";
  const path = join(__dirname, "events", "left.mp4");
  const pathGif = join(path, `${threadID}"left.mp4`);
  var msg, formPush

  if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "•—»★ {name} ★«—•\n ╭•┄┅════❁𝙱𝙰𝙳𝙰𝙻-𝙱𝙰𝙸❁════┅┄•╮ \n            ｢ 𝗔𝗟𝗟𝗔𝗛𝗔𝗙𝗘𝗭 ｣     \n ╰•┄┅════❁𝙱𝙰𝙳𝙰𝙻-𝚅𝙰𝙸❁════┅┄•╯ \n  •—»★       {type}  ★«—•\n\n•—»★ কিরে নলা মার্ক ★«—•  \n\n•—»★ {name} ★«—•\n\nলেফট নেয়ার কি আছে আমার বস্ \n\nবাদল চৌধুরী কে বল্লেই হত তোমার পিছনে উঠটা মেরে বের করে দিতো__//🤦‍♂️🤏-!!\n\n {session} || {time}" : msg = data.customLeave;
  msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "leave time" : 
    hours > 10 && hours <= 12 ? "__" :
    hours > 12 && hours <= 18 ? "__" : "__").replace(/\{time}/g, time);  

  const randomPath = readdirSync(join(__dirname, "cache", "left", ""));

  if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
  else if (randomPath.length != 0) {
    const pathRandom = join(__dirname, "cache", "left", "",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
    formPush = { body: msg, attachment: createReadStream(pathRandom) }
  }
  else formPush = { body: msg }

  return api.sendMessage(formPush, threadID);
    }