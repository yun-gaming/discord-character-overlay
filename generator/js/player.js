/******************************************************************************
 * Discord Character Overlay Generator
 * player.js
 *
 * Player Manager
 ******************************************************************************/

import { DOM, VALIDATION } from "./config.js";
import { getElement } from "./dom.js";
import { getCurrentGame } from "./game.js";
import {
    validateDiscordId,
    validatePlayerCount
} from "./validator.js";
import {
    showError,
    clearPlayerForm
} from "./ui.js";


/*=============================================================================
    Private
=============================================================================*/

const players = [];


/*=============================================================================
    Initialize
=============================================================================*/

/**
 * プレイヤー管理を初期化する
 */
export function initializePlayer() {

    const addButton =
        getElement(DOM.ADD_PLAYER_BUTTON);

    addButton.addEventListener(
        "click",
        addPlayer
    );

}


/*=============================================================================
    Add Player
=============================================================================*/

/**
 * 入力内容からプレイヤーを追加する
 */
function addPlayer() {

    const discordId =
        getElement(DOM.DISCORD_ID)
            .value
            .trim();

    const characterSelect =
        getElement(DOM.CHARACTER_SELECT);

    const game =
        getCurrentGame();


    /*------------------------------
        Game
    ------------------------------*/

    if (!game) {

        showError(
            "ゲームが選択されていません。"
        );

        return;

    }


    /*------------------------------
        Character
    ------------------------------*/

    if (!characterSelect.value) {

        showError(
            "キャラクターを選択してください。"
        );

        return;

    }


    /*------------------------------
        Discord User ID
    ------------------------------*/

    if (!validateDiscordId(discordId)) {

        showError(
            "Discord User IDが正しくありません。"
        );

        return;

    }

    /*------------------------------
    Duplicate Discord User ID
    ------------------------------*/

    const duplicatePlayer =
        players.some(
            player => player.discordId === discordId
        );

    if (duplicatePlayer) {

        showError(
            "このDiscord User IDはすでに登録されています。"
        );

        return;

    }


    /*------------------------------
        Player Count
    ------------------------------*/

    const nextPlayerCount =
        players.length + 1;

    if (!validatePlayerCount(nextPlayerCount)) {

        showError(
            `登録できるプレイヤーは最大${VALIDATION.MAX_PLAYERS}人です。`
        );

        return;

    }


    /*------------------------------
        Create Player
    ------------------------------*/

    const player =
        createPlayer(
            discordId,
            game.id,
            characterSelect.value
        );

    players.push(player);

    renderPlayerList();

    clearPlayerForm();

}


/*=============================================================================
    Create Player
=============================================================================*/

/**
 * プレイヤーデータを作成する
 *
 * @param {string} discordId
 * @param {string} gameId
 * @param {string} characterId
 * @returns {Object}
 */
function createPlayer(
    discordId,
    gameId,
    characterId
) {

    return {

        /*
         * Generator内部で使用するID。
         * Discord User IDとは別物。
         */
        id: crypto.randomUUID(),

        discordId,

        gameId,

        characterId

    };

}


/*=============================================================================
    Render Player List
=============================================================================*/

/**
 * 登録済みプレイヤーを一覧表示する
 */
function renderPlayerList() {

    const playerList =
        getElement(DOM.PLAYER_LIST);

    playerList.innerHTML = "";


    players.forEach(
        (player, index) => {

            const item =
                document.createElement("li");

            item.className =
                "player-card";


            const number =
                document.createElement("strong");

            number.textContent =
                `Player ${index + 1}`;


            const info =
                document.createElement("div");

            info.className =
                "player-card-info";


            const discordId =
                document.createElement("p");

            discordId.textContent =
                `Discord ID: ${player.discordId}`;


            const game =
                document.createElement("p");

            game.textContent =
                `Game: ${player.gameId}`;


            const character =
                document.createElement("p");

            character.textContent =
                `Character: ${player.characterId}`;


            info.append(
                discordId,
                game,
                character
            );

            item.append(
                number,
                info
            );

            playerList.appendChild(item);

        }
    );

}


/*=============================================================================
    Getter
=============================================================================*/

/**
 * 登録済みプレイヤー一覧を取得する
 *
 * @returns {Array}
 */
export function getPlayers() {

    return players;

}