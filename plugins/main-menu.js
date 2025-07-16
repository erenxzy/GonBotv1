import fs from 'fs'

const defaultMenu = {
  banner: 'https://cdn.russellxz.click/808efb6d.jpeg', // Aquí pones la URL de la imagen del banner
  before: `
*⌬ .・。.・゜✭・.・✫・゜・。. ⌬*

∘₊✧ *Hola, soy %botname*
( %tipo )

꒷︶꒷‧₊˚ ¿Qué tal *%name*? ˚₊‧꒷︶꒷
𓆩 Actividad » *%uptime*
𓆩 Fecha » *%date*

> ✐ Puedes personalizar tu socket:
> ⤿ *.setname* ← Cambiar nombre
> ⤿ *.setbanner* ← Cambiar banner

∘₊✧ *Adonix API Oficial:*
> ❀ https://theadonix-api.vercel.app

*⌬ .・。.・゜✭・.・✫・゜・。. ⌬*

\`⌬ ꒰ Menú de Comandos ꒱ ⌬\`

%readmore`.trimStart(),

  // Aquí defines el menú con categorías y sus comandos manualmente:
  categories: {
    '✐ Sockets': [
      '.ping',
      '.status',
      '.uptime',
    ],
    '✦ Economía': [
      '.balance',
      '.daily',
      '.pay <usuario> <cantidad>',
    ],
    '☄︎ Downloaders': [
      '.ytmp3 <url>',
      '.ytmp4 <url>',
      '.tiktok <url>',
    ],
    'ᥫ᭡ Herramientas': [
      '.sticker',
      '.toimg',
      '.ocr',
    ],
    '❀ Info': [
      '.botinfo',
      '.user <@usuario>',
      '.help',
    ],
    // Agrega más categorías y comandos aquí...
  },

  footer: '*꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷꒷*',
  after: '\n✦ 𓆩 *Made By 𝗪𝗶𝗿𝗸* ☁︎',
}

const handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    // Datos básicos para reemplazos
    let nombreBot = global.namebot || 'Bot'
    const name = await conn.getName(m.sender)

    const d = new Date(Date.now() + 3600000)
    const locale = 'es'
    const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })

    const uptime = clockString(process.uptime() * 1000)

    const botActual = conn.user?.jid?.split('@')[0].replace(/\D/g, '')
    const tipo = botActual === '+50494547493'.replace(/\D/g, '')
      ? 'Principal 🅥'
      : 'Sub Bot 🅑'

    // Armamos el texto del menú
    let text = defaultMenu.before
    text = text.replace(/%botname/g, nombreBot)
      .replace(/%tipo/g, tipo)
      .replace(/%name/g, name)
      .replace(/%date/g, date)
      .replace(/%uptime/g, uptime)
      .replace(/%readmore/g, readMore)

    // Agregamos categorías y comandos
    for (const [category, commands] of Object.entries(defaultMenu.categories)) {
      text += `\n\n*${category}*\n`
      commands.forEach(cmd => {
        text += `> ⤿ ${cmd}\n`
      })
      text += `\n${defaultMenu.footer}`
    }

    text += `\n${defaultMenu.after}`

    // Enviamos la imagen del banner desde URL
    await conn.sendMessage(m.chat, {
      image: { url: defaultMenu.banner },
      caption: text.trim(),
      mentionedJid: conn.parseMention(text)
    }, { quoted: m })

  } catch (e) {
    console.error('❌ Error en el menú:', e)
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error.', m)
  }
}

handler.command = ['menu', 'help', 'menú']
handler.register = true
export default handler

// Utilidades
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}