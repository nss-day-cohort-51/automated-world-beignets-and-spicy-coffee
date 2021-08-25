export const City = (cityObj) => {
	return `<article class="city-card">
				<div><img class="city-image" src="${cityObj.image}" /></div>
				<h3 class="city-name">${cityObj.name}</h3>
				<ul>
					<li class="city-details">Population: ${cityObj.population}</li>
					<li class="city-details">External Link: ${cityObj.link}<li>
				</ul>
        	</article>`
}