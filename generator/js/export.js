import { buildOverlay } from "./build.js";

export async function exportCSS(playerCSS){

    const css = await buildOverlay(playerCSS);

    const blob = new Blob(
        [css],
        {
            type:"text/css"
        }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "overlay.css";

    a.click();

    URL.revokeObjectURL(url);

}

loading.style.display="block";

await exportCSS(css);

loading.style.display="none";