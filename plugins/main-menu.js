import fs from 'fs'
import { xpRange } from '../lib/levelling.js'

const handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    const { exp, limit, level } = global.db.data.users[m.sender]
    const { min, xp, max } = xpRange(level, global.multiplier)
    const name = await conn.getName(m.sender)

    const d = new Date(Date.now() + 3600000)
    const locale = 'es'
    const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    const uptime = clockString(process.uptime() * 1000)
    const nombreBot = global.namebot || 'ɢᴏɴʙᴏᴛ-ᴠ1'
    const tipo = conn.user?.jid?.includes('504') ? '𝘽𝙤𝙩 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ☄️' : 'Sub Bot 🅑'
    const bannerURL = 'https://cdn.russellxz.click/995640b1.jpeg' // URL de la imagen del menú

    const help = Object.values(global.plugins)
      .filter(p => !p.disabled)
      .map(plugin => ({
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
      }))

    const tags = {
      serbot: '🔰 SUB-BOTS',
      eco: '💰 ECONOMÍA',
      downloader: '📥 DESCARGA',
      tools: '🧰 HERRAMIENTAS',
      owner: '👑 CREADOR',
      info: '📚 INFORMACIÓN',
      gacha: '🎲 GACHA ANIME',
      group: '👥 GRUPO',
      search: '🔎 BÚSQUEDA',
      sticker: '🖼️ STICKERS',
      ia: '🤖 IA',
      channel: '📢 CANALES',
    }

    const textMenu = [
`┏━━━━━━━━━━━━━━━━━━┓
┃ 🤖 *${nombreBot}* [${tipo}]
┃ 👤 Hola, *${name}*
┃ ⏱️ Activo: *${uptime}*
┃ 📅 Fecha: *${date}*
┗━━━━━━━━━━━━━━━━━━┛`,
'── ⬤ *MENÚ DE COMANDOS* ⬤ ──',
'',
...Object.keys(tags).map(tag => {
  const section = help
    .filter(plugin => plugin.tags.includes(tag))
    .map(plugin =>
      plugin.help.map(cmd =>
        `│ ✎ ${plugin.prefix ? cmd : `${_p}${cmd}`} ${plugin.limit ? '⭐' : ''} ${plugin.premium ? '🪪' : ''}`.trim()
      ).join('\n')
    ).join('\n')

  return section
    ? `╭─「 ${tags[tag]} 」\n${section}\n╰───────────────`
    : ''
}),
'🔗 Más info: https://erenxsit.vercel.app',
'🚀 Desarrollado por GonBot-v1'
].join('\n').trim()

    await conn.sendMessage(m.chat, {
      image: { url: bannerURL },
      caption: textMenu,
      mentions: [m.sender]
    }, { quoted: m })

  } catch (e) {
    console.error('❌ Error en el menú:', e)
    conn.reply(m.chat, '❎ Error al mostrar el menú.', m)
  }
}

handler.command = ['menu', 'menú', 'help']
export default handler

const clockString = (ms) => {
  const h = Math.floor(ms / 3600000)
  const m = Math.floor(ms / 60000) % 60
  const s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}