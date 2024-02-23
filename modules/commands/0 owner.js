module.exports.config = {
  name: "owner",
  version: "1.0.1", 
  hasPermssion: 0,
  credits: "BADOL-KHAN", //don't change the credits please
  description: "Bot Owner info.",
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
var link = ["https://i.imgur.com/uKXM5Oj.jpg",
            "https://i.imgur.com/W9OCv6C.jpg",
            "https://i.imgur.com/uKXM5Oj.jpg",
            "https://i.imgur.com/W9OCv6C.jpg",

"https://i.imgur.com/uKXM5Oj.jpg"];var callback = () => api.sendMessage({body:`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝘽𝙊𝙏-𝙊𝙒𝙉𝙀𝙍-𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿-𝘽𝘼𝘿𝘼𝙇ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿

◢◥▂▂▂▂⭕▂▂▂▂◤◣
   ☘️আমার🌺পরিচয়🌿
◥◢▔▔▔▔⭕▔▔▔▔◣◤    


╰┈►আমি           :🌺✰𝐁𝐀𝐃𝐎𝐋^𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘★🌺↙️
╰┈►ডাক নাম     :🍀🌺বাদল↙🌺
╰┈►ধর্ম              :🍀ইসলাম🕌🌺
╰┈►বাড়ি            :🍀খুলনা জেলায়🌍☘️
╰┈►থানার নাম   :🌺পাইকগাছা থানা🏟️☘️
╰┈►গ্রামের নাম  :🍀চাঁদখালি বাজার🏞️🌺
╰┈►পেশা           :🌺নীল আকাশে গাড়ি চালাই🚜🍀
╰┈►বয়স            :🍀২৫+ চলছে✅🌺
╰┈►উচ্চতা         :🌺৫ ফুট ৬ইন্সি🚻🍀
╰┈►ওজন          : 🍀৫০ কেজি🚷🌺
╰┈►রক্ত             :☘️B Pojetib🚹🌺
╰┈►গায়ের রং    :🌺পাতিলের মতো♨️🍀
╰┈►ধূমপান        :🌺করি হালকা🚭🍀
╰┈►বেয়াদবি      :🍀হালকা♨️🌺
╰┈►ধন সম্পদ    :🌺জাতীয় ফকির⚠️🍀
╰┈►ভালোবাসা   :☘️কপাল ফুটা♨️🍁
\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n╰┈►রোবট ওয়ার্নার কে কন্টাক করুন★\n\n╰┈►𝙈𝙀𝙎𝙎𝙀𝙉𝙂𝙀𝙍-𝙇𝙄𝙉𝙆★\n\n╰┈►m.mem100004504180813\n\n╰┈►𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆-𝙇𝙄𝙉𝙆★\n\nhttps://www.facebook.com/BADOL.CHOWDHURY.TERA.REAL.ABBU\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };