
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VUya7iRhT9lai2tho8gAHpSW2MbcxkzAxRLwq7bMp4olwGmxaLSJHyA1HoDcofJEoUZZOf4hMiv6FfIiWdF2+qfKt069xzz7kfQRTjFPVRAVofQULwEVJUbmmRINAC7cx1EQEscCCFoAX6Y7mzysJcryJO8qZpNzwsxdUxwN1Y4pvbijvNbTyhmxM/fwAXFiTZNsD2FxLO9qq1muBczef43KAdZmu0kWVzSJ3bh5nKT9OuuvCq2BCqD+BSZoSY4MhTkx0KEYFBHxVjiMnb4MPRYEfiaG06k1596utWMjNcxxAnGm0cnUnN0TKYyq6hhae3wW8SZuoMuhy/MCHC8TLoa/IEM/UBxVNid/IhDHtRtKj0IusJfoq9CDmGgyKKafFm3i01UPaFsOdOsNNMiIuPHdKm7orm6RYHncrEqs2WjOjjcP024N7JktJFvT2wYqXTVrcdww6dMedoidEdbuB0yfvrjR3sePlvwMfkRSv7/8O70tU2XNQ2j2qjdlC6CwEJutY7FKrfJ143bybnIs6aTSVR38h7sDtPJPPQEKDWE9dbhvZr+bAOe1OPp557mnfm/mISFCPvbLzChzQjX0JZFZd0wY2CbF4kqjmXhZ6rrsfVLWMxPW51rI6t8fJ0Hu8HUZ7lDFc39v01r0p1/byQFFHqJ6d9mPC6P11I1fl+wDWWeOhbD48V7VFhOKDFXVhAkIdTSiDFcVTGpBoLoHOcIpsg+sgu4CZhw8xkw8jHZpUrTvXhaMlHBUfx0N+TrY0H51x2CyjsvAfAgoTENkpT5HRxSmNSDFGaQg+loPX1BxZEKKdPfStfEzgWuJikdB5lSRBD56WpL4fQtuMsotMispVygwhoVV/DiFIceWlJYxZBYu/wESk7SFPQcmGQos8FIoIc0KIkQ59Nq8ROyXt9VDdX6mwKWBA+9gM7oAX4mig1BakmCLzUarxP353KrDBJ3kWIAhZEsLwM7rfrj/fb9af77dO3X91v1+/vt+vP99v19/vt+svz+sf9dv2tPPzhKfDpm+f1u/vt+mt5AbAgeHyVE2o1sVlvSM1mvSY2Wo33Zfzyud4SnoMoxEFa6rinuw3H0tW+1BVsUddl25MVTwav/Lzo7KmR0nxeD9b82meUyklT9KArbzyRX3turV2kfjPy/YXK95ZmuH/4hySgBRaeBnfccmiqNpcIXL2w9ulssG50R1O+rofZcSwM0UQkymzFbNxYHBabmp1pG/PE7LHm28VopUv5vnE4HJRIYvprpuK3S1GywEFHbKO/PlYZGrtzzLhWFohmp4+X3YmaHndY0Bh7FAh1gnVbXJl7kURZyKzkPFooaTONvF7fqq38MUTp2iNNqbIWOmO/X2FCT8CnJwc8OjB4nnz4UZxl58tfF6PHQfLc4v9SwhPuUq/VC/uXFM+T6V/c3UacZibLUWhUvGOjbe2SyUlfm6PQ6DKWTYzKRhS5yQgv/CQBl8sHFiQBpG5MQtACabiFgAUkzkr1G5Ebf2nayYahyN6orDqAKZVfHTXDIUopDBPQ4iSpJvGCKEosCAs5SaYU0hcjArn89JUGLn8C/6r8bqMHAAA=';
const dev = process.env.OWNER_NUMBER || '254793753327';

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'false';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'false';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '✅ Status Viewed By Keith Md';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '💛,❤️,💜,🤍,💙';

const botPrefix = process.env.PREFIX || ".";
const botAuthor = process.env.AUTHOR || "AndalaTheMr";
const botexpiration = process.env.BOT_EXPIRATION_DATE || "11/03/2027";
const botUrl = process.env.BOT_PIC || "https://files.catbox.moe/9zqj7g.jpg";
const botGurl = process.env.BOT_GURL || "https://github.com/Keithkeizzah/KEITH-MD";
const botTimezone = process.env.BOT_TIMEZONE || "Africa/Nairobi";
const botBotname = process.env.BOTNAME || "KEITH-MD";
const botPackname = process.env.BOT_PACKNAME || "KEITH-MD";
const botMode = process.env.BOT_MODE || "public";
const botSessionName = process.env.BOT_SESSION_NAME || "keith-md";

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database = DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,
  dev,
  session, 
  autostatusAutoviewStatus,
  autostatusAutoLikeStatus,
  autostatusAutoReplyStatus,
  autostatusStatusReplyText,
  autostatusStatusLikeEmojis,
  botPrefix,
  botAuthor,
  botUrl,
  botGurl,
  botTimezone,
  botBotname,
  botexpiration,
  botPackname,
  botMode,
  botSessionName
};
