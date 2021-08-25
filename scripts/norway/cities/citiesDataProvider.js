const cityCollection = [
    {
        image: "images/city-oslo.jpg",
        name: "Oslo",
        population: "1 Million",
        link: "https://en.wikipedia.org/wiki/Oslo"
    },
    {
        image: "images/city-trond.jpg",
        name: "Trondheim",
        population: "183,378",
        link: "https://en.wikipedia.org/wiki/Trondheim"
    },
    {
        image: "images/city-drammen.jpg",
        name: "Drammen",
        population: "117, 510",
        link: "https://en.wikipedia.org/wiki/Drammen"
    }
]

export const getCity = () => {
    return cityCollection
}