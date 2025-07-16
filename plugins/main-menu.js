const handler = async (m, { conn }) => {
  try {
    const name = await conn.getName(m.sender)
    const date = new Date().toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
    const uptime = clockString(process.uptime() * 1000)

    const nombreBot = global.namebot || 'ɢᴏɴʙᴏᴛ-ᴠ1'

    // Detectar si es el bot principal o uno personalizable
    const isPrincipal = conn.user?.jid?.includes('3147172161')
    const tipoBot = isPrincipal ? '🟢 Bot Principal' : '⚙️ Bot Personalizable'

    // Imágenes del menú
    const bannerPrincipal = 'https://files.catbox.moe/jzfs7z.jpg'
    const bannerPersonalizado = 'https://files.catbox.moe/example.jpg' // <-- cámbiala tú

    const bannerURL = isPrincipal ? bannerPrincipal : bannerPersonalizado

    // Encabezado del menú
    const header = `
┏━━━━━━━━━━━━━━━━━━┓
┃ 🤖 *${nombreBot}* [${tipoBot}]
┃ 👤 𝙃𝙤𝙡𝙖, *${name}*
┃ ⏱️ 𝘼𝙘𝙩𝙞𝙫𝙤 𝙃𝙖𝙘𝙚: *${uptime}*
┃ 📅 𝙁𝙚𝙘𝙝𝙖: *${date}*
┗━━━━━━━━━━━━━━━━━━┛`.trim()

    // Contenido del menú del Bot Principal
    const menuPrincipal = `
── ⬤𝙈𝙀𝙉𝙐 𝘿𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊⬤ ──

> Más info de GonBot:
https://erenxsit.vercel.app

╭─「 🔰 SUB-BOTS 」
│ ✎ .bots .qr .code .setbanner .setname .sublist
╰───────────────

╭─「 💰 ECONOMÍA 」
│ ✎ .bal .eboard .crimen .depositar .slut .unreg .work 
╰───────────────

╭─「 📥 DESCARGA 」
│ ✎ .play .tiktokvid .ytmp4 .ig <url>
╰───────────────

╭─「 🧰 HERRAMIENTAS 」
│ ✎ .hd .tourl .apk
╰───────────────

╭─「 🤖 IA 」
│ ✎ .adonix .dalle .iavoz .ask .gemini
╰───────────────

╭─「 🖼️ STICKERS 」
│ ✎ .sticker .stickersearch .toimg
╰───────────────

╭─「 🎲 GACHA/ANIME 」
│ ✎ .infoanime .c .harem .waifu
╰───────────────

╭─「 👥 GRUPO 」
│ ✎ .on welcome .off antilink .kick .invocar
╰───────────────

╭─「 📢 CANALES 」
│ ✎ .seguircanal .avisoschannel .inspect
╰───────────────

╭─「 📚 INFORMACIÓN 」
│ ✎ .creador .servers .sugerir
╰───────────────`.trim()

    // Contenido del menú de Bots Personalizables (vacío o editable)
    const menuPersonalizado = `
── ⚙️ MENÚ PERSONALIZADO ──

╭─「 ✨ PERSONALIZA TUS COMANDOS 」
│ Puedes agregar tus comandos personalizados aquí.
│ Ejemplo:
│ ✎ .play  
│ ✎ .sticker  
│ ✎ .infoanime
╰───────────────

> Modifica este menú en el archivo del plugin para adaptarlo a tu subbot.`.trim()

    // Texto final con header y contenido según tipo de bot
    const text = `${header}\n\n${isPrincipal ? menuPrincipal : menuPersonalizado}`

    // Envío del mensaje con imagen
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