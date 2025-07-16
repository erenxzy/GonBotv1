const handler = async (m, { conn }) => {
  try {
    const name = await conn.getName(m.sender).catch(() => "Usuario") // protección
    const date = new Date().toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
    const uptime = clockString(process.uptime() * 1000)

    const nombreBot = global.namebot || 'ɢᴏɴʙᴏᴛ-ᴠ1'

    // Verifica si el JID del bot está definido
    const jid = conn?.user?.jid || ''
    const isPrincipal = jid.includes('3147172161')
    const tipoBot = isPrincipal ? '🟢 Bot Principal' : '⚙️ Bot Personalizable'

    // URLs de imagen
    const bannerPrincipal = 'https://cdn.russellxz.click/808efb6d.jpeg'
    const bannerPersonalizado = 'https://cdn.russellxz.click/1220a888.jpeg' // <- Cambiar si quieres
    const bannerURL = isPrincipal ? bannerPrincipal : bannerPersonalizado

    const header = `
┏━━━━━━━━━━━━━━━━━━┓
┃ 🤖 *${nombreBot}* [${tipoBot}]
┃ 👤 𝙃𝙤𝙡𝙖, *${name}*
┃ ⏱️ 𝘼𝙘𝙩𝙞𝙫𝙤 𝙃𝙖𝙘𝙚: *${uptime}*
┃ 📅 𝙁𝙚𝙘𝙝𝙖: *${date}*
┗━━━━━━━━━━━━━━━━━━┛`.trim()

    const menuPrincipal = `
╭─「 💰 ECONOMÍA 」
│ ✎ .bal .crimen .depositar .work
╰───────────────

╭─「 🤖 IA 」
│ ✎ .adonix .ask
╰───────────────`.trim()

    const menuPersonalizado = `
╭─「 🧪 PERSONALIZADO 」
│ Puedes editar este menú según tus comandos.
│ ✎ .play .infoanime
╰───────────────`.trim()

    const text = `${header}\n\n${isPrincipal ? menuPrincipal : menuPersonalizado}`

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