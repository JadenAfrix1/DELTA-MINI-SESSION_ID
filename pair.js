import { makeid } from './gen-id.js';
import express from 'express';
import fs from 'fs';
import pino from 'pino';
import pkg from '@whiskeysockets/baileys';
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = pkg;

import { upload } from './mega.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}

router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function MALVIN_XD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
            var items = ["Safari"];
            function selectRandomItem(array) {
                var randomIndex = Math.floor(Math.random() * array.length);
                return array[randomIndex];
            }
            var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "malvin~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃

𝐓ʜᴀɴᴋs ғᴏʀ ᴜsɪɴɢ ᴏᴜʀ ʙᴏᴛ🪀

ғᴏʟʟᴏᴡ ᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ

https://whatsapp.com/channel/0029VbBxcOi9xVJitqVSh13W

sᴛᴀʀ ᴀɴᴅ ғᴏʀᴋ ᴏᴜʀ ʀᴇᴘᴏ

https://github.com/JadenAfrix1/DELTA-MINI

©𝐏ᴏᴡᴇʀᴇᴅ ʙʏ 𝐃ᴇʟᴛᴀ 𝐓ᴇᴄʜ®`; 
                        await sock.sendMessage(sock.user.id, {
                            text: desc,
                            contextInfo: {
                                externalAdReply: {
                                    title: "𝐃ᴇʟᴛᴀ 𝐓ᴇᴄʜ®",
                                    thumbnailUrl: "https://files.catbox.moe/yjamy1.jpg",
                                    sourceUrl: "https://whatsapp.com/channel/0029VbBxcOi9xVJitqVSh13W",
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }  
                            }
                        }, {quoted:code })
                    } catch (e) {
                        let ddd = sock.sendMessage(sock.user.id, { text: String(e) });
                        let desc = `𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃

𝐓ʜᴀɴᴋs ғᴏʀ ᴜsɪɴɢ ᴏᴜʀ ʙᴏᴛ🪀

ғᴏʟʟᴏᴡ ᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ

https://whatsapp.com/channel/0029VbBxcOi9xVJitqVSh13W

sᴛᴀʀ ᴀɴᴅ ғᴏʀᴋ ᴏᴜʀ ʀᴇᴘᴏ

https://github.com/JadenAfrix1/DELTA-MINI

©𝐏ᴏᴡᴇʀᴇᴅ ʙʏ 𝐃ᴇʟᴛᴀ 𝐓ᴇᴄʜ®`;
                        await sock.sendMessage(sock.user.id, {
                            text: desc,
                            contextInfo: {
                                externalAdReply: {
                                    title: "𝐃ᴇʟᴛᴀ 𝐓ᴇᴄʜ®",
                                    thumbnailUrl: "https://files.catbox.moe/yjamy1.jpg",
                                    sourceUrl: "https://whatsapp.com/channel/0029VbBxcOi9xVJitqVSh13W",
                                    mediaType: 2,
                                    renderLargerThumbnail: true,
                                    showAdAttribution: true
                                }  
                            }
                        }, {quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    MALVIN_XD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
    return await MALVIN_XD_PAIR_CODE();
});

export default router;
