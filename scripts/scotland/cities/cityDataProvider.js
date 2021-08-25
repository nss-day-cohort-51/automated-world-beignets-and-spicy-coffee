const cityArray = [
  {
    name: "Glasgow",
    image: "city-glasgow.jpg",
    population: "593,245",
    description:
      "Glasgow, Gaelic Glaschu, city, west-central Scotland. It is situated along both banks of the River Clyde 20 miles (32 km) from that river’s mouth on the western, or Atlantic, coast. Glasgow is Scotland’s largest city, and it forms an independent council area that lies entirely within the historic county of Lanarkshire.",
    link: "https://www.britannica.com/place/Glasgow-Scotland",
  },
  {
    name: "Edinburgh",
    image: "city-edinburgh.jpg",
    population: "482,640",
    description:
      "Edinburgh, Gaelic Dun Eideann, capital city of Scotland, located in southeastern Scotland with its centre near the southern shore of the Firth of Forth, an arm of the North Sea that thrusts westward into the Scottish Lowlands.Edinburgh is a city of sombre theatricality, with much of this quality deriving from its setting among crags and hills and from its tall buildings and spires of dark stone.",
    link: "https://www.britannica.com/place/Edinburgh-Scotland",
  },
  {
    name: "Kirkwall",
    image: "city-kirkwall.jpg",
    population: "7,190",
    description:
      "Kirkwall, royal burgh (town), seaport, and chief town of the Orkney Islands, Scotland, off the northern tip of the Scottish mainland. It was designated a royal burgh in 1486. Early Norse influence persisted as late as the building of the 12th-century red sandstone St. Magnus Cathedral, a dominant feature of the present town.",
    link: "https://www.britannica.com/place/Kirkwall",
  },
  {
    name: "Aberdeen",
    image: "city-aberdeen.jpg",
    population: "222,793",
    description:
      "Aberdeen, city and historic royal burgh (town) astride the Rivers Dee and Don on Scotland’s North Sea coast. Aberdeen is a busy seaport, the British centre of the North Sea oil industry, and the commercial capital of northeastern Scotland. Aberdeen’s primary industries were once fishing, textiles, shipbuilding, and papermaking. Today its economy is focused on the oil industry, though it has grown more diversified to include electronics design and renewable energy resources.",
    link: "https://www.britannica.com/place/Aberdeen-Scotland",
  },
];

export const getCities = () => {
  return cityArray;
};
