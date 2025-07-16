const handler = async (m, { conn }) => {
  try {
    const name = await conn.getName(m.sender)
    const date = new Date().toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
    const uptime = clockString(process.uptime() * 1000)
    const nombreBot = global.namebot || 'ɢᴏɴʙᴏᴛ-ᴠ1'
    const tipo = conn.user?.jid?.includes('504') ? '𝘽𝙤𝙩 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ☄️' : 'Sub Bot 🅑'
    const bannerURL = 'https://cdn.russellxz.click/808efb6d.jpeg' // Cambia aquí la imagen del banner

    const encabezado = `
┏━━━━━━━━━━━━━━━━━━┓
┃ 🤖 *${nombreBot}* [${tipo}]
┃ 👤 𝙃𝙤𝙡𝙖, *${name}*
┃ ⏱️ 𝘼𝙘𝙩𝙞𝙫𝙤: *${uptime}*
┃ 📅 𝙁𝙚𝙘𝙝𝙖: *${date}*
┗━━━━━━━━━━━━━━━━━━┛`.trim()

    const cuerpo = `
── ⬤ 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 ⬤ ──

╭─「 🔰 *𝙎𝙐𝘽-𝘽𝙊𝙏𝙎* 」
│ ✎ .bots  | .qr | .code
│ ✎ .setbanner | .setname
╰───────────────

╭─「 💰 *𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼* 」
│ ✎ .bal | .eboard | .crimen
│ ✎ .depositar | .work
╰───────────────

╭─「 📥 *𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼* 」
│ ✎ .play | .tiktok <url> | .ytmp4
│ ✎ .mp4 | .ig <url>
╰───────────────

╭─「 🧰 *𝙃𝙀𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎* 」
│ ✎ .lid | .hd | .tourl
│ ✎ .apk | .calc
╰───────────────

╭─「 👑 *𝘾𝙍𝙀𝘼𝘿𝙊𝙍* 」
│ ✎ .owner | .update
╰───────────────

╭─「 📚 *𝙄𝙉𝙁𝙊* 」
│ ✎ .botinfo | .ping | .creador
╰───────────────

╭─「 🎲 *𝙂𝘼𝘾𝙃𝘼 𝘼𝙉𝙄𝙈𝙀* 」
│ ✎ .waifu | .harem | .infoanime
╰───────────────

╭─「 👥 *𝙂𝙍𝙐𝙋𝙊* 」
│ ✎ .on welcome | .kick | .invocar
╰───────────────

╭─「 🔎 *𝘽𝙐𝙎𝙌𝙐𝙀𝘿𝘼* 」
│ ✎ .imagen | .yts | .pinterest
╰───────────────

╭─「 🖼️ *𝙎𝙏𝙄𝘾𝙆𝙀𝙍* 」
│ ✎ .sticker | .toimg | .stickermeme
╰───────────────

╭─「 🤖 *𝙄𝘼 / 𝙂𝙋𝙏* 」
│ ✎ .adonix | .ask | .dalle
╰───────────────

╭─「 📢 *𝘾𝘼𝙉𝘼𝙇𝙀𝙎* 」
│ ✎ .seguircanal | .inspeccionar
│ ✎ .nuevonombrecanal
╰───────────────

🔗 ᴍᴀs ɪɴғᴏ:
https://erenxsit.vercel.app

🚀 ᴅᴇsᴀʀʀᴏʟʟᴀᴅᴏ ᴘᴏʀ ɢᴏɴʙᴏᴛ-ᴠ1`.trim()

    const text = [encabezado, cuerpo].join('\n\n')

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