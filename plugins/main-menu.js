import moment from 'moment-timezone'

const handler = async (m, { conn }) => {
  try {
    const nombreBot = 'GonBot-v1'
    const name = await conn.getName(m.sender)
    const uptime = clockString(process.uptime() * 1000)
    const date = moment().tz('America/Tegucigalpa').format('DD [de] MMMM [de] YYYY')

    // URL por defecto o la que esté guardada en db
    const menuImg = (global.db.data.menu && global.db.data.menu.img) 
      ? global.db.data.menu.img 
      : 'https://cdn.russellxz.click/808efb6d.jpeg'

    const text = `
┏━━━━━━━━━━━━━━━━━━┓
┃  🤖 *${nombreBot}*
┃  👤 Hola, *${name}*
┃  ⏱️ Activo Hace: *${uptime}*
┃  📅 Fecha: *${date}*
┗━━━━━━━━━━━━━━━━━━┛

── ⬤ MENU DE COMANDOS ⬤ ──

> Más info de GonBot-v1: https://erenxsit.vercel.app

╭─「 🔰 SUB-BOTS 」
│ ✎ .bots  
│ ✎ .qr  
│ ✎ .code  
│ ✎ .setbanner  
│ ✎ .setname  
│ ✎ .sublist  
╰───────────────

╭─「 💰 ECONOMÍA 」
│ ✎ .bal  
│ ✎ .eboard  
│ ✎ .crimen  
│ ✎ .depositar  
│ ✎ .slut  
│ ✎ .unreg  
│ ✎ .work 
╰───────────────

╭─「 📥 DESCARGAS 」
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

╭─「 🧰 HERRAMIENTAS 」
│ ✎ .lid 
│ ✎ .hd  
│ ✎ .deepseek  
│ ✎ .ss <página web>  
│ ✎ .tourl
│ ✎ .apk
╰───────────────

╭─「 👑 CREADOR 」
│ ✎ .dsowner  
│ ✎ .sendmeme  
│ ✎ .update  
╰───────────────

╭─「 📚 INFORMACIÓN 」
│ ✎ .creador  
│ ✎ .servers  
│ ✎ .sugerir <cosas pal botsito>  
╰───────────────

╭─「 🎲 GACHA ANIME 」
│ ✎ .infoanime
│ ✎ .c  
│ ✎ .harem <@usuario>  
│ ✎ .rw
│ ✎ .waifu
╰───────────────

╭─「 👥 GRUPO 」
│ ✎ .on welcome  
│ ✎ .off welcome  
│ ✎ .on antilink  
│ ✎ .off antilink  
│ ✎ .kick  
│ ✎ .personalidad  
│ ✎ .top *<texto>*  
│ ✎ .invocar *<mensaje opcional>*  
╰───────────────

╭─「 🔎 BÚSQUEDA 」
│ ✎ .imagen *<búsqueda>*  
│ ✎ .pinterest  
│ ✎ .tiktoksearch  
│ ✎ .yts  
╰───────────────

╭─「 🖼️ STICKER 」
│ ✎ .sticker  
│ ✎ .stickersearch *<texto>*  
│ ✎ .toimg (reply)  
╰───────────────

╭─「 🤖 IA 」
│ ✎ .adonix <pregunta>  
│ ✎ .dalle <texto>  
│ ✎ .iavoz <texto>  
│ ✎ .ask
│ ✎ .gemini 
╰───────────────

╭─「 📢 CANALES 」
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

> 🚀 Desarrollado por Project GonBot-v1
`

    await conn.sendMessage(m.chat, {
      image: { url: menuImg },
      caption: text.trim()
    }, { quoted: m })

  } catch (e) {
    console.error('Error en menú:', e)
    await conn.reply(m.chat, '❎ Ocurrió un error mostrando el menú.', m)
  }
}

handler.command = ['menu', 'help', 'ayuda']
export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}