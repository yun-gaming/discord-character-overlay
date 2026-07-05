let games = [];

let players = [];

const gameSelect =
document.getElementById("gameSelect");

const characterSelect =
document.getElementById("characterSelect");

const playerList =
document.getElementById("playerList");

fetch("./assets/games.json")

.then(response => response.json())

.then(data=>{

    games=data;

    loadGames();

});

function loadGames(){

    gameSelect.innerHTML="";

    games.forEach(game=>{

        const option=document.createElement("option");

        option.value=game.id;

        option.textContent=game.name;

        gameSelect.appendChild(option);

    });

    loadCharacters();

}

gameSelect.addEventListener(

"change",

loadCharacters

);

function loadCharacters(){

    characterSelect.innerHTML="";

    const game=

    games.find(

        g=>g.id===gameSelect.value

    );

    game.characters.forEach(character=>{

        const option=

        document.createElement("option");

        option.value=character.id;

        option.textContent=

        character.name;

        characterSelect.appendChild(option);

    });

}

document

.getElementById("addPlayer")

.addEventListener(

"click",

()=>{

    const discordId=

    document

    .getElementById("discordId")

    .value.trim();

    if(discordId===""){

        alert("Discord IDを入力してください");

        return;

    }

    players.push({

        game:gameSelect.value,

        character:characterSelect.value,

        discordId

    });

    refreshPlayerList();

});

function refreshPlayerList(){

    playerList.innerHTML="";

    players.forEach(player=>{

        const div=

        document.createElement("div");

        div.textContent=

`${player.game}
 /
${player.character}
 /
${player.discordId}`;

        playerList.appendChild(div);

    });

}

document

.getElementById("generateCSS")

.addEventListener(

"click",

generateCSS

);

function generateCSS(){

    let css="";

    players.forEach(player=>{

        css+=`

img[src*="${player.discordId}"]+div{

    --dco-character-image:

url("https://raw.githubusercontent.com/yun-gaming/image/main/${player.game}/${player.character}.png");

}

`;

    });

    navigator.clipboard.writeText(css);

    alert("CSSをクリップボードへコピーしました。");

}