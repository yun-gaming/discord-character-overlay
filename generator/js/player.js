import { exportCSS } from "./export.js";
const playerCSS = createPlayerCSS(players);

exportCSS(playerCSS);

button.addEventListener("click",()=>{

    players.splice(index,1);

    refreshPlayerList();

});

if(isDuplicate(players,discordId)){

    alert("このDiscord UserIDは既に登録されています。");

    return;

}

characterSelect.addEventListener(

"change",

updatePreview

);

export function createPlayerCSS(players){

    let css = "";

    for(const player of players){

        css += `
img[src*="${player.discordId}"]+div{

    --dco-character-image:
url("https://raw.githubusercontent.com/yun-gaming/image/main/${player.game}/${player.character}.png");

}
`;

    }

    return css;

}