import { sendYouhuGame } from './_youhu-rich.js';
const pluginConfig = { name:'dino-youhu', alias:['dino','runner'], category:'game', description:'Youhu Dino Runner', usage:'.dino', example:'.dino', isOwner:false, isPremium:false, isGroup:false, isPrivate:false, cooldown:5, energi:1, isEnabled:true };
async function handler(m,{sock}) { return sendYouhuGame(m,sock,(text)=>m.reply(text),{name:'Dino Runner',file:'dino',title:'Fiora Sylvie',trustedSources:['nox.dev'],useCase:1,messageType:1,submessageType:2,forwardOrigin:4}); }
export { pluginConfig as config, handler };
