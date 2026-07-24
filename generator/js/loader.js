
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

        throw new Error(`Failed to load JSON : ${path}`);

    }

    return await response.json();

}

/*=============================================================================
    GitHub Loader
=============================================================================*/

/**
 * GitHub RAWからJSONを取得
 *
 * @param {string} file
 * @returns {Promise<Object>}
 */
export async function loadGithubJson(file) {

    return loadJson(`${GITHUB.RAW_ROOT}/${file}`);

}