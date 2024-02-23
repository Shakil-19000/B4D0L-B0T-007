module.exports.config = {
  name: "bd",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "Islmaick Chat",
  description: "Play over/under",
  commandCategory: "Game",
    usages: "taixiu [over/under] [amount]",
    cooldowns: 0
};
const axios = require('axios');
var bdsd = true;
var tilethang = 2.53;
var tilethangb3dn = 10;
var tilethangb2dn = 5;
var timedelay = 2;
var haisogiong = 2;
var basogiong = 3;
var motsogiong = 1;
function replace(int){
    var str = int.toString();
    var newstr = str.replace(/(.)(?=(\d{3})+$)/g,'$1,');
    return newstr;
}
function getImage(number){
    switch (number){
case 1: return "https://i.imgur.com/cmdORaJ.jpg";
case 2: return "https://i.imgur.com/WNFbw4O.jpg";
case 3: return "https://i.imgur.com/Xo6xIX2.jpg";
case 4: return "https://i.imgur.com/NJJjlRK.jpg";
case 5: return "https://i.imgur.com/QLixtBe.jpg";
case 6: return "https://i.imgur.com/y8gyJYG.jpg";
    }
}
function getRATE(tong){
    if(tong == 4) var rate = 40;
    if(tong == 5) var rate = 35;
    if(tong == 6) var rate = 33.33;
    if(tong == 7) var rate = 25;
    if(tong == 8) var rate = 20;
    if(tong == 9) var rate = 16.66;
    if(tong == 10) var rate = 14.28;
    if(tong == 11) var rate = 12.5;
    if(tong == 12) var rate = 11.11;
    if(tong == 13) var rate = 10;
    if(tong == 14) var rate = 9.09;
    if(tong == 15) var rate = 8.33;
    if(tong == 16) var rate = 7.69;
    if(tong == 17) var rate = 7.14;
    return rate
}
module.exports.run = async function ({ event, api, Currencies, Users, args }) {
    try{
    const moment = require("moment-timezone");
    const format_day = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:ss");
    const { increaseMoney , decreaseMoney } = Currencies;
    const { threadID, messageID, senderID } = event;
    const { sendMessage: HakiraSEND } = api;
    var name = await Users.getNameUser(senderID)
    var money = (await Currencies.getData(senderID)).money
    var bet = parseInt((args[1] == "allin" ? money : args[1]));
    var input = args[0];
    var tong = parseInt(args[2])
    if(!input) return HakiraSEND("•—»✨ 𝗢𝘃𝗲𝗿/𝗨𝗻𝗱𝗲𝗿 ✨«—•\n◈ 𝗪𝘁𝗼𝗻𝗴 𝘄𝗮𝘆 𝘁𝗼 𝘂𝘀𝗲𝗿 𝗜𝘁,𝗠𝗮𝗻:𝟑\n⋄ 𝗨𝘀𝗲𝗿 𝗠𝗮𝗻𝘂𝗮𝗹 !!!\n•—»✨ 𝗧𝗮𝗶𝘅𝗶𝘂 𝗢𝘃𝗲𝗿 𝗢𝗿 𝗨𝗻𝗱𝗲𝗿\n→ 𝐭𝐚𝐢𝐱𝐢𝐮 𝐛𝟑𝐠𝐧\n→ 𝐭𝐚𝐢𝐱𝐢𝐮 𝐛𝟐𝐠𝐧\n→ 𝐭𝐚𝐢𝐱𝐢𝐮 𝐜𝐮𝐨𝐜𝐭𝐨𝐧𝐠\n→ 𝐭𝐚𝐢𝐱𝐢𝐮 𝐜𝐮𝐨𝐜𝐬𝐨\n⋄ 𝗜𝗳 𝗬𝗼𝘂 𝗦𝘁𝗶𝗹 𝗗𝗼𝗻’𝘁 𝗨𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱,𝗧𝗵𝗲 𝗗𝗼𝗻'𝘁 𝘄𝗼𝗿𝗿𝘆🙂", threadID, messageID);
    if(!bet) return HakiraSEND("◈ 𝐁𝐚̣𝐧 𝐍𝐠𝐡𝐢̃ 𝐁𝐚̣𝐧 𝐋𝐚̀ 𝐀𝐢 ?", threadID, messageID);
    if(bet < 20) return HakiraSEND("◈ 𝗪𝗵𝗮𝘁 𝗶𝘀 𝘁𝗵𝗲 𝗺𝗶𝗻𝗶𝗺𝘂𝗺 𝗮𝗺𝗼𝘂𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗶𝘀 𝗺𝗶𝗻𝗶 𝗴𝗮𝗺𝗲 𝟐𝟎$", threadID, messageID);
    if(bet > money) return HakiraSEND("◈ 𝗗𝗼𝗲𝘀 𝗮 𝗹𝗼𝘄𝗹𝘆 𝗲𝗺𝗽𝗹𝗼𝘆𝗲𝗲 𝗹𝗶𝗸𝗲 𝘆𝗼𝘂 𝗵𝗮𝘃𝗲 𝗺𝗼𝗻𝗲𝘆 𝘁𝗼 𝗽𝗹𝗮𝘆 𝘁𝗵𝗶𝘀 𝗴𝗮𝗺𝗲? 𝗚𝗼 𝗯𝗮𝗰𝗸 𝘁𝗼 𝘄𝗼𝗿𝗸 𝗮𝘀 𝗮 𝗰𝗮𝘃𝗲 𝗮𝗻𝗱 𝗺𝗮𝗸𝗲 𝗮 𝗹𝗶𝘃𝗶𝗻𝗴", threadID, messageID);
    if(input == "Talent" || input == "Talent" || input == '-t') var choose = 'Talent'
    if(input == "Foint" || input == "Foint" || input == '-x') var choose = 'Foint'
    if(input == 'b3gn' || input == 'bbgn' || input == 'btgn') var choose = 'b3gn'
    if(input == 'b2gn' || input == 'bdgn' || input == 'bhgn') var choose = 'b2gn'
    if(input == 'cuoctong' || input == 'ct') var choose = 'cuoctong'
    if(input == 'cuocso' || input == 'cs') var choose = 'cuocso'
    var tag = ['tài','xỉu','b3gn','b2gn','cuoctong','cuocso']
    if(!tag.includes(choose)) return HakiraSEND('•—»✨ 𝗢𝘃𝗲𝗿/𝗨𝗻𝗱𝗲𝗿 ✨«—•\n◈ 𝗪𝘁𝗼𝗻𝗴 𝘄𝗮𝘆 𝘁𝗼 𝘂𝘀𝗲𝗿 𝗜𝘁,𝗠𝗮𝗻:𝟑\n⋄ 𝗨𝘀𝗲𝗿 𝗠𝗮𝗻𝘂𝗮𝗹 !!!\n•—»✨ 𝗧𝗮𝗶𝘅𝗶𝘂 𝗢𝘃𝗲𝗿 𝗢𝗿 𝗨𝗻𝗱𝗲𝗿\n→ 𝐭𝐚𝐢𝐱𝐢𝐮 𝐛𝟑𝐠𝐧\n→ 𝐭𝐚𝐢𝐱𝐢𝐮 𝐛𝟐𝐠𝐧\n→ 𝐭𝐚𝐢𝐱𝐢𝐮 𝐜𝐮𝐨𝐜𝐭𝐨𝐧𝐠\n→ 𝐭𝐚𝐢𝐱𝐢𝐮 𝐜𝐮𝐨𝐜𝐬𝐨\n⋄ 𝗜𝗳 𝗬𝗼𝘂 𝗦𝘁𝗶𝗹 𝗗𝗼𝗻’𝘁 𝗨𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱,𝗧𝗵𝗲 𝗗𝗼𝗻'𝘁 𝘄𝗼𝗿𝗿𝘆🙂, messageID)
    if(choose == 'cuoctong' && (tong < 4 || tong > 17)) return HakiraSEND("◈ 𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗯𝗲𝘁 𝘁𝗼𝘁𝗮𝗹🚫\n◈ 𝗗𝗲𝗮𝗿 𝗰𝘂𝘀𝘁𝗼𝗺𝗲𝗿𝘀, 𝗽𝗹𝗲𝗮𝘀𝗲 𝘂𝘀𝗲 𝗮𝗻𝗼𝘁𝗵𝗲𝗿 𝗻𝘂𝗺𝗯𝗲𝗿 𝗶𝗳 𝘆𝗼𝘂 𝘄𝗮𝗻𝘁 𝘁𝗼 𝗽𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝘁𝗲!!", threadID, messageID);
    if(choose == 'cuocso' && (tong < 1 || tong > 6)) return HakiraSEND("◈ 𝗧𝗵𝗲 𝗻𝘂𝗺𝗯𝗲𝗿 𝘆𝗼𝘂 𝗯𝗲𝘁 𝗶𝘀 𝗶𝗻𝘃𝗮𝗹𝗶𝗱 🚫\n◈ 𝗗𝗲𝗮𝗿 𝗰𝘂𝘀𝘁𝗼𝗺𝗲𝗿𝘀, 𝗽𝗹𝗲𝗮𝘀𝗲 𝘂𝘀𝗲 𝗮𝗻𝗼𝘁𝗵𝗲𝗿 𝗻𝘂𝗺𝗯𝗲𝗿 𝗶𝗳 𝘆𝗼𝘂 𝘄𝗮𝗻𝘁 𝘁𝗼 𝗽𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝘁𝗲!!", threadID, messageID);
    const number = [], img = [], bodem = 0;
    for(let i = 1; i < 4; i++){
    var n = Math.floor(Math.random() * 6 + 1) 
    number.push(n)
    var img_ = (await axios.get(encodeURI(getImage(n)), { responseType: 'stream' })).data;
    img.push(img_)
    HakiraSEND(`•—»✨ 𝗢𝘃𝗲𝗿/𝗨𝗻𝗱𝗲𝗿 ✨«—•\n•—»✨ 𝗽𝗹𝗮𝘆𝗲𝗿: ${name}\n•—»✨ 𝗴𝗮𝗺𝗲 𝗧𝘆𝗽𝗲: ${choose}\n•—»✨ 𝘁𝗼𝘂𝗰𝗵𝗶𝗻𝗴 𝘁𝗵𝗲 𝗯𝗼𝗱𝘆 𝗳𝗼𝗿 𝘁𝗵𝗲 𝘀𝗲𝗰𝗼𝗻𝗱 𝘁𝗶𝗺𝗲 ${i}: ${n} `, threadID, messageID)
      await new Promise(resolve => setTimeout(resolve, timedelay * 1000))
}
var total = number[0] + number[1] + number[2];
if(choose == 'cuocso'){
    if(number[0] == tong || number[1] == tong || number[2] == tong){
        var ans = `${tong}`
        var result = 'win'
        var mn = bet * motsogiong 
        var mne = money + mn
    }
    if(number[1] == tong && number[2] == tong || number[0] == tong && number[2] == tong || number[0] == tong && number[1] == tong){
        var ans = `${tong}`
        var result = 'win'
        var mn = bet * haisogiong
        var mne = money + mn
    }
    if(number[0] == tong && number[1] == tong && number[2] == tong){
        var ans = `${tong}`
        var result = 'win'
        var mn = bet * basogiong
        var mne = money + mn
    }
    if(number[0] != tong && number[1] != tong && number[2] != tong){
        var ans = `${tong}`
        var result = 'lose'
        var mn = bet
        var mne = money - mn
    }   
}
if(choose == 'cuoctong'){
    if(total == tong){
        var ans = "cược tổng"
        var result = 'win'
        var mn = bet * parseInt((getRATE(tong)))
        var mne = money + mn
    } else {
        var ans = `${total}`
        var result = 'lose'
        var mn = bet
        var mne = money - mn
    }
}
if(choose == 'b3gn' ){
    if(number[0] == number[1] && number[1] == number[2]) {
        var ans = "identical trio"
        var result = 'win'
        var mn = bet * tilethangb3dn
        var mne = money + mn
    } else {
        var ans = (total >= 11 && total <= 18 ? "Talent" : "Faint") 
        var result = 'lose'
        var mn = bet
        var mne = money - mn
    }
}
if(choose == 'b2gn'){
    if(number[0] == number[1] || number[1] == number[2] || number[0] == number[2]) {
        var ans = "Identical set of two"
        var result = 'win'
        var mn = bet * tilethangb2dn
        var mne = money + mn
    } else {
        var ans = (total >= 11 && total <= 18 ? "Talent" : "Faint") 
        var result = 'lose'
        var mn = bet
        var mne = money - mn
    }
}
if(choose == 'Talent' || choose == 'Faint') {
if(number[0] == number[1] && number[1] == number[2]){
var ans = "Identical trio"
} else {
var ans = (total >= 11 && total <= 18 ? "Talent" : "Faint") 
}
if(number[0] == number[1] && number[1] == number[2]) {
    var result = 'lose'
    var mn = bet
    var mne = money - mn
}
if(ans == choose) {
    var result = 'win'
    var mn = bet * tilethang
    var mne = mn + money
} else {
    var result = 'lose'
    var mn = bet
    var mne = money - mn
}
}
if(result =='lose'){
    decreaseMoney(senderID, mn)
} else if(result == 'win'){
    increaseMoney(senderID, mn)
}
var msg =   `•—»✨𝗢𝘃𝗲𝗿/𝗨𝗻𝗱𝗲𝗿 ✨«—•\n⎔ 𝗴𝗮𝗺𝗲 𝗿𝗲𝘀𝘂𝗹𝘁𝘀 𝗼𝗳: 𝗴𝗲𝗿𝗺 𝗿𝘆𝗼\n•—»✨ 𝗶𝗳 𝘁𝗵𝗲𝗿𝗲 𝗶𝘀 𝗮𝗻 𝗲𝗿𝗿𝗼𝗿,𝗽𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝗶𝘁 𝘁𝗼 𝗮𝗱𝗺𝗶𝗻 !!\n•┄┅════❁🌺❁════┅┄•\n◈ 𝐓𝐢𝐦𝐞: ${format_day}\n◈ 𝐏𝐥𝐚𝐲𝐞𝐫: ${name}\n◈ 𝐋𝐨𝐚̣𝐢 𝐆𝐚𝐦𝐞: ${choose}\n◈ 𝗕𝗲𝘁: ${replace(bet)}\n•┄┅════❁🌺❁════┅┄•\n◈ 𝗗𝗶𝗰𝗲 𝗧𝗶𝗺𝗲 𝟏: ${number[0]}\n◈  𝗗𝗶𝗰𝗲 𝗧𝗶𝗺𝗲 𝟐: ${number[1]}\n◈  𝗗𝗶𝗰𝗲 𝗧𝗶𝗺𝗲 𝟑: ${number[2]}\n•┄┅════❁🌺❁════┅┄•\n•—»✨ 𝘁𝗼𝗻𝗴 𝗽𝗼𝗶𝗻𝘁: ${total}\n•—»✨ 𝗿𝗲𝘀𝘂𝗹𝘁: ${(result == 'win' ? '𝘄𝗶𝗻' : 'Thua')}\n•—»✨ 𝐌𝐨𝐧𝐞𝐲: ${(result == 'win' ? '𝘄𝗶𝗻 : 'Thua')}: ${replace(Math.floor(mn))}$\n•—»✨ 𝗦𝘂𝗿𝗽𝗹𝘂𝘀: ${replace(mne)}$\n 𝘀𝘁𝗮𝘁𝘂𝘀: ${(result == 'win' ? 'Rewards paid' : 'Money Deducted')}`
            HakiraSEND({body:msg,attachment: img}, threadID, messageID)
            if(bdsd == true) {
          var msg =  `•—»✨Pay islamick Chat ✨«—•\nOn Date: ${format_day}\nAccount number : 1373929273\nStutus : ${(result == 'win') ? 'receive money' : 'deduction'} From sic bo game\nAmount: ${replace(mn)}\nThe remaining balance: ${replace(mne)}$\nThank you for trusting and using Pay Islamick Chat service in this bot, ✨`
            HakiraSEND({
                body: msg,
               // attachment: img
            }, senderID)
        }
} catch(e){
    console.log(e)
}}