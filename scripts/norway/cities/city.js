export const City = (cityObj) => {
	return `<article class="city-card">
				<div><img class="city-image" src="${cityObj.image}" /></div>
				<h3 class="city-name">${cityObj.name}</h3>
				<ul>
					<li class="city-details">Population: ${cityObj.population}</li>
                    </ul>
                    <a href="${cityObj.link}" target="_blank">More Info</a>
                </article>`;
    };