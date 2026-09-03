/******************************************************************************
 * Discord Character Overlay Generator
 * config.js
 *
 * Application Configuration
 ******************************************************************************/

/*=============================================================================
    Application
=============================================================================*/

export const APP = {

    NAME: "Discord Character Overlay Generator",

    VERSION: "1.0.0-beta",

    AUTHOR: "YUN"

};


/*=============================================================================
    GitHub
=============================================================================*/

export const GITHUB = {

    USER: "yun-gaming",

    REPOSITORY:
        "discord-character-overlay",

    BRANCH:
        "master",

    RAW_ROOT:
        "https://raw.githubusercontent.com/yun-gaming/discord-character-overlay/master/images"

};


/*=============================================================================
    DOM ID
=============================================================================*/

export const DOM = {

    GAME_SELECT: "gameSelect",

    CHARACTER_SELECT: "characterSelect",

    DISCORD_ID: "discordId",

    PREVIEW_IMAGE: "preview",

    PREVIEW_NAME: "previewName",

    PLAYER_LIST: "playerList",

    ADD_PLAYER_BUTTON: "addPlayer",

    GENERATE_BUTTON: "generateCSS",

    DOWNLOAD_BUTTON: "downloadCSS",

    LOADING: "loading",

    LOADING_MESSAGE: "loadingMessage"

};


/*=============================================================================
    Validation
=============================================================================*/

export const VALIDATION = {

    DISCORD_ID_LENGTH: 19,

    MIN_PLAYERS: 1,

    MAX_PLAYERS: 20

};


/*=============================================================================
    Preview
=============================================================================*/

export const PREVIEW = {

    IMAGE_WIDTH: 220,

    IMAGE_HEIGHT: 320

};


/*=============================================================================
    Build
=============================================================================*/

export const BUILD = {

    CSS_FILE_NAME: "overlay.css"

};


/*=============================================================================
    Future
=============================================================================*/

export const FEATURE = {

    ENABLE_THEME: false,

    ENABLE_PACK: false,

    ENABLE_MULTI_LANGUAGE: false

};