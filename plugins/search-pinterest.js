import axios from 'axios'
import baileys from '@whiskeysockets/baileys'

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply(`✧ 𝙋𝙤𝙧𝙛𝙖𝙫𝙤𝙧 𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙇𝙤 𝙌𝙪𝙚 𝙌𝙪𝙞𝙚𝙧𝙚𝙨 𝘽𝙪𝙨𝙘𝙖𝙧 𝙀𝙣 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩`)

  try {
    m.react('🕒')
    let results = await pins(text)

    if (!results.length) return conn.reply(m.chat, `✧ 𝙉𝙤 𝙀𝙣𝙘𝙤𝙣𝙩𝙧𝙚 𝙉𝙖𝙙𝙖 𝙀𝙣 𝙈𝙞 𝙗𝙪𝙨𝙦𝙪𝙚𝙙𝙖 💥 "${text}".`, m)

    const medias = results.slice(0, 10).map(img => ({ type: 'image', data: { url: img.hd } }))

    await conn.sendSylphy(m.chat, medias, {
      caption: `✦  𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 𝘽𝙮 𝙂𝙤𝙣  -  𝙎𝙚𝙖𝙧𝙘𝙝  ✦\n\n✦ 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖 » "${text}"\n✎ 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 » ${medias.length}\n\n${dev}`,
      quoted: m
    })

    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
  } catch (error) {
    conn.reply(m.chat, `⚠︎ Error:\n\n${error.message}`, m)
  }
}

handler.help = ['pinterest']
handler.command = ['pinterest', 'pin' ,'st']
handler.tags = ['dl']

export default handler

const pins = async (query) => {
  try {
    const { data } = await axios.get(`https://api.stellarwa.xyz/search/pinterest?query=${query}`)

    if (data?.status && data?.data?.length) {
      return data.data.map(item => ({
        hd: item.hd,
        mini: item.mini
      }))
    }

    return []
  } catch (error) {
    console.error("Error al obtener imágenes de Pinterest:", error)
    return []
  }
}