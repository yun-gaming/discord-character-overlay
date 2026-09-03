/******************************************************************************
 * Discord Character Overlay Generator
 * app.js
 *
 * Application Entry Point
 ******************************************************************************/

import { DOM } from "./config.js";

import { initializeGame } from "./game.js";
import { initializePlayer } from "./player.js";

import { buildCSS } from "./build.js";

import {
    copyCSS,
    downloadCSS
} from "./export.js";

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

/**
 * アプリケーションを初期化する
 */
async function initialize() {

    try {

        await initializeGame();

        initializePlayer();

        registerEvents();

    }
    catch (error) {

        console.error(error);

        showError(
            error.message
        );

    }

}


/*=============================================================================
    Register Events
=============================================================================*/

/**
 * アプリケーションイベントを登録する
 */
function registerEvents() {

    getElement(
        DOM.GENERATE_BUTTON
    ).addEventListener(
        "click",
        onGenerateCSS
    );


    getElement(
        DOM.DOWNLOAD_BUTTON
    ).addEventListener(
        "click",
        onDownloadCSS
    );

}


/*=============================================================================
    Generate CSS
=============================================================================*/

/**
 * CSSを生成しクリップボードへコピーする
 */
async function onGenerateCSS() {

    try {

        showLoading();

        const css =
            await buildCSS();

        await copyCSS(css);

        showMessage(
            "CSSをクリップボードへコピーしました。"
        );

    }
    catch (error) {

        console.error(error);

        showError(
            error.message
        );

    }
    finally {

        hideLoading();

    }

}


/*=============================================================================
    Download CSS
=============================================================================*/

/**
 * CSSを生成しファイルとしてダウンロードする
 */
async function onDownloadCSS() {

    try {

        showLoading();

        const css =
            await buildCSS();

        downloadCSS(css);

        showMessage(
            "CSSファイルをダウンロードしました。"
        );

    }
    catch (error) {

        console.error(error);

        showError(
            error.message
        );

    }
    finally {

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