export function updatePreview(character){

    const preview=document.getElementById("preview");

    preview.src=

`https://raw.githubusercontent.com/yun-gaming/image/main/${character.folder}/${character.image}`;

}