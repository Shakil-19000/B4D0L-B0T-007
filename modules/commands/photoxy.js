const APIURL = "https://sakibin.sinha-apiv2.repl.co";
const APIKEY = "SAKI-BIN-PR2ACR";
module.exports.config = { usePrefix: true,
  name: "photo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BADOL-KHAN",
  description: "BADAL MCS",
  commandCategory: "text edit",
  usages: "/cover",
  cooldowns: 10,
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const qs = require("querystring");
  const moment = require("moment");
	var time= moment.tz("Asia/Dhaka").format("LLLL");
  
  const number = args[0];
  const text = args.slice(1).join("");

  if (!number || isNaN(number)) {
    return api.sendMessage("🤙Use /text [no.] [text]\n🤙Example:\n  /text 22 BADAL\nTotal Text limit 200+", event.threadID, event.messageID);
  }

  const apiEndpoint = `/api/textpro?number=${number}&text=${text}&apikey=${APIKEY}`;
  const pathSave = __dirname + `/cache/server2.png`;

  api.sendMessage("", event.threadID, event.messageID);

  axios
    .get(APIURL + apiEndpoint, { responseType: "arraybuffer" })
    .then((data) => {
      const imageBuffer = data.data;
      fs.writeFileSync(pathSave, Buffer.from(imageBuffer));
      api.sendMessage(
        {
    body: `🤙photo Edit Done by B4D9L API🤙\n🤸‍♂️Your text: ${text} \n🤸‍♂️Edit Number: ${number}\n➡️Time: ${time}`,
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
      return api.sendMessage("ERROR ❌\nB4D9L Server Busy🤦‍♂️", event.threadID, event.messageID);
    });
};