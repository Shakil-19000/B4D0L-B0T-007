 module.exports.config = {
	name: "rules",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "BADOL-KHAN", //don't change the credits please
	description: "group and box ruls",
	commandCategory: "rules",
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
var link = ["https://i.imgur.com/jEqKLyr.jpg",
        
            "https://i.imgur.com/jEqKLyr.jpg", 
            
            "https://i.imgur.com/jEqKLyr.jpg",

"https://i.imgur.com/jEqKLyr.jpg",
            
            "https://i.imgur.com/jEqKLyr.jpg"];
  
var callback = () => api.sendMessage({body:`╭•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╮\n\nꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸআসসালামু আলাইকুমꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿\n

•—»গ্রুপ এর কিছু রুলস আছে, এগুলো হয়তো অনেকেই জানেন না যারা জানে না তারা জেনে রাখেন💥

<-------------------------------------------------------------------------->

১) কোন প্রকার বাঝে কথা বলা যাবে না !⚠️

২) ইসলাম এর বিরুদ্ধে কোনো কথা বলা জাবে নাহ  ! ⚠️

৩) কোন পর্ণ স্ক্রিনশট কিংবা লিংক দেওয়া  যাবে না !⚠️

৪) কাউকে অপমানিত করে গালি দেওয়া যাবে না !⚠️

৫) এখানে সবাই প্রিয় ভাই বন তো এখানে খারাপ কথা থেকে বিরত থাকেন !⚠️

৬)আপনি রোবটের ব্যবহার করা না জানলে help চান আডমিন এর থেকে তাও বাজে কমান্ড কইরেন নাহ 🫡

৭) group এ কল করা যাবে না!⚠️

৮) spam করা যাবে না! ⚠️

৯) বট নিয়ে কোন প্রকার টেক্সট করা যাবে না.. আর /help ফাইলে এ যেই গুলা  আসে এইগুলা শুধু ব্যাবাহর করবেন 🙂!!

১০)কোন বট এড করা যাবে না বট নিয়ে কোন প্রকার সস ( screen short) দেওয়া বা চাওয়া যাবে না 🙃!⚠️

১১)  গ্রুপে আড্ডা দেওয়া যাবে কিন্তু কোন প্রকার লিংক শেয়ার করা যাবে না কেবল মাএ facebook /tiktok/Instagram /youtube/ এই গুলা লিংক দেওয়া যাবে ★কোন  browser এর লিংক বা সস দেওয়া যাবে না! ⚠️

১২) গ্রুপ এ কোনো প্রকার টিউটরিয়াল ভিডিও এর স্ক্রিনশট বা লিংক দেওয়া যাবে নাহ ✨«—•

১৩)আর  গ্রুপে কোন কিছু ইনফরমেশন পরিবর্তন করা যাবে না ..without permission! ⚠️

<-------------------------------------------------------------------------->

•—»✨ যারা এই রুলস  গুলা মেনে চলতে পারবেন তারা group থাকেন 🌺আর যারা মানতে পারবেন না লিফট নিবেন, আর রুলস না মানলে সম্মান এর সাথে ব্যান & কিক দেওয়া হবে 🌸༅༎•─

 <-------------------------------------------------------------------------->

•—»✨ যারা বট সম্পক  বুঝেন না, তারা এডমিন কে মেনশন দিয়ে বলবেন🌸༅༎•─

★এডমিন এর ফেসবুক আইডি কোনো হেল্প লাগলে নক দিতে পারেন 

https://www.facebook.com/profile.php?id=100005607185385

<------------------------------------------------------------------------->___সাথেই থাকুন🌸༅༎•─

ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝘽𝙊𝙏-𝙊𝙒𝙉𝙀𝙍-𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿-𝘽𝘼𝘿𝘼𝙇ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿

─༅༎•🌺ধন্যবাদ সবাইকে🌸༅༎•─\n\n╰•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╯`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };