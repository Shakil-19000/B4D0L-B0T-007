module.exports.config = {
	name: "info",
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
var link = ["https://i.imgur.com/L4gtz0k.jpg","https://i.imgur.com/L4gtz0k.jpg",
            "https://i.imgur.com/L4gtz0k.jpg",];
var callback = () => api.sendMessage({body:`ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ🇧 🇴 🇹  🇮 🇳 🇫 🇴 ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿

★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★

❂⃝⃘ »̶̶͓͓͓̽̽̽𝘽𝙊𝙏 𝙉𝘼𝙈𝙀: ${global.config.BOTNAME}»̶̶͓͓͓̽̽̽⑅⃝✺

❂⃝⃘ »̶̶͓͓͓̽̽̽𝘽𝙊𝙏 𝙋𝙍𝙀𝙁𝙄𝙓: ${global.config.PREFIX}»̶̶͓͓͓̽̽̽⑅⃝✺

❂⃝⃘ »̶̶͓͓͓̽̽̽𝘽𝙊𝙏 𝙊𝙒𝙉𝙀𝙍: 𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿 𝘽𝘼𝘿𝙊𝙇 𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔»̶̶͓͓͓̽̽̽

❂⃝⃘ »̶̶͓͓͓̽̽̽𝙁𝘽 𝙇𝙄𝙉𝙆:👇👇👇

❂⃝⃘ »̶̶͓͓͓̽̽̽https://www.facebook.com/BADOL.CHOWDHURY.TERA.REAL.ABBU»̶̶͓͓͓̽̽̽⑅⃝✺

❂⃝⃘ »̶̶͓͓͓̽̽̽𝙈𝙀𝙎𝙎𝙀𝙉𝙂𝙀𝙍 𝙇𝙄𝙉𝙆:👉m.me/100004504180813»̶̶͓͓͓̽̽̽⑅⃝✺

ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝗠𝗖𝗦-𝗕𝗔𝗗𝗢𝗟-𝗕𝗢𝗧-𝟬𝟬𝟳ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿

❂⃝⃘ »̶̶͓͓͓̽̽̽𝘽𝙊𝙏 𝘼𝘿𝙈𝙄𝙉»̶̶͓͓͓̽̽̽⑅⃝✺: ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿 𝘽𝘼𝘿𝙊𝙇ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿


❂⃝⃘ »̶̶͓͓͓̽̽̽𝙐𝙋𝙏𝙄𝙈𝙀 𝙑𝙀𝙍𝙎𝙄𝙊𝙉 »̶̶͓͓͓̽̽̽⑅⃝✺: 30.0.1

❂⃝⃘ »̶̶͓͓͓̽̽̽𝙈𝙊𝘿𝙄𝙁𝙄𝙀𝘿 𝘽𝙔: 𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿 𝘽𝘼𝘿𝙊𝙇 𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔

❂⃝⃘ »̶̶͓͓͓̽̽̽𝙏𝙊𝘿𝘼𝙔 𝙄𝙎 📜: ${juswa} 

❂⃝⃘ »̶̶͓͓͓̽̽̽𝘽𝙊𝙏 𝙄𝙎 𝙍𝘼𝙉𝙄𝙉𝙂 𝙏𝙄𝙈𝙀⌚ ${hours}:${minutes}:${seconds}.

★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★

✫𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝙐𝙨𝙞𝙣𝙜 ${global.config.BOTNAME}\n\n❂⃝⃘ »̶̶͓͓͓̽̽̽𝘽𝙊𝙏-𝙊𝙒𝙉𝙀𝙍»̶̶͓͓͓̽̽̽⑅⃝✺\n\n ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };