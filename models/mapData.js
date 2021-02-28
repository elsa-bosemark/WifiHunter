const Cats = [
  {
    icon:"coffee"
  },
  {
    icon:"church",
  },
  {
    icon: "book-open-variant",
  },
  {
    icon: "office-building",
  },
];

const wifiPower = [
  {
    name:'Strong',
    icon: "wifi-strength-4",
  }, 
  {
    name: 'Medium',
    icon:"wifi-strength-2" ,
  },
  {
    name: 'Weak',
    icon: "wifi-strength-1",
  },
]


export const markers = [
  {
    coordinate: {
      latitude: 37.7673519306,
      longitude: -122.42410497,
    },
    title: "Crepevine",
    cat: Cats[0].icon,
    wifiName: "goodfood",
    wifiPower: wifiPower[1].icon,
    wifiPowerTitle: wifiPower[1].name,
  },
  {
    coordinate: {
      latitude:37.7530, 
      longitude:122.4051
    },
    title: "Haus Coffee",
    cat: Cats[0].icon,
    wifiName: "whatever",
    wifiPower: wifiPower[0].icon,
    wifiPowerTitle: wifiPower[0].name,
  },
  {
    coordinate: {
      latitude: 37.7749294,
      longitude: -122.419416,
    },
    title: "Cafe St. Jorge",
    cat: Cats[0].icon,
    wifiName: "iloveportugal",
    wifiPower: wifiPower[1].icon,
    wifiPowerTitle: wifiPower[1].name,
  },
  {
    coordinate: {
      latitude: 37.7673519306,
      longitude: -122.42410497,
    },
    title: "Dolores Park Cafe",
    cat: Cats[0].icon,
    wifiName: "Dolores Park Cafe",
    wifiPower: wifiPower[0].icon,
    wifiPowerTitle: wifiPower[0].name,
  },
  {
    coordinate: {
      latitude: 37.7749295,
      longitude: -122.419416,
    },
    title: "Borderlands Cafe",
    cat: Cats[0].icon,
    wifiName: "Borderlands Cafe",
    wifiPower: wifiPower[0].icon,
    wifiPowerTitle: wifiPower[0].name,
  },
  {
    coordinate: {
      latitude: 37.774929,
      longitude: -122.419416,
    },
    title: "Ritual Coffee Roasters",
    cat: Cats[0].icon,
    wifiName: "Ritual Coffee Roasters",
    wifiPower: wifiPower[1].icon,
    wifiPowerTitle: wifiPower[1].name,
  },

  

];


export const mapStandardStyle = [
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
];