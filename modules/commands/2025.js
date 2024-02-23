module.exports.config = {
  name: "2025",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BADOL-KHAN",
  description: "happy new year",
  commandCategory: "0",
  cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("January 1, 2025 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`🫰 অগ্রিম শুভেচ্ছা ২০২৫ 🫰\n\n🥵Happy new year ☺️ 😘\n😊সবাইকে নতুন বছরে শুভেচ্ছা🤙\n\n😷আর আপুদের.......... 🫣 I 🍋U.............🫣😘😅 ${days} দিন ${hours} ঘন্টা ${minutes} মিনিট ${seconds} সেকেন্ড মাএ🤙\n\n MUSLIM CYBER SECURITY`, event.threadID, event.messageID);
}