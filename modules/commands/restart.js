module.exports.config = {
	name: "resed",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "BADOL-KHAN",
	description: "Restart Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`${global.config.BOTNAME} Bot are now Restarting...`, threadID, () => process.exit(1));
}