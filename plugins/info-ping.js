import fs from 'fs'
import path from 'path'

const handler = async (m, { conn }) => {
  const start = Date.now()

  // Obtener el número del bot actual (la sesión activa)
  const botActual = conn.user?.jid?.split('@')[0].replace(/\D/g, '')
  const configPath = path.join('./JadiBots', botActual, 'config.json')

  let nombreBot = global.namebot || '✧ ʏᴜʀᴜ ʏᴜʀɪ ✧'

  if (fs.existsSync(configPath)) {
    try {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
      if (config.name) nombreBot = config.name
    } catch (err) {
      console.log('⚠️ No se pudo leer config del subbot:', err)
    }
  }

  const latency = Date.now() - start

  await conn.sendMessage(m.chat, { 
    text: `🛜 *Ping:* ${latency} ms\n> ${nombreBot}` 
  }, { quoted: m })
}

handler.command = ['p']
export default handler