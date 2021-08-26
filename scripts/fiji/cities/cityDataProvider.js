const fijiCities = [
    {
        image: "citySuva.jpg",
        name: "Suva",
        population: 93970,
        description: "Tropical Rainforest climate produces more than 118 inches of rain every year.",
        link: "https://en.wikipedia.org/wiki/Suva"
    },

    {
        image: "cityVanuaLevu.jpg",
        name: "Vanua Levu",
        population: 27949,
        description: "Second largest island of Fiji.",
        link: "https://en.wikipedia.org/wiki/Vanua_Levu"
    },

    {
        image: "cityVitiLevu.jpg",
        name: "Viti Levu",
        population: 600000,
        description: "Interior is dominated by mountains, including Mt. Tomanivi, which is an extinct volcano.",
        link: "https://en.wikipedia.org/wiki/Viti_Levu"
    },

    {
        image: "cityLevuka.jpg",
        name: "Levuka",
        population: 1131,
        description: "Levuka is the center of the Fiji tuna-processing industry.",
        link: "https://en.wikipedia.org/wiki/Levuka"
    }
]

export const getCities = () => {
    return fijiCities
}