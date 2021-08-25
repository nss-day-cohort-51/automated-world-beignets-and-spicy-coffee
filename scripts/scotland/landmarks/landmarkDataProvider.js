const landmarkArray = [
    {
        name:"Isle of Skye",
        image:"images/land-isleofskye.jpg",
        dateCreated:"Settled in 1st century BCE",
        description:"Skye, the largest and most northerly of the Inner Hebrides islands of Scotland. It is the nearest of these islands to the mainland, which lies only a few hundred yards away at Kyleakin, where the Skye Bridge provides access to the mainland by road. Administratively, it lies within the Highland council area, and it is part of the historic county of Inverness-shire.",
        link:"https://www.britannica.com/place/Skye"
    },
    {
        name:"Loch Ness",
        image:"images/land-lochness.jpg",
        dateCreated:"Formally settled in 18th century",
        description:"Loch Ness, lake, lying in the Highland council area, Scotland. With a depth of 788 feet (240 metres) and a length of about 23 miles (36 km), Loch Ness has the largest volume of fresh water in Great Britain. Like some other very deep lochs in Scotland and Scandinavia, Loch Ness is said to be inhabited by an aquatic monster. Many sightings of the so-called Loch Ness monster have been reported, and the possibility of its existence—perhaps in the form of a solitary survivor of the long-extinct plesiosaurs—continues to intrigue many.",
        link:"https://www.britannica.com/place/Loch-Ness-lake-Scotland-United-Kingdom"
    },
    {
        name:"Highlands",
        image:"images/land-highlands.jpg",
        dateCreated:"Prehistoric settlement",
        description:"The Highlands is a historic region of Scotland. Culturally, the Highlands and the Lowlands diverged from the later Middle Ages into the modern period, when Lowland Scots replaced Scottish Gaelic throughout most of the Lowlands. The area is very sparsely populated, with many mountain ranges dominating the region, and includes the highest mountain in the British Isles.",
        link:"https://www.britannica.com/place/Highlands-region-Scotland"
    },
    {
        name:"St. Andrews Cathedral",
        image:"images/land-standrews.jfif",
        dateCreated:"Foundation set between 1127 and 1144",
        description:"In the early 12th century the bishopric of St. Andrews was regarded as the most important in the kingdom; it was raised to the dignity of an archbishopric in 1472, when its holder was recognized as primate of Scotland.",
        link:"https://www.britannica.com/place/St-Andrews-Scotland"
    }
]

export const getLandmarks = () => {
    return landmarkArray
}