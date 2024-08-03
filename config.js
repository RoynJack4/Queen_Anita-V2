//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "263774918784";
global.owner = process.env.OWNER_NUMBER || "263774918784";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "Yoh!fetching yo data😎👽";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "263774918784";
global.read_status_from = process.env.READ_STATUS_FROM || "263774918784";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUsxdWhjbEpocG5SZkNkT1ZudFkwYUplSmVXTHZNOW9lUFVJRnFSeHdudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1JoS0tjeEZobEUzSGJLR1UzRmZmNWhLeGEzdHc5alJOSURHNjRla215ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSUhlVWRWTWxBOWhZUTVjUHErVWRmQi84dEc3clRrd2I1ZHplU29wOTBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzUnU3TXdhTmNPbGV4TmVzZ1BSWDdDZVlzdXdYQjYwczVLZVg0Z3J2WGhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBUFVqSG9xSVNkU0wwRUxpcGl5WWFqYkJyWHVMcllYdlZRMnFERk9JVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNUMEFSQWRjSzRHc2JMMEpuTXJFa21pYkRFemUrSTJoMzhTZS8xOVNrRlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOExIbzh0NTljRFZQMTRkaFVRR2tiNzZraUxycDVYTkdpV2lKTngyT2pVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVS9reVhlN1ZTcnY0YllxWmV0SFFvdGdBT2E2THJJVlM3RG9PbkFwTXNRVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZXeEJqTDZNS2NlYTlsN2cwSzVrQmI2Z1dlSi83L3QrQ21pRGVoYmNyMnFCK1dMUitYaGxVV2VsWGpNT2pXR2ZZd21iTENtODVKTHQzemwvT2M0MUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJhOHJEK3VsNzE4S0xZRWFDRzlMQjB0K2lJa3F0ZU85L3VEQjNDS3VIZkF3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3dTBqaU5EelJaT2VQX3gtSndfN1J3IiwicGhvbmVJZCI6ImJlMWQ3ZmU3LTdlMGEtNDA2Yi05NDBmLWJmODY0NTMwM2E3YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1c2JPcy9EcGw4dnBYR1YzUnREOHY1b0JKc3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNCs5OUUxTGFFQ2IzUm5qYVR2a2taeFcxRUpjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZDTVJDWExNIiwibWUiOnsiaWQiOiIyNjM3NzQ5MTg3ODQ6MzRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ082QzU5VUVFTldEdHJVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdwOEZiNG5Ca1N0M0xzM0ZIMm9xRTluWHgvUlNDN0kyeTZmTXpPeVFqRTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVFclpQTklabGtiSTArdTVqblJobkJtWnN4N0U4MW1NNEV3V1RkaWFsbjVUVUFhOUY1eDFMc1hVWEtsano3YWtWYXBkM0VEaUpqNnNnWEVwMzhzRURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDTGNOOGYzdG5lTnZrc0s4cmlDVWF1bzRzcTZHM2krTzY4MHovVjU4eU5OQW42TWtsYnRlV3BjYmZRejArOWV5T2VCZkdqTVdYTStZNkxsbVlKV0ZBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc3NDkxODc4NDozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJScWZCVytKd1pFcmR5N054UjlxS2hQWjE4ZjBVZ3V5TnN1bnpNenNrSXhOIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNjQ3MDExfQ=="
module.exports = {
  menu: process.env.MENU || "1,2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`😎👽",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2😎👽",
  packname: process.env.PACK_NAME || "A N I T A😎👽",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2😎👽",
  ownername: process.env.OWNER_NAME || "Mabhosiedu RoynJK😎👽",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A BOSSES😎👽").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
