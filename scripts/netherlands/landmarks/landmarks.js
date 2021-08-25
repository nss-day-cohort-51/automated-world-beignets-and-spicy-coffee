export const landmarks = (landmarksObj) => {
	return `<article class="landmarks-card">
				<div><img class="landmarks-image" src="${landmarksObj.image}" /></div>
				<h3 class="landmarks-name">${landmarksObj.name}</h3>
				<ul>
					<li class="landmarks-details"> Occupation: ${landmarksObj.occupation}</li>
					<li class="landmarks-details">Description: ${landmarksObj.description} </li>
					<li class="landmarks-details">Find Out More: ${landmarksObj.link}</li>
					
				</ul>
        	</article>`
}