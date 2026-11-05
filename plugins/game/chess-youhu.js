import { sendYouhuGame } from './_youhu-rich.js';
const pluginConfig = { name:'chess-youhu', alias:['chess','catur','mini-chess'], category:'game', description:'Youhu Mini Chess', usage:'.chess', example:'.chess', isOwner:false, isPremium:false, isGroup:false, isPrivate:false, cooldown:5, energi:1, isEnabled:true };
async function handler(m,{sock}) { return sendYouhuGame(m,sock,(text)=>m.reply(text),{name:'Chess',file:'chess',title:'noxXza Mini Chess ♟️',trustedSources:['thenuxofc.store','nixel.dev'],useCase:'WA_BOT_MSG',contextInfo:{stanzaId:'AC5D4630F1EB7BCFEC6055968A9EE083',quotedMessage:{}},forwardOrigin:'META_AI'}); }
export { pluginConfig as config, handler };
