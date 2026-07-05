export function validateDiscordId(id){

    if(!/^[0-9]{17,20}$/.test(id)){

        alert("Discord UserIDが正しくありません。");

        return false;

    }

    return true;

}

export function isDuplicate(players,id){

    return players.some(

        player=>player.discordId===id

    );

}