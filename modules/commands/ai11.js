const axios = require("axios");
const fs = require("fs");

//DONT CHANGE THE CREDITS OR ILL SMACK YOUR SHIT
module.exports.config = {
  name: "bard",
  version: "1",
  usePrefix: false,
  hasPermission: 0,
  credits: "GREY/MODIFIED BY RICKCIEL/API BY SENSUI",
  description: "GREY/MODIFIED BY RICKCIEL/API BY SENSUI",
  commandCategory: "ai",
  usages: "<ask>",
  cooldowns: 5,
};
module.exports.run = async function ({ api, event }) {

  const { threadID, messageID, type, messageReply, body } = event;

  let question = "";

  if (type === "message_reply" && messageReply.attachments[0]?.type === "photo") {
    const attachment = messageReply.attachments[0];
    const imageURL = attachment.url;
    question = await convertImageToText(imageURL);

    if (!question) {
      api.sendMessage(
        "❌ 𝙵𝚊𝚒𝚕𝚎𝚍 𝚝𝚘 𝚌𝚘𝚗𝚟𝚎𝚛𝚝 𝚝𝚑𝚎 𝚙𝚑𝚘𝚝𝚘 𝚝𝚘 𝚝𝚎𝚡𝚝. 𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚛𝚢 𝚊𝚐𝚊𝚒𝚗 𝚠𝚒𝚝𝚑 𝚊 𝚌𝚕𝚎𝚊𝚛𝚎𝚛 𝚙𝚑𝚘𝚝𝚘.",
        threadID,
        messageID
      );
      return;
    }
  } else {
    question = body.slice(5).trim();

    if (!question) {
      api.sendMessage("🧑🏻‍🏫𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗 𝚘𝚛 𝚚𝚞𝚎𝚛𝚢", threadID, messageID);
      return;
    }
  }

  api.sendMessage("🖇𝚂𝚎𝚊𝚛𝚌𝚑𝚒𝚗𝚐 𝚏𝚘𝚛 𝚊𝚗 𝚊𝚗𝚜𝚠𝚎𝚛...", threadID, messageID);

  try {
    const res = await axios.get(
      `https://sensui-useless-apis.codersensui.repl.co/api/tools/bard?question=${encodeURIComponent(//BIG THANKS TO SENSUI FOR PROVIDING THIS API
        question
      )}`
    );

    const respond = res.data.message;
    const imageUrls = res.data.imageUrls;

    if (Array.isArray(imageUrls) && imageUrls.length > 0) {
      const attachments = [];

      if (!fs.existsSync("cache")) {
        fs.mkdirSync("cache");
      }

      for (let i = 0; i < imageUrls.length; i++) {
        const url = imageUrls[i];
        const imagePath = `cache/image${i + 1}.png`;

        try {
          const imageResponse = await axios.get(url, { responseType: "arraybuffer" });
          fs.writeFileSync(imagePath, imageResponse.data);

          attachments.push(fs.createReadStream(imagePath));
        } catch (error) {
          console.error("Error occurred while downloading and saving the image:", error);
        }
      }

      api.sendMessage(
        {
          attachment: attachments,
          body: respond,
        },
        threadID,
        messageID
      );
    } else {
      api.sendMessage('🤖𝐍𝐭𝐫𝐄𝐦𝐬 (𝙱𝚊𝚛𝚍):' + respond, threadID, messageID);
    }
  } catch (error) {
    console.error("Error occurred while fetching data from the Bard API:", error);
    api.sendMessage("An error occurred while fetching data. Please try again later.", threadID, messageID);
  }
};

async function convertImageToText(imageURL) {
  const response = await axios.get(
    `https://api.heckerman06.repl.co/api/other/img2text?input=${encodeURIComponent(imageURL)}`
  );
  return response.data.extractedText;
}
