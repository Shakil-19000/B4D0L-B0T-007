module.exports.config = {
	name: "botmake",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "BADOL-KHAN", //don't change the credits please
	description: "Mcs Bot Make.",
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
var link = ["https://i.imgur.com/qCpIuVP.jpg",
            "https://i.imgur.com/qCpIuVP.jpg",
            
"https://i.imgur.com/qCpIuVP.jpg"];var callback = () => api.sendMessage({body:`ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝗠𝗖𝗦-𝗕𝗔𝗗𝗢𝗟-𝗕𝗢𝗧-𝟬𝟬𝟳-𝘽𝙊𝙏-𝙈𝘼𝙆𝙀ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿\n\n★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\nꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝘽𝙊𝙏-𝙊𝙒𝙉𝙀𝙍-𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿-𝘽𝘼𝘿𝘼𝙇ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿\n\n★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★

╭────────────────────────➤➤➤
 !
 !➤মেসেঞ্জার রোবট রোবট তৈরি করুন খুব সহজে? 
 !
 !➤প্রথমে Replit. Com এ সাইন আপ করেন। 
 !
 !➤মেসেন্জার বটের এই গিট/রেপেলটা ফোর্ক/Copy করুন।
 !
 !➤[ https://replit.com/@TechnicalBadol/BADOL-BOT-007 ]
 !
 !➤এক্সটেনশনটি ডাউনলোড করে KIWI BWROWSER
 !
 !➤এ ইমপোর্ট করুন। আপনর ফেসবুক আইডি ব্রাউজারে
 !
 !➤লগিন করে FBState কপি করে নিন।
 !
 !➤https://drive.google.com/file/d/1ezjaJ8SlSuSaJC-E8AoHlxS3vIqvZvWw/view?usp=drivesdk
 !
 !➤বটের repl অপেন করুন & appstate.json ফাইলে আপনার
 !
 !➤আইডির fbstate কুকিজটা বসিয়ে রান করে দিন বট।
 !
 !➤✔️ব্যাস আপনিও হয়ে গেলেন বট ডেবলোপার☑️
 !
 !➤যে আইডি তে বট এড করবেন, অলটাইম
 !
 !➤Kiwi browser এ লগিন রাখবেন।
 !
╰─────────────────────────➤➤➤`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };