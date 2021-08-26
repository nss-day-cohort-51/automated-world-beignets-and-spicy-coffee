import { getCities } from "./cityDataProvider.js";
import { cities } from "./cities.js";

export const citiesList = () => {

    const contentElement = document.querySelector(".citiesList");
    const nethCities = getCities();

	let citiesHTMLRepresentation = "";
	for (const city of nethCities) {
		citiesHTMLRepresentation += cities(city);
	}
	
    contentElement.innerHTML += `${citiesHTMLRepresentation}`
}