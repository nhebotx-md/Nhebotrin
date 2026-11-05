import { sendYouhuGame } from './_youhu-rich.js';
const pluginConfig = { name:'ttc-youhu', alias:['ttc'], category:'game', description:'Youhu Tic-Tac-Toe Premium', usage:'.ttc', example:'.ttc', isOwner:false, isPremium:false, isGroup:false, isPrivate:false, cooldown:5, energi:1, isEnabled:true };
async function handler(m,{sock}) { return sendYouhuGame(m,sock,(text)=>m.reply(text),{name:'Tic-Tac-Toe Premium',file:'ttc',title:'Tic-Tac-Toe Premium',trustedSources:['pastebin.com'],useCase:'WA_BOT_MSG',forwardOrigin:'META_AI'}); }
export { pluginConfig as config, handler };
