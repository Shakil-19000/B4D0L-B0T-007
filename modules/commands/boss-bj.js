const fs = require("fs");
module.exports.config = {
name: "badolbg",
version: "1.0.1",
hasPermssion: 0,
credits: "BADOL-KHAN", 
description: "admin.mention",
commandCategory: "no prefix",
usages: "badolbg",
cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, __GLOBAL }) {
  const axios = require("axios")
  const res = await axios.get(`https://api.r4h4d-1.repl.co/cap1`);
  var data = res.data.data;
  let cp = `${res.data.title.title}`;
  var { threadID, messageID } = event;
  if (event.body.indexOf("Badol vai")==0 || event.body.indexOf("@MOHAMMAD BADAL CHOWDHURY")==0 || event.body.indexOf("বাদল ভাই")==0 || event.body.indexOf("100004504180813")==0) {
    var msg = {
        body: cp,
        attachment: fs.createReadStream(__dirname + `/boss/badol-boss.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

      }