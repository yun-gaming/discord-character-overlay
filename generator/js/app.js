/******************************************************************************
 * Discord Character Overlay Generator
 * app.js
 *
 * Application Entry Point
 ******************************************************************************/

import { initializeGame } from "./game.js";
import { initializePlayer } from "./player.js";

import { buildCSS } from "./build.js";
import { copyCSS } from "./export.js";

import {

    showLoading,

    hideLoading,

    showMessage,

    showError

} from "./ui.js";

import { getElement } from "./dom.js";

/*=============================================================================
    Initialize
=============================================================================*/

async function initialize() {

    await initializeGame();

    initializePlayer();

    registerEvents();

}

/*=============================================================================
    Register Events
=============================================================================*/

function registerEvents() {

    getElement("GENERATE_BUTTON")

        .addEventListener(

            "click",

            onGenerateCSS

        );

}

/*=============================================================================
    Generate CSS
=============================================================================*/

async function onGenerateCSS() {

    try {

        showLoading();

        const css = await buildCSS();

        await copyCSS(css);

        showMessage(

            "CSSをクリップボードへコピーしました。"

        );

    }
    catch(error){

        console.error(error);

        showError(error.message);

    }
    finally{

        hideLoading();

    }

}

/*=============================================================================
    Startup
=============================================================================*/

window.addEventListener(

    "DOMContentLoaded",

    initialize

);