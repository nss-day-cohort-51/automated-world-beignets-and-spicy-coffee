import { getCities } from "./cities/cityDataProvider.js";
import { cities } from "./cities/cities.js";

export const citiesList = () => {

    const contentElement = document.querySelector(".citiesList");
    const nethCities = getCities();

	let citiesHTMLRepresentation = "";
	for (const city of nethCities) {
		citiesHTMLRepresentation += cities(city);
	}
	
    contentElement.innerHTML += `${citiesHTMLRepresentation}`
}