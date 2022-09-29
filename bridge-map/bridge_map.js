// coords and zoom level
let bridgeAreaCoords = [37, -97]
let zoomLevel = 4

// creating map
let map = L.map('bridge-map').setView(bridgeAreaCoords, zoomLevel)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// data
bridges = [
    {"name": "Verrazano-Narrows Bridge",
     "span": 1298.4,
     "city": "New York",
     "state": "NY",
     "location": [40.6066, -74.0447]
    },

    {"name": "Golden Gate Bridge",
     "span": 1280.2,
     "city": "San Francisco and Marin",
     "state": "CA",
     "location": [37.8199, -122.4783]
    },

    {"name": "Mackinac Bridge",
     "span": 1158.0,
     "city": "Mackinaw and St Ignace",
     "state": "MI",
     "location": [45.8174, -84.7278]
    },

    {"name": "George Washington Bridge",
     "span": 1067.0,
     "city": "New York, NY and New Jersey",
     "state": "NJ",
     "location": [40.8517, -73.9527]
    },
    
    {"name": "Tacoma Narrows Bridge",
     "span": 853.44,
     "city": "Tacoma and Kitsap",
     "state": "WA",
     "location": [47.2690, -122.5517]
    }
]

// for loop
bridges.forEach(function(usBridges) {
    let markerText = `${usBridges.name} <br>
                      ${usBridges.city}, ${usBridges.state} <br>
                      ${usBridges.span} meters <br>
                      `
    // markers
    L.marker(usBridges.location).bindPopup(markerText).addTo(map)
})

