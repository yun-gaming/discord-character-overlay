/******************************************************************************
 * Discord Character Overlay Generator
 * preview.js
 *
 * Preview Manager
 ******************************************************************************/

import { DOM, GITHUB } from "./config.js";
import { getElement } from "./dom.js";
import { getCurrentGame } from "./game.js";


/*=============================================================================
    Update Preview
=============================================================================*/

/**
 * 選択中キャラクターのプレビューを更新する
 */
export function updatePreview() {

    const previewImage =
        getElement(DOM.PREVIEW_IMAGE);

    const previewName =
        getElement(DOM.PREVIEW_NAME);

    const characterSelect =
        getElement(DOM.CHARACTER_SELECT);

    const game = getCurrentGame();


    if (!game) {

        clearPreview();

        return;

    }


    const characterId =
        characterSelect.value;


    if (!characterId) {

        clearPreview();

        return;

    }


    const character = game.characters.find(
        item => item.id === characterId
    );


    if (!character) {

        clearPreview();

        return;

    }


    previewImage.src =
        createImageUrl(
            game.folder,
            character.image
        );

    previewImage.alt =
        `${game.name} - ${character.name}`;

    previewName.textContent =
        character.name;

}


/*=============================================================================
    Clear Preview
=============================================================================*/

/**
 * プレビュー表示を初期化する
 */
function clearPreview() {

    const previewImage =
        getElement(DOM.PREVIEW_IMAGE);

    const previewName =
        getElement(DOM.PREVIEW_NAME);

    previewImage.removeAttribute("src");

    previewImage.alt =
        "キャラクタープレビュー";

    previewName.textContent = "";

    }


/*=============================================================================
    Image URL
=============================================================================*/

/**
 * キャラクター画像のGitHub RAW URLを生成する
 *
 * @param {string} folder
 * @param {string} image
 * @returns {string}
 */
function createImageUrl(
    folder,
    image
) {

    return `${GITHUB.RAW_ROOT}/${folder}/${image}`;

}