/******************************************************************************
 * Discord Character Overlay Generator
 * ui.js
 *
 * User Interface Manager
 ******************************************************************************/

import { DOM } from "./config.js";
import { getElement } from "./dom.js";


/*=============================================================================
    Loading
=============================================================================*/

/**
 * ローディング表示
 */
export function showLoading() {

    const loading =
        getElement(DOM.LOADING);

    loading.hidden = false;

}


/**
 * ローディング非表示
 */
export function hideLoading() {

    const loading =
        getElement(DOM.LOADING);

    loading.hidden = true;

}


/*=============================================================================
    Message
=============================================================================*/

/**
 * メッセージ表示
 *
 * @param {string} message
 */
export function showMessage(message) {

    alert(message);

}


/**
 * エラーメッセージ表示
 *
 * @param {string} message
 */
export function showError(message) {

    alert(
        `Error\n\n${message}`
    );

}


/*=============================================================================
    Button
=============================================================================*/

/**
 * ボタンを有効化
 *
 * @param {string} id
 */
export function enableButton(id) {

    getElement(id).disabled =
        false;

}


/**
 * ボタンを無効化
 *
 * @param {string} id
 */
export function disableButton(id) {

    getElement(id).disabled =
        true;

}


/*=============================================================================
    Clear Form
=============================================================================*/

/**
 * Player入力欄をクリア
 */
export function clearPlayerForm() {

    getElement(
        DOM.DISCORD_ID
    ).value = "";

}