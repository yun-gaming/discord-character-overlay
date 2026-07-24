/******************************************************************************
 * Discord Character Overlay Generator
 * game.js
 *
 * Game Manager
 ******************************************************************************/

import { loadJson } from "./loader.js";
import { getElement } from "./dom.js";
import { updatePreview } from "./preview.js";

/*=============================================================================
    Private
=============================================================================*/

let games = [];

let currentGame = null;

/*=============================================================================
    Initialize
=============================================================================*/

export async function initializeGame() {

    try {

        games = await loadJson("../assets/games.json");

        createGameList();

        registerEvents();

    }
    catch (error) {

        console.error(error);

    }

}

/*=============================================================================
    Create Game List
=============================================================================*/

function createGameList() {

    const gameSelect = getElement("GAME_SELECT");

    gameSelect.innerHTML = "";

    games.forEach(game => {

        const option = document.createElement("option");

        option.value = game.id;

        option.textContent = game.name;

        gameSelect.appendChild(option);

    });

    if (games.length > 0) {

        selectGame(games[0].id);

    }

}

/*=============================================================================
    Event
=============================================================================*/

function registerEvents() {

    const gameSelect = getElement("GAME_SELECT");

    gameSelect.addEventListener("change", event => {

        selectGame(event.target.value);

    });

}

/*=============================================================================
    Select Game
=============================================================================*/

function selectGame(gameId) {

    currentGame = games.find(game => game.id === gameId);

    updateCharacterList();

}

/*=============================================================================
    Character
=============================================================================*/

function updateCharacterList() {

    const characterSelect = getElement("CHARACTER_SELECT");

    characterSelect.innerHTML = "";

    currentGame.characters.forEach(character => {

        const option = document.createElement("option");

        option.value = character.id;

        option.textContent = character.name;

        characterSelect.appendChild(option);

    });

    updatePreview();

}

/*=============================================================================
    Getter
=============================================================================*/

export function getCurrentGame() {

    return currentGame;

}

export function getGames() {

    return games;

}