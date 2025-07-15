let handler = async (m, { conn }) => {
  const name = '𝙀𝙧𝙚𝙣𝙭𝙯𝙮-𝙈𝘿𝙁'
  const number = '18493907272' // sin @
  const email = 'erenxz01@gmail.com'
  const org = 'Propietario De GonBotv1'
  const note = 'Creador De Website Y Modificador De Bots Personalizado Creador ✨'

  const vcard = `
BEGIN:VCARD
VERSION:3.0
N:${name}
FN:${name}
ORG:${org}
EMAIL;type=EMAIL:${email}
TEL;type=CELL;type=VOICE;waid=${number}:${number}
NOTE:${note}
END:VCARD
`.trim()

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: name,
      contacts: [{ vcard }],
    },
  }, { quoted: m })
}

handler.help = ['creador']
handler.tags = ['info']
handler.command = ['creador', 'owner', 'creator']

export default handler
