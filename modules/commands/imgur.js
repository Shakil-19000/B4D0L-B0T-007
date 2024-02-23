module.exports.config = {
  name: "imgur",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BADOL-KHAN",
  description: "Create Image&video link",
  commandCategory: "Image",
  cooldowns: 1,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args }) => {
  const axios = global.nodemodule['axios'];
  const vid = (
    await axios.get(
      'https://i.imgur.com/NPZc3QM.jpeg',
      { responseType: 'stream' }
    )
  ).data;
  const linkanh = event.messageReply.attachments[0].url || args.join(" ");
  if (!linkanh)
    return api.sendMessage('Please give feedback or enter the image or video link', event.threadID, event.messageID);
  try {
    const allPromise = (await Promise.all(event.messageReply.attachments.map(item => axios.get(`https://api.nayan-project.repl.co/imgurv2?link=${encodeURIComponent(item.url)}`)))).map(item => item.data.uploaded.image);


    return api.sendMessage({
      body: `╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐌𝐫-𝐁𝐀𝐃𝐎𝐋-𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘-𝐉𝐫\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n` + allPromise.join('"\n\n"'),
      attachment: vid
    }, event.threadID, event.messageID);
  } catch (e) {
    return api.sendMessage('An error occurred while executing the command', event.threadID, event.messageID);
  }
};