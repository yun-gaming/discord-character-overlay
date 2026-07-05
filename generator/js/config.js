// generator/js/config.js

export function getImageBaseUrl() {
    return `https://raw.githubusercontent.com/${CONFIG.github.owner}/${CONFIG.github.repository}/${CONFIG.github.branch}`;
}

export const CONFIG = {

    generatorVersion: "1.0.0",

    github: {

        owner: "yun-gaming",

        repository: "image",

        branch: "main"

    },

    build:{

        minify:false,

        includeComment:true,

        buildLog:true

    }

};