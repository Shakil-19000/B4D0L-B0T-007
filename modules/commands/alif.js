module.exports.config = {
  name: "alif ar bow",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BADOL-KHAN",
  description: "Random Ảnh BJ",
  commandCategory: "Random inmage",
  usages: "alif ar bow",
  cooldowns: 3,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  var link = [
    "https://i.imgur.com/2PBlIqx.jpg",
    "https://i.imgur.com/Hn99iMk.jpg",
    "https://i.imgur.com/uqof6q8.jpg",
    "https://i.imgur.com/P8uEII1.jpg",
    "https://i.imgur.com/7cnkEjt.jpg",
    "https://i.imgur.com/dyEJCPi.jpg",
    "https://i.imgur.com/mtlrGjB.jpg",
    "https://i.imgur.com/pZ4e3l0.jpg",
    "https://i.imgur.com/3Mp9raS.jpg",
    "https://i.imgur.com/HSJou64.jpg",
    "https://i.imgur.com/gayXMpV.jpg",
    "https://i.imgur.com/O9GX4x8.jpg",
    "https://i.imgur.com/gI1LHzO.jpg",
    "https://i.imgur.com/BJrD55i.jpg",
    "https://imgur.com/CWDtOXZ.jpg",
    "https://imgur.com/s1W3c57.jpg",
    "https://imgur.com/QDlVYDW.jpg",
    "https://imgur.com/6APRg4d.jpg",
    "https://imgur.com/qitBUPy.jpg",
    "https://imgur.com/LwgzvVk.jpg",
    "https://imgur.com/PxVGoau.jpg",
    "https://imgur.com/Tz00ugw.jpg",
    "https://imgur.com/aWStCHt.jpg",
    "https://imgur.com/ERPxzhs.jpg",
    "https://imgur.com/igTYusM.jpg",
    "https://imgur.com/lUsHdL0.jpg",
    "https://imgur.com/P4MwhIi.jpg",
    "https://imgur.com/qP4MZJW.jpg",
    "https://imgur.com/XOQUPus.jpg",
    "https://imgur.com/uRNq4q5.jpg",
    "https://imgur.com/hvhj5Av.jpg",
    "https://imgur.com/19M5A6q.jpg",
    "https://i.imgur.com/FK16e5v.jpg",
  ];
  var callback = () => api.sendMessage({ body: `প্ঁম্ঁ প্ঁম্ঁ খাও আর মটা হও 🌺𝐁𝐀𝐃𝐎𝐋🍃𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘🍁𝐁𝐎𝐓 007🍀`, attachment: fs.createReadStream(__dirname + "/cache/5.jpg") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));
  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/5.jpg")).on("close", () => callback());
};