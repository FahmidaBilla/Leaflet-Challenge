//Use this link to get data
// Store our API endpoint as url
let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Perform a GET request to the query URL/
d3.json(link).then(function (data) {

  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

function createFeatures(earthquakeData) {

  // Define a function that we want to run once for each feature in the features array
  // Give each feature a popup that describes the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>Location: ${feature.properties.place}</h3>
    <hr><p>Time: ${new Date(feature.properties.time)}</p>
    <p>Magnitude: ${feature.properties.mag}</p>
    <p>Depth: ${feature.geometry.coordinates[2]}</p></hr>`);
  }

  // Create a GeoJSON layer that contains the features array on the earthquakeData object
  function circleMarkers(feature, latlng){
    let markers = {
     radius: feature.properties.mag * 5,
     fillColor: chooseColor(feature.geometry.coordinates[2]),
     color: chooseColor(feature.geometry.coordinates[2]),
     weight: 1,
     opacity: 0.7,
     fillOpacity: 0.3
    } 
    return L.circleMarker(latlng, markers);
 }

  // Run the onEachFeature and pointToLayer function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature,
    pointToLayer: circleMarkers
  });

  // Send our earthquakes layer to the createMap function
  createMap(earthquakes);
}


// Create a color palette for the markers based on the depth of the earthquake
function chooseColor(depth){

  if (-10 <= depth && depth < 10) {
    return color = "#a3f600";
  }
  else if (10 <= depth && depth < 30) {
    return color = "#dcf400";
  }
  else if (30 <= depth && depth < 50) {
    return color = "#f7db11";
  }
  else if (50 <= depth && depth < 70) {
    return color = "#fdb72a";
  }
  else if (70 <= depth && depth < 90) {
    return color = "#fca35d"
  }
    else {
        return color = "#c61e15";
    }
}


// Create map legend which provides context for map data
let legend = L.control({position: "bottomright"});

legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var depths = [-10, 10, 30, 50, 70,90];
    var labels = [];

    // Loop through each depth item to add it to labels for the legend and color the legend
    for (var i = 0; i < depths.length; i++) {
          labels.push('<ul style="background-color:' 
          + chooseColor(depths[i] + 1) + '"> <span>' + 
          depths[i] + (depths[i + 1] ? '&ndash;' + 
          depths[i + 1] + '' : '+') + '</span></ul>');
        }

      // Add each label item to the div which is under the <ul> tag
      div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    
    return div;
  };



function createMap(earthquakes) {

  // Create the base layers
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Create a baseMaps object.
  var baseMaps = {
    "Street Map": street
  };

  // Create an overlay object to hold our overlay
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
     40, -100
    ],
    zoom: 5,
    layers: [street, earthquakes]
  });

  // Create a layer control
  // Pass it our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: true
  }).addTo(myMap);

  // Add legend to the map
  legend.addTo(myMap)

}