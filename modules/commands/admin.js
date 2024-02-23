module.exports.config = {
	name: "admin",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "BADOL-KHAN", //don't change the credits please
	description: "Admin and info .",
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
var link = ["https://i.imgur.com/4kYroIN.jpg","https://i.imgur.com/4kYroIN.jpg",
            "https://i.imgur.com/4kYroIN.jpg",];
var callback = () => api.sendMessage({body:`╭•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╮\n\nꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ🅑🅞🅣 🅐🅓🅜🅘🅝 ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿

╭────────────────────────➤➤➤
 !➤ 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄:❂⃝⃘ »̶̶͓͓͓̽̽̽${global.config.BOTNAME}»̶̶͓͓͓̽̽̽⑅⃝✺
 !
 !➤ 𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗:❂⃝⃘ »̶̶͓͓͓̽̽̽${global.config.PREFIX}»̶̶͓͓͓̽̽̽⑅⃝✺
 !
 !➤ 𝐑𝐀𝐍𝐈𝐍𝐆 𝐓𝐈𝐌𝐄:❂⃝⃘ »̶̶͓͓͓̽̽̽${hours}:${minutes}:${seconds}.»̶̶͓͓͓̽̽̽⑅⃝✺
 !
 !❂⃝⃘ »̶̶͓͓͓̽̽̽𝐃𝐎 𝐍𝐎𝐓 𝐓𝐑𝐔𝐒𝐓 𝐓𝐇𝐄 𝐁𝐎𝐓 𝐎𝐏𝐄𝐑𝐀𝐓𝐎𝐑»̶̶͓͓͓̽̽̽⑅⃝✺
 !
╰─────────────────────────➤➤➤

★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★

•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•
𝐍𝐚𝐦𝐞       : 𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 𝐁𝐀𝐃𝐀𝐋
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 𝐁𝐀𝐃𝐀𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐒𝐋𝐀𝐌
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐃𝐇𝐀𝐊𝐀 𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐊𝐇𝐔𝐋𝐍𝐀 𝐏𝐀𝐈𝐊𝐆𝐀𝐂𝐇𝐀
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐀𝐋𝐄
𝐀𝐠𝐞           : 𝟮𝟲+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐊𝐎𝐌𝐔𝐍𝐀
𝐖𝐨𝐫𝐤       : 𝐉𝐎𝐁
𝐆𝐦𝐚𝐢𝐥       : mohammadbadol007@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801782721761
𝐌𝐞𝐬𝐬𝐞𝐧𝐠𝐞𝐫: m.me/100004504180813
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/BADOL.CHOWDHURY.TERA.REAL.ABBU
•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•

★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★

\n\n❂⃝⃘ »̶̶͓͓͓̽̽̽𝘽𝙊𝙏-𝙊𝙒𝙉𝙀𝙍»̶̶͓͓͓̽̽̽⑅⃝✺\n\n ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿\n\n╰•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╯`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };