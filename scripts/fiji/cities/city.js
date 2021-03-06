export const cityCard = (cityObj) => {
    return `<article class="city-card">
                  <h4>${cityObj.name}</h4>
                  <img class="city-image" src="images/${cityObj.image}" alt="city image">
                  <ul>
                      <li class="city-details">Population: ${cityObj.population}</li>
                      <li class="city-details">${cityObj.description}</li>
                  </ul>
                  <a href="${cityObj.link}" target="_blank">More Info</a>
              </article>`;
  };