const handler = async (msg, { conn }) => {
  const chatId = msg.key.remoteJid;
  const senderId = msg.key.participant || msg.key.remoteJid;
  const senderNum = senderId.replace(/[^0-9]/g, "");
  const isGroup = chatId.endsWith("@g.us");
  const isOwner = global.owner.some(([id]) => id === senderNum);

  if (!isGroup) {
    return conn.sendMessage(chatId, {
      text: "📛 *Este comando solo está disponible en grupos.*",
    }, { quoted: msg });
  }

  const metadata = await conn.groupMetadata(chatId);
  const isAdmin = metadata.participants.find(p => p.id === senderId)?.admin;

  if (!isAdmin && !isOwner) {
    return conn.sendMessage(chatId, {
      text: "🚫 *Permiso denegado*\nSolo los *admins* o el *dueño del bot* pueden usar este comando.",
    }, { quoted: msg });
  }

  const botId = conn.user.id;

  // Filtrar participantes que NO sean admin, ni owner, ni bot
  const participantsToKick = metadata.participants.filter(p => {
    const num = p.id.replace(/[^0-9]/g, "");
    const isParticipantOwner = global.owner.some(([id]) => id === num);
    const isParticipantAdmin = p.admin !== null && p.admin !== undefined;
    const isBot = p.id === botId;
    return !isParticipantAdmin && !isParticipantOwner && !isBot;
  });

  if (participantsToKick.length === 0) {
    return conn.sendMessage(chatId, {
      text: "🤔 *No hay usuarios para expulsar que no sean admin, owner o el bot.*",
    }, { quoted: msg });
  }

  try {
    // Expulsar a todos los filtrados (en grupo)
    const toKickIds = participantsToKick.map(p => p.id);

    await conn.groupParticipantsUpdate(chatId, toKickIds, "remove");

    const mentions = toKickIds;
    const kickedUsers = toKickIds.map(u => `@${u.split("@")[0]}`).join(", ");

    await conn.sendMessage(chatId, {
      text: `⚠️ *Se han expulsado a todos los usuarios no administradores:*\n${kickedUsers}`,
      mentions
    }, { quoted: msg });

  } catch (e) {
    console.error("Error en kickall:", e);
    await conn.sendMessage(chatId, {
      text: "❌ *Ocurrió un error al intentar expulsar a los usuarios.*",
    }, { quoted: msg });
  }
};

handler.command = ["kickall", "kicktodos"];
module.exports = handler;