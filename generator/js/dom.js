/******************************************************************************
 * Discord Character Overlay Generator
 * dom.js
 *
 * DOM Manager
 ******************************************************************************/

/*=============================================================================
    Get Element
=============================================================================*/

/**
 * IDからDOM要素を取得する
 *
 * @param {string} id
 * @returns {HTMLElement}
 */
export function getElement(id) {

    const element = document.getElementById(id);

    if (!element) {

        throw new Error(
            `DOM element not found: #${id}`
        );

    }

    return element;

}


/*=============================================================================
    Query Element
=============================================================================*/

/**
 * CSSセレクタからDOM要素を1つ取得する
 *
 * @param {string} selector
 * @returns {Element|null}
 */
export function queryElement(selector) {

    return document.querySelector(selector);

}


/*=============================================================================
    Query Elements
=============================================================================*/

/**
 * CSSセレクタからDOM要素を複数取得する
 *
 * @param {string} selector
 * @returns {NodeListOf<Element>}
 */
export function queryElements(selector) {

    return document.querySelectorAll(selector);

}