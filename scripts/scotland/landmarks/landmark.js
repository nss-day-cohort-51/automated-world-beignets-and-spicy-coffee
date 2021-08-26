export const landmarkCard = (landmarkObj) => {
  return `<article class="landmark-card">
                <h3>${landmarkObj.name}</h3>
                <img class="landmark-image" src="images/${landmarkObj.image}" alt="landmark image">
                <ul>
                    <li class="landmark-details">${landmarkObj.dateCreated}</li>
                    <li class="landmark-details">${landmarkObj.description}</li>
                </ul>
                <a href="${landmarkObj.link}" target="_blank">External Link</a>
            </article>`;
};
