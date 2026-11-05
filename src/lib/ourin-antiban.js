import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ANTIBAN_MODULE = path.join(__dirname, 'antibanSession.cjs');

let modPromise = null;
let initializedSock = null;
let initialized = false;

async function load() {
  if (!modPromise) {
    modPromise = import(ANTIBAN_MODULE).then((mod) => mod?.default ?? mod);
  }
  return modPromise;
}

function getBotJid(sock) {
  const id = sock?.user?.id || sock?.user?.jid || '';
  return typeof id === 'string' && id.trim() ? id.trim() : '__bot__';
}

export async function initializeOurinAntiban(sock) {
  if (!sock) return { ok: false, reason: 'socket tidak tersedia' };
  if (initialized && initializedSock === sock) return { ok: true, reused: true };

  try {
    const anti = await load();
    if (!anti || typeof anti.initializeAll !== 'function') {
      return { ok: false, reason: 'initializeAll tidak tersedia pada modul AntiBan' };
    }

    anti.initializeAll(sock, getBotJid(sock));
    initializedSock = sock;
    initialized = true;
    return { ok: true };
  } catch (error) {
    // AntiBan bukan dependency fatal: bot tetap boleh berjalan jika subsystem gagal.
    return { ok: false, reason: error?.message || String(error) };
  }
}

export async function getAntiban() {
  return load();
}
