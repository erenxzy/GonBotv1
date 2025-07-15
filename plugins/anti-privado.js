let handler = async (m, { conn, isOwner }) => {
  // Ignora si el mensaje no es privado
  if (m.chat.endsWith('@g.us')) return

  // Permitir si es el dueño
  if (isOwner) return

  // Mensaje antes de bloquear
  let mensaje = `🚫 *ACCESO DENEGADO*\n\nNo tienes permiso para hablarme en privado.\nSerás bloqueado automáticamente.`

  // Enviar mensaje
  await conn.sendMessage(m.chat, { text: mensaje }, { quoted: m })

  // Bloquear al usuario
  await conn.updateBlockStatus(m.sender, 'block')
}

handler.customPrefix = /.*/ // Detecta cualquier mensaje
handler.command = new RegExp // Es obligatorio para que no sea comando
handler.private = true // Solo en chats privados

export default handler