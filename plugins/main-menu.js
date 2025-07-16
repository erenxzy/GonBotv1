const handler = async (m, { conn }) => {
  try {
    const name = await conn.getName(m.sender)
    const date = new Date().toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
    const uptime = clockString(process.uptime() * 1000)
    const nombreBot = global.namebot || 'ɢᴏɴʙᴏᴛ-ᴠ1'

    // JID del BOT PRINCIPAL ELDER 504
    const botPrincipalJIDs = ['18097769423@s.whatsapp.net']
    const isPrincipal = botPrincipalJIDs.includes(conn.user?.jid)

    //URLs de banners hecho por Elder 
    const bannerPrincipalURL = 'https://files.catbox.moe/jzfs7z.jpg'
    const bannerSubbotURL = 'https://cdn.russellxz.click/4badd762.jpeg' // Cambia esta URL por tu banner para subbots

    let text, bannerURL

    if (isPrincipal) {
      // MENÚ PARA BOT PRINCIPAL
      bannerURL = bannerPrincipalURL
      let header = `
┏━━━━━━━━━━━━━━━━━━┓
┃  🤖 *${nombreBot}*
┃  👤 𝙃𝙤𝙡𝙖, *${name}*
┃  ⏱️ 𝘼𝙘𝙩𝙞𝙫𝙤 𝙃𝙖𝙘𝙚: *${uptime}*
┃  📅 𝙁𝙚𝙘𝙝𝙖: *${date}*
┗━━━━━━━━━━━━━━━━━━┛`.trim()

      text = `
${header}

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

> 🚀 ᴅᴇsᴀʀʀᴏʟʟᴀᴅᴏ ᴘᴏʀ ᴘʀᴏʏᴇᴄᴛ ɢᴏɴʙᴏᴛᴠ1`.trim()

    } else {
      // ELDER MENÚ PARA SUBBOTS
      bannerURL = bannerSubbotURL
      text = `
╭─[ 🤖 𝙎𝙐𝘽-𝘽𝙊𝙏 ]─╮
│ 👤 *𝙃𝙊𝙇𝘼:* ${name}
│ 📅 *𝙁𝙀𝘾𝙃𝘼:* ${date}
│ ⏱️ *𝙐𝙋𝙏𝙄𝙈𝙀:* ${uptime}
╰────────────────────╯

╭──「 🎧 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 」───
│ ✦ .play > ᴇsᴄᴜᴄʜᴀʀ ᴍᴜsɪᴄᴀ
│ ✦ .ytmp3 > ᴅᴇsᴄᴀʀɢᴀ ᴀᴜᴅɪᴏ 
│ ✦ .ytmp4 ʟɪɴᴋ ᴠɪᴅᴇᴏ ʏᴛʙ 
│ ✦ .tiktok > ʟɪɴᴋ ᴠɪᴅᴇᴏ ᴛɪᴋ
│ ✦ .mp4 > ᴠɪᴅᴇᴏ
╰────────────────────╯

╭──「 🎮 𝙅𝙐𝙀𝙂𝙊𝙎 𝙓 𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼 」──
│ ✦ .bal > ᴛᴜ ᴇsᴛᴀᴅɪᴀ 
│ ✦ .work > ᴛʀᴀʙᴀᴊʀ  
│ ✦ .crimen > ʜᴀᴄᴇʀ ᴜɴ ᴄʀɪᴍᴇɴ
│ ✦ .slut > ᴛʀᴀʙᴀᴊᴏ sᴜᴄɪᴏ
╰────────────────────╯

╭──「 👤 𝙄𝙉𝙁𝙊 」──
│ ✦ .menu  
│ ✦ .creador > ɪɴғᴏ  
╰────────────────────╯

╭──「🤖 𝙄𝘼 𝙓 𝙏𝙊𝙊𝙇𝙎 ⚒️ 」──
│ ✦ .iavoz > ᴠᴏᴢ ᴀʀᴛɪғɪᴄɪᴀʟ
│ ✦ .Gemini > ᴘʀᴇɢᴜɴᴛᴀ
│ ✦ .Hd > ᴍᴇᴊᴏʀᴀʀ ɪᴍᴀɢᴇɴ 
╰────────────────────╯


> 🚀 ᴅᴇsᴀʀᴏʟʟᴀᴅ ᴘᴏʀ ᴇʟ sᴛᴀғғ ᴅᴇ ɢᴏɴʙᴏᴛ `.trim()
    }

    await conn.sendMessage(m.chat, {
      image: { url: bannerURL },
      caption: text,
      mentions: [m.sender]
    }, { quoted: m })

  } catch (e) {
    console.error('❌ Error en el menú:', e)
    conn.reply(m.chat, '❎ Error al mostrar el menú.', m)
  }
}

handler.command = ['menu', 'menú', 'help']
export default handler

function clockString(ms) {
  const h = Math.floor(ms / 3600000)
  const m = Math.floor(ms / 60000) % 60
  const s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}