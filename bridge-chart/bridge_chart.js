// canvas and context
let canvas = document.querySelector('#bridge-chart')
let context = canvas.getContext('2d')

// data
let bridges = [
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

// create chart
let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{ 
            label: 'Meters',
            data: [],
            backgroundColor: '#ff335e'
        }]
    },
})

// for loop
bridges.forEach(function(usBridge) {
    let bridgeName = `${usBridge.name}`
    let bridgeSpan = `${usBridge.span}`
    chart.data.labels.push(bridgeName)
    chart.data.datasets[0].data.push(bridgeSpan)
    chart.update()
})
