let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]

user.registered = false
return conn.reply(m.chat, `> 🗑️ 𝙏𝙐 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊 𝙁𝙐𝙀 𝘽𝙊𝙍𝙍𝘼𝘿𝙊 𝙀𝙉 𝙈𝙄 𝘽𝘼𝙎𝙀 𝘿𝙀 𝘿𝘼𝙏𝙊𝙎`, m)

}
handler.help = ['unreg']
handler.tags = ['eco']
handler.command = ['unreg']
handler.register = true
export default handler