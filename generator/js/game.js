/******************************************************************************
 * Discord Character Overlay Generator
 * game.js
 *
 * Game Manager
 ******************************************************************************/

import { DOM } from "./config.js";
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

/**
 * ゲームデータを初期化する
 */
export async function initializeGame() {

    try {

        games = await loadJson("./assets/games.json");

        createGameList();

        registerEvents();

    }
    catch (error) {

        console.error(error);

        throw error;

    }

}


/*=============================================================================
    Create Game List
=============================================================================*/

/**
 * ゲーム選択リストを作成する
 */
function createGameList() {

    const gameSelect = getElement(DOM.GAME_SELECT);

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

/**
 * ゲーム選択イベントを登録する
 */
function registerEvents() {

    const gameSelect =
        getElement(DOM.GAME_SELECT);

    const characterSelect =
        getElement(DOM.CHARACTER_SELECT);


    gameSelect.addEventListener(
        "change",
        event => {

            selectGame(
                event.target.value
            );

        }
    );


    characterSelect.addEventListener(
        "change",
        updatePreview
    );

}


/*=============================================================================
    Select Game
=============================================================================*/

/**
 * 選択中のゲームを変更する
 *
 * @param {string} gameId
 */
function selectGame(gameId) {

    currentGame = games.find(
        game => game.id === gameId
    );


    if (!currentGame) {

        throw new Error(
            `ゲームが見つかりません: ${gameId}`
        );

    }


    updateCharacterList();

}


/*=============================================================================
    Character
=============================================================================*/

/**
 * キャラクター選択リストを更新する
 */
function updateCharacterList() {

    const characterSelect =
        getElement(DOM.CHARACTER_SELECT);

    characterSelect.innerHTML = "";


    if (!currentGame) {

        return;

    }


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

/**
 * 現在選択されているゲームを取得する
 *
 * @returns {Object|null}
 */
export function getCurrentGame() {

    return currentGame;

}


/**
 * ゲーム一覧を取得する
 *
 * @returns {Array}
 */
export function getGames() {

    return games;

}