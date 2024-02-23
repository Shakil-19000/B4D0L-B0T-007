const axios = require("axios");

module.exports = {
  config: {
    name: "uptimer",
    version: "1.0",
    author: "BADOL-KHAN",
    description: "Keep a URL alive using an uptime service.",
    commandCategory: "Utility",
    usages: ["<name> <url>"],
    cooldowns: 5,
  },
  run: async ({ api, event, args }) => {
    const name = args[0];
    const url = args[1];

    if (!name || !url) {
      api.sendMessage("★প্লিজ আপনার নাম + 𝐔𝐓𝐋--লিংক  টাইপ করুন★", event.threadID, event.messageID);
      return;
    }

    try {
      const response = await axios.get(`https://b4d9l-uptime-api.b4d9lap1.repl.co/api/ping?name=${encodeURIComponent(name)}&url=${encodeURIComponent(url)}`);

      if (response.status === 200) {
        api.sendMessage(`★আপনার নাম '${name}'  𝐔𝐑𝐋--লিংক-আপটাইম করা হয়েছে ★\n \n<𝐀𝐏𝐈-𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃-𝐁𝐀𝐃𝐀𝐋-𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐓>`, event.threadID, event.messageID);
      } else {
        api.sendMessage("𝐅𝐚𝐢𝐥𝐞𝐝 𝐓𝐨 𝐌𝐨𝐧𝐭𝐢𝐨𝐫 𝐁𝐚𝐝𝐚𝐥 𝐒𝐞𝐫𝐯𝐞𝐫 𝐓𝐡𝐞 𝐔𝐑𝐋. 𝐏𝐥𝐞𝐚𝐜𝐞 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧 𝐋𝐚𝐭𝐞𝐫✦", event.threadID, event.messageID);
      }
    } catch (error) {
      console.error("Error occurred while pinging the URL:", error);
      api.sendMessage("ইউআরএলটি মনিটরের তালিকায় ইতিমধ্যেই বিদ্যমান✦", event.threadID, event.messageID);
    }
  },
};