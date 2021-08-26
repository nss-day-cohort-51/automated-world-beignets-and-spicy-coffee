import { getCelebrities } from "./celebritiesDataProvider.js";
import { celebrityCard } from "./celebrity.js";

export const celebrityList = () => {
  const contentElement = document.querySelector(".celebrityList");

  const celebrities = getCelebrities();

  let celebrityHTML = "";

  for (const celebrity of celebrities) {
    celebrityHTML += celebrityCard(celebrity);
  }
  contentElement.innerHTML += `${celebrityHTML}`;
};