module.exports.config = {
  name: "running",
  version: "1.0",
  hasPermission: 0,
  credits: "BADOL-KHAN",
  usePrefix: true,
  description: "Uptime",
  commandCategory: "no prefix",
  usages: "",
  cooldowns: 0,
};

module.exports.run = async ({ api, event }) => {
  let time = process.uptime();
  let hours = Math.floor(time / (60 * 60));
  let minutes = Math.floor((time % (60 * 60)) / 60);
  let seconds = Math.floor(time % 60);
  const timeStart = Date.now();
  
  return api.sendMessage('★বর্তমানে সংযোগ পরীক্ষা করা হচ্ছে. অনুগ্রহপূর্বক অপেক্ষা করুন★⏳', event.threadID, (err, info) => {
    setTimeout(() => {
      const hoursString = hours === 1 ? "hour" : "hours";
      const minutesString = minutes === 1 ? "minute" : "minutes";
      const secondsString = seconds === 1 ? "second" : "seconds";

      const uptimeString = `${hours > 0 ? `${hours} ${hoursString} ` : ''}${minutes > 0 ? `${minutes} ${minutesString} ` : ''}${seconds} ${secondsString}`;

      api.sendMessage(`★পিং📌: ${(Date.now() - timeStart)}ms\n আপটাইম⏰★: ${uptimeString}`, event.threadID, event.messageID);
    }, 200);
  }, event.messageID);
};