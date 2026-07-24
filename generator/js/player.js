/******************************************************************************
 * Discord Character Overlay Generator
 * player.js
 *
 * Player Manager
 ******************************************************************************/

import { getElement } from "./dom.js";
import { getCurrentGame } from "./game.js";
import { validateDiscordId } from "./validator.js";

/*=============================================================================
    Private
=============================================================================*/

const players = [];

/*=============================================================================
    Initialize
=============================================================================*/

export function initializePlayer() {

    const addButton = getElement("ADD_PLAYER_BUTTON");

    addButton.addEventListener("click", addPlayer);

}

/*=============================================================================
    Add Player
=============================================================================*/

function addPlayer() {

    const discordId = getElement("DISCORD_ID").value.trim();
    const characterSelect = getElement("CHARACTER_SELECT");


    const game = getCurrentGame();

    if (!game) {

        alert("ゲームが選択されていません。");
        return;

    }

    if (!validateDiscordId(discordId)) {
        alert("Discord User IDが正しくありません。");
        return;

    }

    const player = {

        discordId: discordId,

        gameId: game.id,

        characterId: characterSelect.value

    };

    players.push(player);

    renderPlayerList();

    clearInput();

}