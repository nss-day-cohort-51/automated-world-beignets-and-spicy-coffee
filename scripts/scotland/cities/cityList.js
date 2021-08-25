import { getCities } from "./cityDataProvider.js";
import { cityCard } from "./city.js";

export const cityList = () => {
  const contentElement = document.querySelector(".cityList");

  const cities = getCities();

  let cityHTML = "";

  for (const city of cities) {
    cityHTML += cityCard(city);
  }
  contentElement.innerHTML += `${cityHTML}`;
};
