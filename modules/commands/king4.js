module.exports.config = {
    name: "npm",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "BADOL-KHAN",
    description: "NPM Package information",
    commandCategory: "npm",
    usages: "/npm[packageName]",
    usePrefix: false,
    cooldowns: 2,
};

module.exports.run = async function ({ api, event, args }) {
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
        mid = messageID;
    const packageName = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage("Please type a package name...", tid, mid);
    try {
        const res = await axios.get(`https://nome-packages-information.mohammad-rahad.repl.co/npm?packageName=${packageName}`);
        const packageInfo = res.data;


        const response = `NPM Package: ${packageInfo.name}\nLatest Version: ${packageInfo.latestVersion}\nDescription: ${packageInfo.description}\nAPI backed by: ${packageInfo.apiBacked}\nLicense: ${packageInfo.license}\nAuthor: ${packageInfo.author}\nHomepage: ${packageInfo.homepage}\nKeywords: ${packageInfo.keywords.join(', ')}\nMaintainers: ${packageInfo.maintainers.join(', ')}\nReadmeFilename: ${packageInfo.readmeFilename}\nRepository: ${packageInfo.repository}\nBugs: ${packageInfo.bugs}`;

        api.sendMessage(response, tid, (error, info) => {
            if (error) {
                console.error(error);
            }
        }, mid);
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching the data.", tid, mid);
    }
};