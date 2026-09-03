/******************************************************************************
 * Discord Character Overlay Generator
 * export.js
 *
 * Export Manager
 ******************************************************************************/

import { BUILD } from "./config.js";


/*=============================================================================
    Copy CSS
=============================================================================*/

/**
 * CSSをクリップボードへコピーする
 *
 * @param {string} css
 * @returns {Promise<void>}
 */
export async function copyCSS(css) {

    await navigator.clipboard.writeText(css);

}


/*=============================================================================
    Download CSS
=============================================================================*/

/**
 * CSSファイルをダウンロードする
 *
 * @param {string} css
 */
export function downloadCSS(css) {

    const blob = new Blob(
        [css],
        {
            type: "text/css;charset=utf-8"
        }
    );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href =
        url;

    link.download =
        BUILD.CSS_FILE_NAME;


    document.body.appendChild(link);

    link.click();

    link.remove();


    URL.revokeObjectURL(url);

}