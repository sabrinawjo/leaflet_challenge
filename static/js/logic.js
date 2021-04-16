function size(mag){
  if (mag > 6){
    return 14
} else if (mag >= 5){
    return 12
} else if (mag >= 4){
    return 10
} else if (mag >= 3){
    return 8
} else if (mag >= 2){
    return 6
} else if (mag >= 1){
    return 4
} else {
    return 2
}
}



var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
// var geojson;


var satellitemap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
})


var map = L.map("map",{
    center: [34.052235, -118.243683],
    zoom: 11
});
// Then we add our 'graymap' tile layer to the map.
satellitemap.addTo(map);





circleArray = []
// data.features.geometry.forEach((i) => {
//     circleArray.push([i.coordinates[0], i.coordinates[1]])
// })


d3.json(geoData).then(function(data){
    console.log(data);
    data.features.forEach((i) => {
      color = "red";
      if (i.geometry.coordinates[2] > 70 && i.geometry.coordinates[2] <= 90) {
        color = "#FF8C00";
      } else if (i.geometry.coordinates[2] > 50 && i.geometry.coordinates[2] <= 70) {
        color = "#FFA500";
      } else if (i.geometry.coordinates[2] > 30 && i.geometry.coordinates[2] <= 50) {
        color = "#FFD700";
      } else if (i.geometry.coordinates[2] > 10 && i.geometry.coordinates[2] <= 30) {
        color = "#98FB98";
      } else if (i.geometry.coordinates[2] > -10 && i.geometry.coordinates[2] <= 10) {
        color = "#32CD32";
      } 

    circleArray.push(L.circle([i.geometry.coordinates[1],i.geometry.coordinates[0]],{
      fillOpacity: 0.7,
      color: color,
      fillColor: color,
      radius: 10,
    }))

    })

L.layerGroup(circleArray).addTo(map)


})




