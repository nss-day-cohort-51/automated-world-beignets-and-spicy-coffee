export const Landmark = (landObj) => {
	return `<article class="landmark-card">
				<div><img class="landmark-image" src="${landObj.image}" /></div>
				<h3 class="landmark-name">${landObj.name}</h3>
				<ul>
					<li class="landmark-details">Year Built: ${landObj.year}</li>
                    </ul>
                    <a href="${landObj.link}" target="_blank">More Info</a>
                </article>`;
    };