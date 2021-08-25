import { getCeleb } from "./celebrityDataProvider.js";
import { Celeb } from "./celebrity.js";

export const CelebList = () => {

    const contentElement = document.querySelector(".celebList");
    const allCeleb = getCeleb();

    let celebHTMLRepresentation = "";
    for ( const oneCeleb of allCeleb) {
        celebHTMLRepresentation += Celeb(oneCeleb);
    }
    contentElement.innerHTML += celebHTMLRepresentation
}