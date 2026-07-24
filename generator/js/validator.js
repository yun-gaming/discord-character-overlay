/******************************************************************************
 * Discord Character Overlay Generator
 * validator.js
 *
 * Validation
 ******************************************************************************/

import { VALIDATION } from "./config.js";

/*=============================================================================
    Discord ID
=============================================================================*/

/**
 * Discord User IDを検証する
 *
 * @param {string} discordId
 * @returns {boolean}
 */
export function validateDiscordId(discordId) {

    if (!discordId) {

        return false;

    }

    if (!/^\d+$/.test(discordId)) {

        return false;

    }

    return discordId.length >= 17 &&
           discordId.length <= VALIDATION.DISCORD_ID_LENGTH;

}

/*=============================================================================
    Player Count
=============================================================================*/

/**
 * プレイヤー人数を検証する
 *
 * @param {number} count
 * @returns {boolean}
 */
export function validatePlayerCount(count) {

    return count >= VALIDATION.MIN_PLAYERS &&
           count <= VALIDATION.MAX_PLAYERS;

}