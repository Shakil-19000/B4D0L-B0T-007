module.exports.config = {
	name: "time",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "BADOL-KHAN", //don't change the credits please
	description: "Time Bot .",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/fWvT31a.jpg",
            "https://i.imgur.com/fWvT31a.jpg",
            "https://i.imgur.com/fWvT31a.jpg",
            "https://i.imgur.com/fWvT31a.jpg",
            
"https://i.imgur.com/fWvT31a.jpg"];var callback = () => api.sendMessage({body:`╭•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╮\n\n★আসসালামু-আলাইকুম★

╰┈►★𝘽𝙊𝙏-𝙉𝘼𝙈𝙀: ${global.config.BOTNAME}

╰┈►★𝘽𝙊𝙏-𝙋𝙍𝙀𝙁𝙄𝙓: ╰┈►${global.config.PREFIX}◄┈╯

╰┈►★𝘼𝙅𝙆𝙀𝙍-𝙏𝙄𝙈𝙀 : ${juswa}

╰┈►★𝘽𝙊𝙏-𝙍𝘼𝙉𝙄𝙉𝙂-𝙏𝙄𝙈𝙀: ${hours}:${minutes}:${seconds}.

•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n★𝘽𝙊𝙏-𝙊𝙒𝙉𝙀𝙍\n\n𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿-𝘽𝘼𝘿𝘼𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔\n\n★𝘽𝙊𝙏-𝘼𝙈𝙄𝙉-𝙁𝘽-𝙇𝙄𝙉𝙆\n\nhttps://www.facebook.com/BADOL.CHOWDHURY.TERA.REAL.ABBU\n\n★𝘽𝙊𝙏-𝘼𝘿𝙈𝙄𝙉-𝙈𝙀𝙎𝙎𝙀𝙉𝙂𝙀𝙍-𝙇𝙄𝙉𝙆\n\nm.me/100004504180813\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n╰•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╯ `,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };