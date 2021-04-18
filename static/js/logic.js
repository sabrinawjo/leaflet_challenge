var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var geojson;


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


function circlesize(mag){
  // console.log(mag)
  return mag*1000
}


circleArray = []
// data.features.geometry.forEach((i) => {
//     circleArray.push([i.coordinates[0], i.coordinates[1]])
// })


d3.json(geoData).then(function(data){

    // console.log(data);
    data.features.forEach((i) => {
      color = "#FF0000";
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
      // console.log(circlesize(i.properties.mag))

    circleArray.push(L.circle([i.geometry.coordinates[1],i.geometry.coordinates[0]],{
      fillOpacity: 0.7,
      color: color,
      fillColor: color,
      radius: circlesize(i.properties.mag),
    }))

    })

    L.layerGroup(circleArray).addTo(map)


    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function() {
      var div = L.DomUtil.create("div", "legend");
      return div
      // var limits = geojson.options.limits;
      // var colors = geojson.options.colors;
      // var labels = [];
    }
    legend.addTo(map)
    legendtag = d3.select(".legend").append("ul")
    
    deeplevel = ['<i style="background: #32CD32"></i><span>-10-10</span><br>',
    '<i style="background: #98FB98"></i><span>10-30</span><br>',
    '<i style="background: #FFD700"></i><span>30-50</span><br>',
    '<i style="background: #FFA500"></i><span>50-70</span><br>',
    '<i style="background: #FF8C00"></i><span>70-90</span><br>',
    '<i style="background: #FF0000"></i><span>90+</span><br>'
  ]
    legendtag.html(deeplevel.join(""))





})




