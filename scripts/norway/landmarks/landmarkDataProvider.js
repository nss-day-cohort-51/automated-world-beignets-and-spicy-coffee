const landmarkCollection = [
    {
        image: "images/landmark-vigeland.jpg",
        name: "Vigelandsanlegget",
        year: 1924,
        link: "https://vigeland.museum.no/en"
    },
    {
        image: "images/landmark-akershus.jpg",
        name: "Akershus Fortress",
        year: 1299,
        link: "https://www.visitoslo.com/en/product/?tlp=2978773"
    },
    {
        image: "images/landmark-viking.jpg",
        name: "Viking Ships Museum",
        year: 1957,
        link: "https://www.khm.uio.no/english/visit-us/viking-ship-museum/"
    }
]

export const getLandmark = () => {
    return landmarkCollection
}