var map = L.map('map').setView([6.273, -75.573], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(6.273, -75.573),
        L.latLng(6.280, -75.582)
    ],
    routeWhileDragging: true
}).addTo(map);







/*        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; <a href="https://www.esri.com/en-us/home">Esri</a> contributors',
        }).addTo(map);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            opacity: 0.6  
        }).addTo(map);*/


/*
var boundaries = new L.WFS({
    url: 'https://srvags.sgc.gov.co/arcgis/services/EPIS/EPIS_V2/MapServer/WMSServer?',
    typeNS: 'topp',
    typeName: 'tasmania_state_boundaries',
    crs: L.CRS.EPSG4326,
    style: {
        color: 'blue',
        weight: 2
    }
}).addTo(map)
  .on('load', function () {
      map.fitBounds(boundaries);
  })
*/