/******************************************************************************
 * Discord Character Overlay Generator
 * preview.js
 *
 * Preview Manager
 ******************************************************************************/

import { GITHUB } from "./config.js";
import { getElement } from "./dom.js";
import { getCurrentGame } from "./game.js";

/*=============================================================================
    Update Preview
=============================================================================*/

export function updatePreview() {

    const previewImage = getElement("PREVIEW_IMAGE");
    const characterSelect = getElement("CHARACTER_SELECT");

    const game = getCurrentGame();

    if (!game) {

        previewImage.removeAttribute("src");
        return;

    }

    const characterId = characterSelect.value;

    const imageUrl = createImageUrl(game.id, characterId);

    previewImage.src = imageUrl;

}

/*=============================================================================
    Image URL
=============================================================================*/

function createImageUrl(gameId, characterId) {

    return `${GITHUB.RAW_ROOT}/${gameId}/${characterId}.png`;

}