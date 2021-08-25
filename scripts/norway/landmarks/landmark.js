export const Landmark = (landObj) => {
	return `<article class="landmark-card">
				<div><img class="landmark-image" src="${landObj.image}" /></div>
				<h3 class="landmark-name">${landObj.name}</h3>
				<ul>
					<li class="landmark-details">Occupation:Year Built: ${landObj.year}</li>
					<li class="landmark-details">External Link: ${landObj.link}<li>
				</ul>
        	</article>`
}