module.exports.config = {
	name: "termuxbenner",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "BADOL-KHAN", //don't change the credits please
	description: "Termux benner.",
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
var link = ["https://i.imgur.com/O3MAiKX.jpg",
            "https://i.imgur.com/IWUMdoL.jpg",
            
"https://i.imgur.com/3TOknP1.jpg"];var callback = () => api.sendMessage({body:`🦋🌺 এখানে Termux এর  একটা সুন্দর বেনার দেয়া আছে🦋🌺👇

pkg update -y 

pkg i -y git bc 

git clone --depth=1 https://github.com/mayTermux/myTermux.git 

cd myTermux 

export COLUMNS LINES 

./install.sh 

mayTermux

☘️𝐁 𝐀 𝐃 𝐎 𝐋^𝐁 𝐎 𝐓^0 0 7🌺`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };