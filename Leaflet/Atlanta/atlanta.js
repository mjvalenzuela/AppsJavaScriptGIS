//let map = L.map('map').setView([40.72,-74.0080],12)

let map = L.map('map')

//Agregar tilelAyer mapa base desde openstreetmap
//Se pueden usar de https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let restClosed = L.ExtraMarkers.icon({
  icon: 'fa-utensils',
  markerColor: 'red',
  shape: 'circle',  
  prefix: 'fa'
})

let restOpen = L.ExtraMarkers.icon({
  icon: 'fa-utensils',
  markerColor: 'green',
  shape: 'square',  
  prefix: 'fa'
})


//Agregar marcador en un punto
//var marker = L.marker([]).addTo(map);

//Agregar un geojason
let geojson_url_restaurants_closed = "https://mjvalenzuela.github.io/restaurants_closed_postCovid.geojson"
fetch(
  geojson_url_restaurants_closed
 ).then(
   res=> res.json()
 ).then(
   data => {
     let geojsonLayer = L.geoJson(data,{
       onEachFeature: function(feature,layer){ //Funcion para mostrar un pop up con el campo nombre de cada punto
         layer.bindPopup(feature.properties['name'])
         layer.setIcon(restClosed)
       }
       
     }).addTo(map)
     map.fitBounds(geojsonLayer.getBounds())
   }
 )

/*let geojson_url_restaurants_open = "https://mjvalenzuela.github.io/restaurants_open_preCovid.geojson"
fetch(
  geojson_url_restaurants_open
 ).then(
   res=> res.json()
 ).then(
   data => {
     let geojsonLayer = L.geoJson(data,{
       onEachFeature: function(feature,layer){
         layer.bindPopup(feature.properties['name'])
         layer.setIcon(restOpen)
       }
       
     }).addTo(map)
     map.fitBounds(geojsonLayer.getBounds())
   }
 )
*/


