module.exports.config = {
	name: "gupemoji",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "BADOL-KHAN",
	description: "Change your group Emoji",
	commandCategory: "Box", 
	usages: "groupemoji [name]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("You have not entered Emoji 💩💩", event.threadID, event.messageID)
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(`★গ্রুপ ইমজি চেঞ্জ ডান★ ${emoji}`, event.threadID, event.messageID));
}