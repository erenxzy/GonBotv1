const handler = async (m, { conn }) => {
  try {
    const name = await conn.getName(m.sender)
    const date = new Date().toLocaleDateString('es', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const uptime = clockString(process.uptime() * 1000);
    const nombreBot = global.namebot || 'ɢᴏɴʙᴏᴛ-ᴠ1';

    // JID del BOT PRINCIPAL
    const botPrincipalJIDs = ['18097769423@s.whatsapp.net'];
    const isPrincipal = botPrincipalJIDs.includes(conn.user?.jid);

    // URLs de banners (pon aquí tus imágenes)
    const bannerPrincipalURL = 'https://cdn.russellxz.click/201e546d.jpeg';
    const bannerSubbotURL = 'https://cdn.russellxz.click/b10ffe41.jpeg';

    let text, bannerURL;

    if (isPrincipal) {
      bannerURL = bannerPrincipalURL;
      let header = `
┏━━━━━━━━━━━━━━━━━━┓
┃  🤖 *${nombreBot}*
┃  👤 𝙃𝙤𝙡𝙖, *${name}*
┃  ⏱️ 𝘼𝙘𝙩𝙞𝙫𝙤 𝙃𝙖𝙘𝙚: *${uptime}*
┃  📅 𝙁𝙚𝙘𝙝𝙖: *${date}*
┗━━━━━━━━━━━━━━━━━━┛`.trim();

      text = `
${header}

── ⬤ 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 ⬤ ──

🔹 Más info: https://erenxsit.vercel.app

╭─「 🔰 SUB-BOTS 」─╮
│ .bots .qr .code
│ .setbanner .setname .sublist
╰───────────────

╭─「 💰 ECONOMÍA 」─╮
│ .bal .eboard .crimen
│ .depositar .slut .work .unreg
╰───────────────

╭─「 📥 DESCARGA 」─╮
│ .play .ytmp4 .play2 .tiktok
│ .ytmp4doc .mp4 .ytv .ig
╰───────────────

╭─「 🧰 HERRAMIENTAS 」─╮
│ .lid .hd .deepseek
│ .tourl .apk .ss
╰───────────────

╭─「 👑 CREADOR 」─╮
│ .dsowner .sendmeme .update
╰───────────────

╭─「 📚 INFO 」─╮
│ .creador .servers .sugerir
╰───────────────

╭─「 🎲 GACHA ANIME 」─╮
│ .infoanime .harem .waifu .c .rw
╰───────────────

╭─「 👥 GRUPO 」─╮
│ .on/off welcome
│ .on/off antilink
│ .kick .personalidad .top .invocar
╰───────────────

╭─「 🔎 BÚSQUEDA 」─╮
│ .imagen .pinterest .tiktoksearch .yts
╰───────────────

╭─「 🖼️ STICKERS 」─╮
│ .sticker .toimg .stickersearch
╰───────────────

╭─「 🤖 IA 」─╮
│ .adonix .dalle .iavoz .ask .gemini
╰───────────────

╭─「 📢 CANALES 」─╮
│ .nuevafotochannel .avisoschannel .reaccioneschannel
│ .silenciarcanal .resiviravisos .nuevonombrecanal
╰───────────────

🚀 *Desarrollado por GonBotV1*
`.trim();

    } else {
      // Menú para SUBBOTS
      bannerURL = bannerSubbotURL;
      text = `
╭─[ 🤖 SUB-BOT ]─╮
│ 👤 Hola: *${name}*
│ 📅 Fecha: *${date}*
│ ⏱️ Uptime: *${uptime}*
╰────────────────────╯

╭─「 🎧 DESCARGAS 」─╮
│ .play .ytmp3 .ytmp4
│ .tiktok .mp4
╰───────────────

╭─「 🎮 JUEGOS/ECONOMÍA 」─╮
│ .bal .work .crimen .slut
╰───────────────

╭─「 👤 INFO 」─╮
│ .menu .creador
╰───────────────

╭─「 🤖 IA / TOOLS 」─╮
│ .iavoz .gemini .hd
╰───────────────

🚀 *Subbot del Proyecto GonBot*
`.trim();
    }

    // Enviar el mensaje con banner e información
    await conn.sendMessage(m.chat, {
      image: { url: bannerURL },
      caption: text,
      mentions: [m.sender]
    }, { quoted: m });

  } catch (e) {
    console.error('❌ Error en el menú:', e);
    await conn.reply(m.chat, '❎ Error al mostrar el menú.', m);
  }
};

handler.command = ['menu', 'menú', 'help'];
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}