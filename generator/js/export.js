/******************************************************************************
 * Discord Character Overlay Generator
 * export.js
 *
 * Export Manager
 ******************************************************************************/

/*=============================================================================
    Copy CSS
=============================================================================*/

/**
 * CSSをクリップボードへコピー
 *
 * @param {string} css
 */
export async function copyCSS(css) {

    await navigator.clipboard.writeText(css);

}

/*=============================================================================
    Download CSS
=============================================================================*/

/**
 * CSSファイルをダウンロード
 *
 * @param {string} css
 */
export function downloadCSS(css) {

    const blob = new Blob(
        [css],
        { type: "text/css;charset=utf-8" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "overlay.css";

    link.click();

    URL.revokeObjectURL(url);

}