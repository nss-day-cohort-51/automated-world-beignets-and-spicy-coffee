import { getLandmarks } from "./landmarkDataProvider.js";
import { landmarkCard } from "./landmark.js";

export const landmarkList = () => {
  const contentElement = document.querySelector(".landmarkList");

  const landmarks = getLandmarks();

  let landmarkHTML = "";

  for (const landmark of landmarks) {
    landmarkHTML += landmarkCard(landmark);
  }
  contentElement.innerHTML += `${landmarkHTML}`;
};
