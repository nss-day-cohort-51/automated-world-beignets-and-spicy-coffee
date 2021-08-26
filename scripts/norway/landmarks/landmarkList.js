import { getLandmark } from "./landmarkDataProvider.js";
import { Landmark } from "./landmark.js";

export const LandmarkList = () => {

    const contentElement = document.querySelector(".landmarkList");
    const allLandmark = getLandmark();

    let landHTMLRepresentation = "";
    for ( const oneLand of allLandmark) {
        landHTMLRepresentation += Landmark(oneLand);
    }
    contentElement.innerHTML += landHTMLRepresentation
}