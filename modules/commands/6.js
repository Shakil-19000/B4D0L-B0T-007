module.exports.config = {
  name: "rules2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "নামাজ এ দাওয়াত",
  commandCategory: "game",
  cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("June 6, 2005 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(` 📢  !!--আযান হচ্ছে --!!🕌

°°মানে আল্লাহ তোমাকে ডাকছে°° 🕋

°°সবাই নামাজ পড়ে আসো°°🤲

,,,,নিজে নামাজ পড়ুন অন্যকে নামাজের দাওয়াত দিন,,,,,,,

!!--হতেও তো পারে আল্লাহর সাথে এটাই তোমার শেষ যোগাযোগ --!!💙🥀

   🚸rulse of নামাজের🚸

      🌹সবাইকে ধন্যবাদ🌹



╔════•ೋೋ•════╗ 
 ❤️🌸ছো্ঁট্টো্ঁ_ন্ঁবা্ঁব্ঁ500🌸❤️
╚════•ೋೋ•════╝\n
`, event.threadID, event.messageID);
}