const handler = async (m, { conn }) => {
  try {
    const name = await conn.getName(m.sender)
    const date = new Date().toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
    const uptime = clockString(process.uptime() * 1000)
    const nombreBot = global.namebot || 'ɢᴏɴʙᴏᴛ-ᴠ1'

    const botPrincipalJIDs = ['18097769423@s.whatsapp.net']
    const isPrincipal = conn.user?.jid && botPrincipalJIDs.includes(conn.user.jid)

    const bannerPrincipalURL = 'https://cdn.russellxz.click/201e546d.jpeg'
    const bannerSubbotURL = 'https://cdn.russellxz.click/b10ffe41.jpeg'

    let text, bannerURL

    if (isPrincipal) {
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

╭─「 🔰 SUB-BOTS 」
│ ✎ .bots .qr .code .setbanner .setname .sublist
╰─────────────────────

╭─「 💰 ECONOMÍA 」
│ ✎ .bal .eboard .crimen .depositar .slut .unreg .work
╰─────────────────────

╭─「 📥 DESCARGA 」
│ ✎ .play .tiktokvid .tiktok <enlace> .play2 .ytv .ytmp4 .playaudio .mp4 .ytmp4doc .ig
╰─────────────────────

╭─「 🧰 HERRAMIENTAS 」
│ ✎ .lid .hd .deepseek .ss .tourl .apk
╰─────────────────────

╭─「 👑 CREADOR 」
│ ✎ .dsowner .sendmeme .update
╰─────────────────────

╭─「 📚 INFORMACIÓN 」
│ ✎ .creador .servers .sugerir
╰─────────────────────

╭─「 🎲 GACHA ANIME 」
│ ✎ .infoanime .c .harem @usuario .rw .waifu
╰─────────────────────

╭─「 👥 GRUPO 」
│ ✎ .on welcome .off welcome .on antilink .off antilink .kick .personalidad .top .invocar
╰─────────────────────

╭─「 🔎 BÚSQUEDA 」
│ ✎ .imagen .pinterest .tiktoksearch .yts
╰─────────────────────

╭─「 🖼️ STICKER 」
│ ✎ .sticker .stickersearch <texto> .toimg
╰─────────────────────

╭─「 🤖 IA 」
│ ✎ .adonix .dalle .iavoz .ask .gemini
╰─────────────────────

╭─「 📢 CANALES 」
│ ✎ .nuevafotochannel .nosilenciarcanal .silenciarcanal .noseguircanal .seguircanal .avisoschannel .resiviravisos .inspect .inspeccionar .eliminarfotochannel .reactioneschannel .reaccioneschannel .nuevonombrecanal .nuevadescchannel
╰─────────────────────

> 🚀 Desarrollado por *PROYECT GONBOTV1*`.trim()

    } else {
      bannerURL = bannerSubbotURL
      text = `
╭─[ 🤖 SUB-BOT ]─╮
│ 👤 Hola: ${name}
│ 📅 Fecha: ${date}
│ ⏱️ Uptime: ${uptime}
╰────────────────────╯

╭─「 🎧 DESCARGA 」
│ ✦ .play .ytmp3 .ytmp4 .tiktok .mp4
╰────────────────────╯

╭─「 🎮 JUEGOS / ECONOMÍA 」
│ ✦ .bal .work .crimen .slut
╰────────────────────╯

╭─「 👤 INFO 」
│ ✦ .menu .creador
╰────────────────────╯

╭─「 🤖 IA / TOOLS ⚒️ 」
│ ✦ .iavoz .gemini .hd
╰────────────────────╯

> 🚀 Desarrollado por *EL STAFF DE GONBOT*`.trim()
    }

    // Validar longitud máxima de caption
    const maxCaptionLength = 4000
    if (text.length > maxCaptionLength) {
      await conn.sendMessage(m.chat, { image: { url: bannerURL } }, { quoted: m })
      await conn.sendMessage(m.chat, { text, mentions: [m.sender] }, { quoted: m })
    } else {
      try {
        await conn.sendMessage(m.chat, {
          image: { url: bannerURL },
          caption: text,
          mentions: [m.sender]
        }, { quoted: m })
      } catch (err) {
        console.error('❌ Error enviando imagen:', err)
        await conn.sendMessage(m.chat, {
          text: `⚠️ Error al mostrar el banner.\nAquí tienes el menú:\n\n${text}`,
          mentions: [m.sender]
        }, { quoted: m })
      }
    }

  } catch (e) {
    console.error('❌ Error en el menú:', e)
    await conn.reply(m.chat, '❎ Error al mostrar el menú.\n' + e.message, m)
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