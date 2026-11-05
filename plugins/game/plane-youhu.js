import { sendYouhuGame } from './_youhu-rich.js';
const pluginConfig = { name:'plane-youhu', alias:['plane','spacerush'], category:'game', description:'Youhu Space Rush', usage:'.plane', example:'.plane', isOwner:false, isPremium:false, isGroup:false, isPrivate:false, cooldown:5, energi:1, isEnabled:true };
async function handler(m,{sock}) { return sendYouhuGame(m,sock,(text)=>m.reply(text),{name:'Space Rush',file:'plane',title:'Space Rush 🚀',trustedSources:['noxXza.js','noxXza.dev'],useCase:'NOXZA_EXE',contextInfo:{stanzaId:'A5FBA758891A16FD260767C2569F87E4',quotedMessage:{extendedTextMessage:{previewType:'NONE',inviteLinkGroupTypeV2:'DEFAULT'}}},forwardOrigin:'META_AI'}); }
export { pluginConfig as config, handler };
