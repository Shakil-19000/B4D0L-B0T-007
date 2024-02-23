module.exports.config = {
	name: "mybadde",
	version: "1.0.0",
	hasPermssion: 0,
  credits: "BADOL-KHAN",
	description: "Countdown to birthday",
	commandCategory: "game",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("January 06, 2024 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n★বাদল চৌধুরী বস এর জন্মদিন প্রর্যন্ত বাকি সময় হলো★\n\n»${days} ★দিন★ \n\n${hours} ★ঘন্টা★ \n\n${minutes} ★মিনিট★ \n\n${seconds} ★সেকেন্ড★\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯`,
event.threadID, event.messageID);
}