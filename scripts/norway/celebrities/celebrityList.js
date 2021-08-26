import { getCeleb } from "./celebrityDataProvider.js";
import { Celeb } from "./celebrity.js";

export const CelebList = () => {

    const contentElement = document.querySelector(".celebList");
    const allCeleb = getCeleb();

    let celebHTML = "";

    for ( const oneCeleb of allCeleb) {
        celebHTML += Celeb(oneCeleb);
    }
  contentElement.innerHTML += celebHTML
};