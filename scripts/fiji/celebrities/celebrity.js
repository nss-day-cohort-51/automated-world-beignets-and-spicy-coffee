export const celebrityCard = (celebrityObj) => {
    return `<article class="celebrity-card">
                  <h4>${celebrityObj.name}</h4>
                  <img class="celebrity-image" src="images/${celebrityObj.image}" alt="celebrity image">
                  <ul>
                      <li class="celebrity-details">${celebrityObj.occupation}</li>
                      <li class="celebrity-details">${celebrityObj.description}</li>
                  </ul>
                  <a href="${celebrityObj.link}" target="_blank">More Info</a>
              </article>`;
  };