const TEMPLATE_FILES = [
    "../overlay/variables.css",
    "../overlay/layout.css",
    "../overlay/character.css",
    "../overlay/animation.css",
    "../overlay/name.css",
    "../overlay/mute.css",
    "../overlay/theme.css"
];

/**
 * CSSテンプレートを結合する
 */
export async function buildOverlay(playerCSS){

    let output = "";

    for(const file of TEMPLATE_FILES){

        const response = await fetch(file);

        if(!response.ok){

            throw new Error(`${file} の読み込みに失敗しました`);

        }

        output +=
`/*==================================================
${file}
==================================================*/

`;

        output += await response.text();

        output += "\n\n";

    }

    output +=
`/*==================================================
players.css
==================================================*/

`;

    output += playerCSS;

    return output;

}import { loadGames } from "./game.js";

loadGames();