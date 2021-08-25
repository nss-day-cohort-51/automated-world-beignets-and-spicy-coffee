import { getCelebrities } from "./celebrities/celebritiesDataProvider.js";
import { celebrities } from "./celebrities/celebritiesList.js";

export const celebritiesList = () => {

    const contentElement = document.querySelector(".celebritiesList");
    const celebs = getCelebrities();

	let celebHTMLRepresentation = "";
	for (const celebrity of celebs) {
		celebHTMLRepresentation += celebrities(celebrity);
	}
	
    contentElement.innerHTML += `${celebHTMLRepresentation}`
}