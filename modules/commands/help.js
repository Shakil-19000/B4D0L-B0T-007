  function formatFont(text) {
    const fontMapping = {
      a: "𝖺",
      b: "𝖻",
      c: "𝖼",
      d: "𝖽",
      e: "𝖾",
      f: "𝖿",
      g: "𝗀",
      h: "𝗁",
      i: "𝗂",
      j: "𝗃",
      k: "𝗄",
      l: "𝗅",
      m: "𝗆",
      n: "𝗇",
      o: "𝗈",
      p: "𝗉",
      q: "𝗊",
      r: "𝗋",
      s: "𝗌",
      t: "𝗍",
      u: "𝗎",
      v: "𝗏",
      w: "𝗐",
      x: "𝗑",
      y: "𝗒",
      z: "𝗓",
      A: "𝖠",
      B: "𝖡",
      C: "𝖢",
      D: "𝖣",
      E: "𝖤",
      F: "𝖥",
      G: "𝖦",
      H: "𝖧",
      I: "𝖨",
      J: "𝖩",
      K: "𝖪",
      L: "𝖫",
      M: "𝖬",
      N: "𝖭",
      O: "𝖮",
      P: "𝖯",
      Q: "𝖰",
      R: "𝖱",
      S: "𝖲",
      T: "𝖳",
      U: "𝖴",
      V: "𝖵",
      W: "𝖶",
      X: "𝖷",
      Y: "𝖸",
      Z: "𝖹"
    };

    let formattedText = "";
    for (const char of text) {
      if (char in fontMapping) {
        formattedText += fontMapping[char];
      } else {
        formattedText += char;
      }
    }
    return formattedText;
  }

  module.exports.config = {
    name: "help",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "BADOL-KHAN",
    description: "commands list",
    commandCategory: "system",
    usages: "module name",
    cooldowns: 1,
    envConfig: {
      autoUnsend: false,
      delayUnsend: 300
    }
  };

  module.exports.languages = {
    "en": {
      "moduleInfo": "★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\n•╰┈► %1 ◄┈╯•\n%2\n\n𒁍❯Usage: %3\n𒁍❯ Category: %4\n𒁍❯ Waiting time: %5 seconds(s)\n𒁍❯ Permission: %6\n\nModule code by %7\n\n★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★",
      "helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
      "user": "User",
      "adminGroup": "Admin group",
      "adminBot": "Admin bot"
    }
  };

  module.exports.handleEvent = function ({ api, event, getText }) {
    const { commands } = global.client;
    const { threadID, messageID, body } = event;

    if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
    const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
    if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const command = commands.get(splitBody[1].toLowerCase());
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
  };

  module.exports.run = function({ api, event, args, getText }) {
    const axios = require("axios");
    const request = require('request');
    const fs = require("fs-extra");
    const { commands } = global.client;
    const { threadID, messageID } = event;
    const command = commands.get((args[0] || "").toLowerCase());
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

    if (args[0] == "all") {
      const command = commands.values();
      var group = [],
        msg = "";
      for (const commandConfig of command) {
        if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
        else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
      }
      group.forEach(commandGroup => msg += `☂︎ ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} \n${commandGroup.cmds.join(' • ')}\n\n`);

      return axios.get('https://apikanna.maduka9.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let admID = "100004504180813";

        api.getUserInfo(parseInt(admID), (err, data) => {
          if (err) {
            return console.log(err)
          }
          var obj = Object.keys(data);
          var firstname = data[obj].name.replace("@", "");
          let callback = function () {
            api.sendMessage({
              body: `Commands list\n\n` + msg + `\nSpamming the bot are strictly prohibited\n\nTotal Commands: ${commands.size}\n\nDeveloper:\n${firstname}`,
              mentions: [{
                tag: firstname,
                id: admID,
                fromIndex: 0,
              }],
              attachment: fs.createReadStream(__dirname + `/cache/472.${ext}`)
            }, event.threadID, (err, info) => {
              fs.unlinkSync(__dirname + `/cache/472.${ext}`);
              if (autoUnsend == false) {
                setTimeout(() => {
                  return api.unsendMessage(info.messageID);
                }, delayUnsend * 1000);
              } else return;
            }, event.messageID);
          }
          request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/472.${ext}`)).on("close", callback);
        })
      });
    }

    if (!command) {
      const arrayInfo = [];
      const page = parseInt(args[0]) || 1;
      const numberOfOnePage = 15;
      let i = 0;
      let msg = "";

      for (var [name, value] of commands) {
        name += ``;
        arrayInfo.push(name);
      }

      arrayInfo.sort((a, b) => a.data - b.data);

      const first = numberOfOnePage * page - numberOfOnePage;
      i = first;
      const helpView = arrayInfo.slice(first, first + numberOfOnePage);

      for (let cmds of helpView) msg += `│━━━━━━━━━━\n│${++i}➥${cmds}\n`;

      const siu = ` ╔═══════•| 💜 |•═══════╗\n ★𝙈 𝘾 𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳★\n╚═══════•| 💜 |•═══════╝\n\n━❮●❯━━━━━❪💝❫━━━━━❮●❯━\n\n╭━──━─━─━≪✠≫━──━─━─━╮`;

   const text = `╰━─━──━─━≪✠≫━─━──━─━╯\n\n╭━─━──━─━≪✠≫━──━─━─━╮\n│𝐏𝐀𝐆𝐄   (${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)})\n│𝗧𝘆𝗽𝗲: °${prefix}𝗛𝗲𝗹𝗽°\n│𝗧𝗼𝘁𝗮𝗹 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀: ${arrayInfo.length}\n│𝐓𝐎𝐓𝐀𝐋 𝐔𝐒𝐄𝐑 :-  ${global.data.allUserID.length}\n╰━─━──━─━≪✠≫━──━─━─━╯\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n★𝙊𝙒𝙉𝙀𝙍-𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆-𝙇𝙄𝙉𝙆★👇\n\nhttps://www.facebook.com/BADOL.CHOWDHURY.TERA.REAL.ABBU\n\n★𝙊𝙒𝙉𝙀𝙍-𝙈𝙀𝙎𝙎𝙀𝙉𝙂𝘼𝙍𝙀-𝙇𝙄𝙉𝙆★👇\n\nm.me/100004504180813\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nᥬ🥶᭄  ᥬ😳᭄ ᥬ😝᭄  ᥬ🙄᭄ ᥬ😱᭄ ᥬ🤡᭄  ᥬ🥵᭄\n━❮●❯━━━━━❪💝❫━━━━━❮●❯━\n★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n╭•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╮\n\n𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿-𝘽𝘼𝘿𝘼𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔\n\n╰•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╯\n★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
      var link = [
        "https://i.imgur.com/QZHKNSe.jpg",
        "https://i.imgur.com/QZHKNSe.jpg",
        "https://i.imgur.com/QZHKNSe.jpg",
        "https://i.imgur.com/QZHKNSe.jpg",
        "https://i.imgur.com/QZHKNSe.jpg"
      ]
      var callback = () => api.sendMessage({ body: siu + "\n\n" + msg + text, attachment: fs.createReadStream(__dirname + "/cache/leiamnashelp.jpg") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashelp.jpg"), event.messageID);
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashelp.jpg")).on("close", () => callback());
    }

    const leiamname = getText("moduleInfo", command.config.name, command.config.description, `${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits);

    var link = [
      "https://i.imgur.com/QZHKNSe.jpg",
    ]
    var callback = () => api.sendMessage({ body: leiamname, attachment: fs.createReadStream(__dirname + "/cache/leiamnashelp.jpg") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashelp.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashelp.jpg")).on("close", () => callback());
  };