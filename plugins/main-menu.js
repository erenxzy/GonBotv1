const handler = async (m, { conn }) => {
  try {
    const name = await conn.getName(m.sender)
    const date = new Date().toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
    const uptime = clockString(process.uptime() * 1000)
    const nombreBot = global.namebot || 'ɢᴏɴʙᴏᴛ-ᴠ1'

    const botPrincipalJIDs = ['18097769423@s.whatsapp.net']
    const isPrincipal = botPrincipalJIDs.includes(conn.user?.jid)

    const bannerPrincipalURL = 'https://cdn.russellxz.click/201e546d.jpeg'
    const bannerSubbotURL = 'https://cdn.russellxz.click/b10ffe41.jpeg'

    let text = ''
    let bannerURL = isPrincipal ? bannerPrincipalURL : bannerSubbotURL

    if (isPrincipal) {
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

╭─「 🤖 𝙄𝘼 」
│ ✎ .adonix <pregunta>  
│ ✎ .dalle <texto>  
│ ✎ .iavoz <texto>  
│ ✎ .ask
│ ✎ .gemini 
╰───────────────

> 🚀 ᴅᴇsᴀʀʀᴏʟʟᴀᴅᴏ ᴘᴏʀ ᴘʀᴏʏᴇᴄᴛ ɢᴏɴʙᴏᴛᴠ1`.trim()
    } else {
      // Menú para subbots
      text = `
╭─[ 🤖 𝙎𝙐𝘽-𝘽𝙊𝙏 ]─╮
│ 👤 *𝙃𝙊𝙇𝘼:* ${name}
│ 📅 *𝙁𝙀𝘾𝙃𝘼:* ${date}
│ ⏱️ *𝙐𝙋𝙏𝙄𝙈𝙀:* ${uptime}
╰────────────────────╯

╭──「 🎧 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼 」───
│ ✦ .play > música
│ ✦ .ytmp3 > audio  
│ ✦ .ytmp4 > video  
╰────────────────────╯

╭──「 🤖 𝙄𝘼 」───
│ ✦ .iavoz  
│ ✦ .gemini  
│ ✦ .hd  
╰────────────────────╯

> 🚀 ʙʏ ᴘʀᴏʏᴇᴄᴛ ɢᴏɴʙᴏᴛ`.trim()
    }

    await conn.sendMessage(m.chat, {
      image: { url: bannerURL },
      caption: text,
      mentions: [m.sender]
    }, { quoted: m })

  } catch (e) {
    console.error('❌ Error en el menú:', e)
    await conn.reply(m.chat, '❎ Error al mostrar el menú.', m)
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