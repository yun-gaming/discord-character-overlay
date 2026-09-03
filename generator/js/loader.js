/******************************************************************************
 * Discord Character Overlay Generator
 * loader.js
 *
 * Data Loader
 ******************************************************************************/

import { GITHUB } from "./config.js";


/*=============================================================================
    JSON Loader
=============================================================================*/

/**
 * JSONファイルを読み込む
 *
 * @param {string} path
 * @returns {Promise<Object>}
 */
export async function loadJson(path) {

    const response = await fetch(path);

    if (!response.ok) {

        throw new Error(
            `JSONファイルの読み込みに失敗しました: ${path} (${response.status})`
        );

    }

    return await response.json();

}


/*=============================================================================
    GitHub Loader
=============================================================================*/

/**
 * GitHub RAWからJSONファイルを読み込む
 *
 * @param {string} file
 * @returns {Promise<Object>}
 */
export async function loadGithubJson(file) {

    const path = `${GITHUB.RAW_ROOT}/${file}`;

    return await loadJson(path);

}