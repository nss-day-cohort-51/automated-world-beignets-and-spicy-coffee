import { getLandmarks } from "./landmarkDataProvider.js";
import { landmarks } from "./landmarks.js";

export const landmarksList = () => {

    const contentElement = document.querySelector(".landmarksList");
    const nethLandmarks = getLandmarks();

	let landmarksHTMLRepresentation = "";
	for (const landmark of nethLandmarks) {
		landmarksHTMLRepresentation += landmarks(landmark);
	}
	
    contentElement.innerHTML += `${landmarksHTMLRepresentation}`
}