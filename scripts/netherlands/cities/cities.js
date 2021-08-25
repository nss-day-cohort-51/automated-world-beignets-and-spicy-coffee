export const cities = (citiesObj) => {
	return `<article class="cities-card">
				<div><img class="cities-image" src="${citiesObj.image}" /></div>
				<h3 class="cities-name">${citiesObj.name}</h3>
				<ul>
					<li class="cities-details"> Occupation: ${citiesObj.occupation}</li>
					<li class="cities-details">Description: ${citiesObj.description} </li>
					<li class="cities-details">Find Out More: ${citiesObj.link}</li>
					
				</ul>
        	</article>`
}