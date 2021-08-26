export const celebrities = (celebObj) => {
	return `<article class="celeb-card">
				<div><img class="celeb-image" src="${celebObj.image}" /></div>
				<h3 class="celeb-name">${celebObj.name}</h3>
				<ul>
					<li class="celeb-details"> Occupation: ${celebObj.occupation}</li>
					<li class="celeb-details"> ${celebObj.description} </li>
					<li><a href="${celebObj.link}" target="_blank"> Find out more </a></li>
					
				</ul>
        	</article>`
}