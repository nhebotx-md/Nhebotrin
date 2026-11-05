import { sendYouhuGame } from './_youhu-rich.js';
const pluginConfig = { name:'mbim-youhu', alias:['mbim','highway','car'], category:'game', description:'Youhu Highway Rush', usage:'.mbim', example:'.mbim', isOwner:false, isPremium:false, isGroup:false, isPrivate:false, cooldown:5, energi:1, isEnabled:true };
async function handler(m,{sock}) { return sendYouhuGame(m,sock,(text)=>m.reply(text),{name:'Highway Rush',file:'mbim',title:'Highway Rush 🏎️',trustedSources:['noxXza.store','noxXza.dev'],useCase:'NOXZA_EXE',contextInfo:{stanzaId:'A5FBA758891A16FD260767C2569F87E4',quotedMessage:{extendedTextMessage:{previewType:'NONE',inviteLinkGroupTypeV2:'DEFAULT'}}},forwardOrigin:'META_AI'}); }
export { pluginConfig as config, handler };
