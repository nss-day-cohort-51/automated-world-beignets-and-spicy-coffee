import { City } from "./city.js";
import { getCity } from "./citiesDataProvider.js";

export const CityList = () => {

    const contentElement = document.querySelector(".cityList");
    const allCity = getCity();

    let cityHTMLRepresentation = "";
    for ( const oneCity of allCity) {
        cityHTMLRepresentation += City(oneCity);
    }
    contentElement.innerHTML += cityHTMLRepresentation
}