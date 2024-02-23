const axios = require("axios");
const fs = require("fs");
const stream = require("stream");

module.exports.config = {
  name: "Pexels",
  version: "1.0.6",
  hasPermission: 0,
  credits: "Islamick Chat",
  description: "Search for images on Pexels",
  commandCategory: "Image Search",
  usages: ["/Pexels [query]"],
  cooldowns: 5,
};

const createReadStreamFromBuffer = (buffer) => {
  const readable = new stream.Readable();
  readable._read = () => {};
  readable.push(buffer);
  readable.push(null);
  return readable;
};

module.exports.run = async ({ api, event, args }) => {
  const { threadID, senderID } = event;

  const getUserInfo = async (api, userID) => {
    try {
      const userInfo = await api.getUserInfo(userID);
      return userInfo[userID].name;
    } catch (error) {
      console.error(`Error fetching user info: ${error}`);
      return "";
    }
  };

  const userName = await getUserInfo(api, senderID);

  try {
    const query = args.join(" ");
    if (!query) {
      return api.sendMessage("Please provide a search query.", threadID, event.messageID);
    }

    const apiUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}`;
