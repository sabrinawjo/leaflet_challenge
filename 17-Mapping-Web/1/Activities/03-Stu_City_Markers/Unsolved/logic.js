// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// City markers
// newyork;
var marker1 = L.marker([40.730610, -73.935242], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);
// Add code to create a marker for each city below and add it to the map


// chicago;
var marker2 = L.marker([41.881832, -87.623177], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);
// houston;
var marker3 = L.marker([29.749907, -95.358421], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);
// la;
var marker4 = L.marker([34.052235, -118.243683], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);
// omaha;
var marker5 = L.marker([41.257160, -95.995102], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);


marker1.bindPopup("New York, population: 20");
