export const Celeb = (celebObj) => {
	return `<article class="celeb-card">
				<div><img class="celeb-image" src="${celebObj.image}" /></div>
				<h3 class="celeb-name">${celebObj.name}</h3>
				<ul>
					<li class="celeb-details">Occupation: ${celebObj.occupation}</li>
					</ul>
					<a href="${celebObj.link}" target="_blank">More Info</a>
				</article>`;
	};