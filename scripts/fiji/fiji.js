import { getCelebrities } from "./celebrities/celebritiesDataProvider"
import { getLandmarks } from "./landmarks/landmarkDataProvider"
import { getCities } from "./cities/cityDataProvider"


const celebrity = getCelebrities();
const landmark = getLandmarks();
const city = getCities();