/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;Rqo2UKAK#750HoEfI0uYInQ1rLK69UryakImQ7u0DPQYkCbUvC1o' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://akiya_user:TCh05l5FzjhL3pbLFgd5fgCHP5GKe3fX@dpg-cl53382l7jac73cb1c6g-a.frankfurt-postgres.render.com/akiya'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94767973534'

global.OWNER_NAME = '😈𝗚𝗔𝗠𝗜𝗡𝗚ᴬᴷᴵʸᴬ2023😈'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '😈𝗚𝗔𝗠𝗜𝗡𝗚ᴬᴷᴵʸᴬ2023😈'

global.FOOTER = '🄼🅁 😈🄰🄺🄸🅈🄰😈'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@😈αƙιყα😈' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = ',' // Bot Prefix

global.CAPTION = '😈𝗚𝗔𝗠𝗜𝗡𝗚ᴬᴷᴵʸᴬ2023😈' // Caption

global.ALIVELOGO = 'https://i.imgur.com/NjLCWck.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = '😈𝗚𝗔𝗠𝗜𝗡𝗚ᴬᴷᴵʸᴬ2023😈 is online ' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = false // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = False //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IRdyJY5P4sF5BhtP5PIdHH' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: AKIYA miusic" //ur yt chanel name
global.socialm = "GitHub: akila sandaruwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location
