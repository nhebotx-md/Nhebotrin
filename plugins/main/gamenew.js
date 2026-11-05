const pluginConfig = {
  name: 'gamenew',
  alias: ['newgame', 'youhugame'],
  category: 'main',
  description: 'Menu game Youhu untuk Ourin',
  usage: '.gamenew',
  example: '.gamenew',
  isOwner: false,
  isPremium: false,
  isGroup: false,
  isPrivate: false,
  cooldown: 3,
  energi: 0,
  isEnabled: true,
};

async function handler(m) {
  const p = m.prefix || '.';
  return m.reply(`╭─「 🎮 GAME CENTER 」
│
│  01  ♟️  Chess
│      └─ ${p}chess
│
│  02  🦖  Dino
│      └─ ${p}dino
│
│  03  🏎️  MBIM
│      └─ ${p}mbim
│
│  04  🚀  Plane
│      └─ ${p}plane
│
│  05  ❌⭕  Tic Tac Toe
│      └─ ${p}ttc
│
╰─「 OURIN GAMES 」`);
}

export { pluginConfig as config, handler };
