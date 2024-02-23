module.exports.config = {
  name: "gif",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "Allaha text gif",
  commandCategory: "Text gif",
  usages: "gif",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/lvZf9gM.gif",
"https://i.imgur.com/54xlZF2.gif",
"https://i.imgur.com/nZmorFf.gif",
"https://i.imgur.com/j8xyrOR.gif",
  ];
	  var callback = () => api.sendMessage({body:`•—»✨ [ 𝗔𝗹𝗹𝗮𝗵 𝗚𝗜𝗙 ] ✨«—•\n•┄┅════❁🌺❁════┅┄•\n✿┼─🤗🦋🥀
••  𝐈 𝐇𝐚𝐯𝐞 𝐍𝐨 𝐂𝐨𝐦𝐩𝐥𝐚𝐢𝐧 𝐀𝐛𝐨𝐮𝐭 𝐌𝐲 𝐥𝐢𝐟𝐞,🥰😇
𝐀𝐥𝐡𝐮𝐦𝐝𝐮𝐥𝐢𝐥𝐥𝐚𝐡 𝐟𝐨𝐫 𝐞𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠••🖤🖤

-প্রতিটা ব্যর্থতা থেকে জন্ম হয় সফলতা🌼
-         আর প্রতিটা আঘাত থেকে জন্ম হয় অভিজ্ঞতা__°°🥰🥀\n•┄┅════❁🌺❁════┅┄•\nএর থেকে সুন্দর ছবি আর কি হতে পারে বলুন 😍💖`,attachment: fs.createReadStream(__dirname + "/cache/5.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.gif")).on("close",() => callback());
   };