import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['18493907272', 'erenxszy ', true],
  ['18493907272', 'erenxszy ', true],
  ['50489513153', 'Elder xyz ', true],
  ['31375424024748', 'Elder lid ', true]
]

global.mods = []
global.prems = []

global.namebot = '𝙂𝙤𝙣𝘽𝙤𝙩-𝘃1'
global.packname = 'ᴇʀᴇɴxsᴢʏ sᴛᴋ'
global.author = 'ʙʏ ᴇʀᴇɴxᴢʏ'
global.moneda = 'dolar'

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16'
global.vs = '2.2.0'
global.sessions = 'Sessions'
global.jadi = 'JadiBots'
global.yukiJadibts = true

global.namecanal = '𝘾𝙃𝘼𝙉𝙉𝙀𝙇 𝙊𝙁𝘾 𝙂𝙊𝙉 💚'
global.idcanal = '120363417252896376@newsletter'
global.canal = 'https://whatsapp.com/channel/0029VbBBn9R4NViep4KwCT3Z'
global.canalreg = '120363417252896376@newsletter'

global.ch = {
  ch1: '120363417252896376@newsletter'
}

global.multiplier = 69
global.maxwarn = '2'

global.rcanal = {
  contextInfo: {
    isForwarded: true,
    forwardingScore: 200,
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.idcanal,
      serverMessageId: 100,
      newsletterName: global.namecanal
    }
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("🔄 Se actualizó 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})