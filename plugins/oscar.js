const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let jarot = `
╭─────[ *RULES* ]─────✧
┴
│¹ Dilarang Hina Bot / Owner
│² Dilarang Spam Command
│³ Dilarang Kirim Virtex ke bot
│⁴ Dilarang Spam Menu Ga Jelas
│⁵ Dilarang Telp / Vc
│⁶ Dilarang Culik Bot
│⁷ Dilarang Promosi
│⁸ Dilarang Meniru pesan Bot
│⁹ Bot Tidak Menerima Save Kontak
│¹⁰ Dilarang Chat Owner Ga Jelas
│¹¹ No plagiat
┬
╰──────────···
╭─────[ *HUKUM* ]─────✧
┴
│ 1 & 11 = Block + banned permanent
│ 2,4,6 & 8 = Banned sementara
│ 3 = War
│ 5 = Block sementara
│ 9 & 10 = Block permanent
┬
╰──────────···
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '📮 Silahkan pilih Command Dibawah ini',
           hydratedButtons: [{
             urlButton: {
               displayText: '𝙂𝙧𝙤𝙪𝙥 𝘽𝙤𝙩🎮',
               url: 'https://chat.whatsapp.com/IqZke0cAG6G3iVsnB9myfL'
             }

           },
                {
               urlButton: {
               displayText: '𝙈𝙮 𝙒𝙚𝙗🔮',
               url: 'https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ'
             }

           },
               {
             quickReplyButton: {
               displayText: '𝙎𝙘𝙧𝙞𝙥𝙩',
               id: '.sc',
             }
             
           },
               {
             quickReplyButton: {
               displayText: '𝙈𝙚𝙣𝙪',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: '𝙍𝙪𝙣𝙩𝙞𝙢𝙚',
               id: '.runtime',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'update']
handler.customPrefix = /^(rules|rule|snk|.rules|.rule|.snk)$/i
handler.command = new RegExp
handler.help = ['.rules']
module.exports = handler
