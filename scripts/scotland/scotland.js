import { getCelebrities } from "./celebrities/celebritiesDataProvider.js"
import { getLandmarks } from "./landmarks/landmarkDataProvider.js"
import { getCities } from "./cities/cityDataProvider.js"


const celebrity = getCelebrities();
console.log(celebrity)

const landmark = getLandmarks();
console.log(landmark)

const city = getCities();
console.log(city)

