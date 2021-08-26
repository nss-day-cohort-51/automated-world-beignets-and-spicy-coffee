export const celebrityCard = (celebrityObj) => {
  return `<article class="celebrity-card">
                <h3>${celebrityObj.name}</h3>
                <img class="celebrity-image" src="images/${celebrityObj.image}" alt="celebrity image">
                <ul>
                    <li class="celebrity-details">${celebrityObj.occupation}</li>
                    <li class="celebrity-details">${celebrityObj.description}</li>
                </ul>
                <a href="${celebrityObj.link}" target="_blank">External Link</a>
            </article>`;
};
