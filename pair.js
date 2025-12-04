import { makeid } from './gen-id.js';
import express from 'express';
import fs from 'fs';
import pino from 'pino';
import pkg from '@whiskeysockets/baileys';
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore } = pkg;

import { upload } from './mega.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Utility to safely remove temp files/folders
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}

router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function MALVIN_XD_PAIR_CODE() {
        try {
            const { state, saveCreds } = await useMultiFileAuthState('./temp/' + id);
            var randomItem = "Safari";
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
                    return res.json({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {
                const { connection, lastDisconnect } = s;
                if (connection === "open") {
                    try {
                        await delay(5000);
                        let rf = path.join(__dirname, `temp/${id}/creds.json`);
                        let data = fs.readFileSync(rf);
                        let mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "malvin~" + string_session;
                        await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃\n\n𝐓ʜᴀɴᴋs ғᴏʀ ᴜsɪɴɢ ...`;
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
                        });
                    } catch (e) {
                        await sock.sendMessage(sock.user.id, { text: String(e) });
                        // Error response to client
                        if (!res.headersSent) {
                            res.status(500).json({ error: String(e) });
                        }
                    } finally {
                        await delay(10);
                        sock.ws.close();
                        removeFile(`./temp/${id}`);
                    }
                } else if (
                    connection === "close" &&
                    lastDisconnect &&
                    lastDisconnect.error &&
                    lastDisconnect.error.output.statusCode != 401
                ) {
                    await delay(10);
                    MALVIN_XD_PAIR_CODE();
                }
            });
        } catch (err) {
            removeFile(`./temp/${id}`);
            if (!res.headersSent) {
                res.status(503).json({ code: "❗ Service Unavailable" });
            }
        }
    }
    await MALVIN_XD_PAIR_CODE();
});

export default router;