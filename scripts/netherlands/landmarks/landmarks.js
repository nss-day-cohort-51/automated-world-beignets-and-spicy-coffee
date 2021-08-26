export const landmarks = (landmarksObj) => {
	return `<article class="landmarks-card">
				<div><img class="landmarks-image" src="${landmarksObj.image}" /></div>
				<h3 class="landmarks-name">${landmarksObj.name}</h3>
				<ul>
					<li class="landmarks-details"> Established: ${landmarksObj.year}</li>
					<li class="landmarks-details"> ${landmarksObj.description} </li>
					<li><a href="${landmarksObj.link}" target="_blank"> Find out more </a></li>
				</ul>
        	</article>`
}