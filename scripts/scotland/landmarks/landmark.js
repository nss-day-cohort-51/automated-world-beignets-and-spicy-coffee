export const landmarkCard = (landmarkObj) => {
  return `<article class="landmark-card">
                <h4>${landmarkObj.name}</h4>
                <ul>
                    <img class="landmark-image" src="images/${landmarkObj.image}" alt="landmark image">
                    <li class="landmark-details">${landmarkObj.dateCreated}</li>
                    <li class="landmark-details">${landmarkObj.description}</li>
                </ul>
                <a href="${landmarkObj.link}" target="_blank">More Info</a>
            </article>`;
};
