module.exports.config = {
	name: "ninja",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁",
	description: "change your nickname to your ninja name",
  usages: "[Name]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${juswa}`);
var morse = res.data.result;
return api.changeNickname(`${morse}`, event.threadID, event.messageID)
}
