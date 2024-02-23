var fs = require("fs");
module.exports.config = {
  name: "hát",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BADOL-KHAN",
  description: "bé Dứa sẽ hát cho nghe",
  commandCategory: "war",
  usages: "chuối hát cho nghe cả giọng nam và nữ",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  var sentenses = [		
    {
      body:"E hèm, E hèm nay Dứa giả giọng nam hát ngẫu nhiên cho nghe nhớ || mã : 🙄",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/uporekidekho.mp3")
    },


    {
      body: "E hèm, E hèm nay Dứa giả giọng nam hát ngẫu nhiên cho nghe nhớ || mã : 🤸‍♂️",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/sabdan.mp3")
    },

  {
      body:"E hèm, E hèm nay Dứa giả giọng nam hát ngẫu nhiên cho nghe nhớ || mã : 🙂",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/sentikhaokn.mp3")
    },

  {
      body:"E hèm, E hèm nay Dứa giả giọng nam hát ngẫu nhiên cho nghe nhớ || mã : 🤣",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/pagolnaki.mp3")
    },


  {
      body:"E hèm, E hèm nay Dứa giả giọng nam hát ngẫu nhiên cho nghe nhớ || mã : 😋",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/pompomkaba.mp3")
    },

  {
      body:"E hèm, E hèm nay Dứa giả giọng nam hát ngẫu nhiên cho nghe nhớ || mã : 😁",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/datcokcok.mp3")
    },

    //// dọng nữ

    {
      body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : bye",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/byebye.mp3")
    },

  {
      body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : 💋",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/cummah.mp3")
    },
  {
      body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : 🙈",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/lojja.mp3")
    },
      {
      body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : 🥱",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/goodnight.mp3")
    },
      {
      body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : 😎",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/attitude.mp3")
    },

{
      body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : 🖕",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/anguldekhaw.mp3")
    },

{
      body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu7",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/nu7.mp3")
    },

{
      body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu8",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/nu8.mp3")
    },

    {
      body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu9",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/nu9.mp3")
    },

  {
      body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu10",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/nu10.mp3")
    },

    {
      body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu11",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/nu11.mp3")
    },

    {
      body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu12",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/nu12.mp3")
    },

{
      body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu13",
      attachment: fs.createReadStream("./modules/commands/BADOLMP3/nu13.mp3")
    },

  ];
  api.sendMessage(sentenses[Math.floor(Math.random() * parseInt(sentenses.length))], event.threadID, event.messageID);
}