import fetch from 'node-fetch';
import moment from 'moment-timezone';

const handler = async (m, { conn }) => {
  const name = await conn.getName(m.sender);
  const nombreBot = "GonBot-v1";

  // Fecha y hora
  const date = moment().tz('America/Tegucigalpa').format('DD/MM/YYYY hh:mm A');
  const tiempoActivo = process.uptime() * 1000;
  const uptime = clockString(tiempoActivo);

  // Obtener imagen de menú desde base de datos global
  const menuImg = global.db.data.menu?.img || 'https://cdn.russellxz.click/808efb6d.jpeg';

  // Texto personalizado del menú
  const finalText = `
┏━━━━━━━━━━━━━━━━━━┓
┃  🤖 *${nombreBot}*
┃  👤 𝙃𝙤𝙡𝙖, *${name}*
┃  ⏱️ 𝘼𝙘𝙩𝙞𝙫𝙤 𝙃𝙖𝙘𝙚: *${uptime}*
┃  📅 𝙁𝙚𝙘𝙝𝙖: *${date}*
┗━━━━━━━━━━━━━━━━━━┛

── ⬤𝙈𝙀𝙉𝙐 𝘿𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊⬤ ──

> ᴍᴀs ɪɴғᴏ ᴅᴇ ɢᴏɴʙᴏᴛ-ᴠ1 
https://erenxsit.vercel.app

╭─「 🔰 𝙎𝙐𝘽-𝘽𝙊𝙏𝙎 」
│ ✎ .bots  
│ ✎ .qr  
│ ✎ .code  
│ ✎ .setbanner  
│ ✎ .setname  
│ ✎ .sublist  
╰───────────────

╭─「 💰 𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼 」
│ ✎ .bal  
│ ✎ .eboard  
│ ✎ .crimen  
│ ✎ .depositar  
│ ✎ .slut  
│ ✎ .unreg  
│ ✎ .work 
╰───────────────

╭─「 📥 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 」
│ ✎ .play  
│ ✎ .tiktokvid  
│ ✎ .tiktok <enlace>  
│ ✎ .play2  
│ ✎ .ytv  
│ ✎ .ytmp4  
│ ✎ .playaudio  
│ ✎ .mp4  
│ ✎ .ytmp4doc  
│ ✎ .ig <url>  
╰───────────────

╭─「 🧰 𝙃𝙀𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎 」
│ ✎ .lid 
│ ✎ .hd  
│ ✎ .deepseek  
│ ✎ .ss <página web>  
│ ✎ .tourl
│ ✎ .apk
╰───────────────

╭─「 👑 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 」
│ ✎ .dsowner  
│ ✎ .sendmeme  
│ ✎ .update  
╰───────────────

╭─「 📚 𝙄𝙉𝙁𝙊𝙍𝘼𝙈𝙄𝙊𝙉 」
│ ✎ .creador  
│ ✎ .servers  
│ ✎ .sugerir < cosas pal botsito >  
╰───────────────

╭─「 🎲 𝙂𝘼𝘾𝙃𝘼 𝘼𝙉𝙄𝙈𝙀 」
│ ✎ .infoanime
│ ✎ .c  
│ ✎ .harem < @usuario >  
│ ✎ .rw
│ ✎ .waifu
╰───────────────

╭─「 👥 𝙂𝙍𝙐𝙋𝙊 」
│ ✎ .on welcome  
│ ✎ .off welcome  
│ ✎ .on antilink  
│ ✎ .off antilink  
│ ✎ .kick  
│ ✎ .personalidad  
│ ✎ .top *<texto>*  
│ ✎ .invocar *<mensaje opcional>*  
╰───────────────

╭─「 🔎 𝘽𝙐𝙎𝙌𝙐𝙀𝘿𝘼 」
│ ✎ .imagen *<búsqueda>*  
│ ✎ .pinterest  
│ ✎ .tiktoksearch  
│ ✎ .yts  
╰───────────────

╭─「 🖼️ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 」
│ ✎ .sticker  
│ ✎ .stickersearch *<texto>*  
│ ✎ .toimg (reply)  
╰───────────────

╭─「 🤖 𝙄𝘼 」
│ ✎ .adonix <pregunta>  
│ ✎ .dalle <texto>  
│ ✎ .iavoz <texto>  
│ ✎ .ask
│ ✎ .gemini 
╰───────────────

╭─「 📢 𝘾𝘼𝙉𝘼𝙇𝙀𝙎 」
│ ✎ .nuevafotochannel  
│ ✎ .nosilenciarcanal  
│ ✎ .silenciarcanal  
│ ✎ .noseguircanal  
│ ✎ .seguircanal  
│ ✎ .avisoschannel  
│ ✎ .resiviravisos  
│ ✎ .inspect  
│ ✎ .inspeccionar  
│ ✎ .eliminarfotochannel  
│ ✎ .reactioneschannel  
│ ✎ .reaccioneschannel  
│ ✎ .nuevonombrecanal  
│ ✎ .nuevadescchannel  
╰───────────────

> 🚀 ᴅᴇsᴀʀʀᴏʟʟᴀᴅᴏ ᴘᴏʀ ᴘʀᴏʏᴇᴄᴛ ɢᴏɴʙᴏᴛᴠ1
`

  await conn.sendMessage(m.chat, { image: { url: menuImg }, caption: finalText.trim() }, { quoted: m });
};

handler.command = ['menu', 'help', 'ayuda'];
export default handler;

// Función para mostrar uptime en formato legible
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, 'h', m, 'm', s, 's'].join(' ');
}