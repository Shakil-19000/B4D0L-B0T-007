const API = "https://textproapi.emonapi.repl.co";

module.exports.config = {
  name: "edit",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BADOL-KHAN",
  description: "Edit pro",
  commandCategory: "text edit",
  usages: "BADOL-KHAN<text>",
  cooldowns: 10,
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const qs = require("querystring");

  const number = args[0];
  const text = args.slice(1).join("");

  if (!number || isNaN(number)) {
    return api.sendMessage("╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n★𝗨𝘀𝗲 /𝗹𝗼𝗴𝗼 [𝗻𝗼.] [𝘁𝗲𝘅𝘁]\n\n 𝗘𝘅𝗮𝗺𝗽𝗹𝗲:\n\n /𝙀𝙙𝙞𝙩𝟭+𝟮+𝟯 𝗕𝗔𝗗𝗢𝗟-𝗞𝗛𝗔𝗡 \n\n𝗧𝗼𝘁𝗮𝗹 𝗟𝗼𝗴𝗼 𝗟𝗶𝗺𝗲𝘁 𝟮𝟱𝟬+★\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯", event.threadID, event.messageID);
  }

  const apiEndpoint = `/api/textpro?number=${number}&text=${text}`;
  const pathSave = __dirname + `/cache/server2.png`;

  api.sendMessage("", event.threadID, event.messageID);

  axios
    .get(API + apiEndpoint, { responseType: "arraybuffer" })
    .then((data) => {
      const imageBuffer = data.data;
      fs.writeFileSync(pathSave, Buffer.from(imageBuffer));
      api.sendMessage(
        {
    body: `╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n ★𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟 𝗔𝗣𝗜★\n\n★𝗖𝗥𝗘𝗗𝗜𝗧 𝗕𝗬 𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗕𝗔𝗗𝗢𝗟★\n\n ★𝗕𝗢𝗧-𝗡𝗔𝗠𝗘★\n\n ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝗠𝗖𝗦-𝗕𝗔𝗗𝗢𝗟-𝗕𝗢𝗧-𝟬𝟬𝟳ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿ \n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯`,
          attachment: fs.createReadStream(pathSave),
        },
        event.threadID,
        () => fs.unlinkSync(pathSave)
      );
    })
    .catch((error) => {
      let err;
      if (error.response) {
        err = JSON.parse(error.response.data.toString());
      } else {
        err = error;
      }
      return api.sendMessage("⚠️𝗘𝗥𝗥𝗢𝗥⛔\n\n ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝗠𝗖𝗦-𝗕𝗔𝗗𝗢𝗟-𝗕𝗢𝗧-𝟬𝟬𝟳ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿\n\n★𝗦𝗲𝗿𝘃𝗲𝗿 𝗕𝘂𝘀𝘆😓🤦‍♂️★", event.threadID, event.messageID);
    });
};