export const cityCard = (cityObj) => {
  return `<article class="city-card">
                <h3>${cityObj.name}</h3>
                <img class="city-image" src="images/${cityObj.image}" alt="city image">
                <ul>
                    <li class="city-details">Population: ${cityObj.population}</li>
                    <li class="city-details">${cityObj.description}</li>
                </ul>
                <a href="${cityObj.link}" target="_blank">External Link</a>
            </article>`;
};
