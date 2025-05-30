/////////////////////////NUEVO////////////////////////////////////////////////////////
// Referencias
const sidebar = document.querySelector('#sidebar');
const alert = document.querySelector('#alert');
/////////////////////////CIERRA NUEVO////////////////////////////////////////////////////////

// Crear la variable mapa con coordenadas de centro y zoom
let map = L.map('map').setView([4.639386,-74.082412],5.3)

// Agregar mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    minZoom:3,
    maxZoom: 14,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',

    bounds: [
         [5.195600417140816,-73.17735634796979],
         [4.2649535971577235,-74.64815102570418]
         ],
    zIndex:2,
    opacity: 0.5
}).addTo(map);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext: 'jpg'
}).addTo(map);

    




// Nuevo video
map.on('zoomend',() => {
    console.log(map.getBounds());
})




console.log(sidebar);

// Volar a coordenadas de los sitios de la Lista desplegable
// document.getElementById('select-location').addEventListener('change', function(e){
//     let coords = e.target.value.split(",");
//     map.flyTo(coords,13);
// })

// Agregar mapa base para el Mini Mapa
// var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

// Agregar plugin MiniMap
// var minimap = new L.Control.MiniMap(carto_light,
//     {
//         toggleDisplay: true,
//         minimized: false,
//         position: "bottomleft"
//     }).addTo(map);

// Agregar escala
 new L.control.scale({imperial: false}).addTo(map);

// Configurar PopUp
function popup(feature,layer){
    if(feature.properties && feature.properties.BARRIO){
        layer.bindPopup("<strong>Barrio: </strong>" + feature.properties.BARRIO + "<br/>" + "<strong>Localidad: </strong>" + feature.properties.LOCALIDAD);
    }
}



// Agregar coordenadas para dibujar una polilinea
var coord_camino = [
    [4.798039528031478, -74.03124090388363],
    [4.79059838513191, -74.02832266048456],
    [4.786663954996014, -74.02806516841994],
    [4.784183541760121, -74.02832266048456],
    [4.781275459625073, -74.02703520016145],
    [4.777683105825763, -74.02617689327938],
    [4.7735878498196636, -74.02655897938767],
    [4.771834421730695, -74.02735291325358],
    [4.770316205986422, -74.02692375981255]
];

var camino = L.polyline(coord_camino, {
    color: 'red'
}).addTo(map);


const icono = L.icon({
    iconUrl: './assets/images/montanas.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
})


var marker_cerro = L.marker(L.latLng(4.791132952755172, -73.99527784552215), {
    opacity: 1,
    icon: icono,
    draggable: true

}).addTo(map);


const estilo = {
    stroke: true,
    color: 'red',
    weight: 2,
    opacity: 0.5,
    fillColor: 'grey',
    fillOpacity: 0.5
}


const estilo2 = {
    stroke: true,
    fillColor: 'pink',
    fillOpacity: 0.5
}

const estilo3 = {
    stroke: false,        
    fillColor: 'red',
    fillOpacity: 0.5
}


const circulo = L.circle([6.636254,-73.223129],{
    radius: 300,
    ...estilo

}).addTo(map);

setTimeout(() => {
    circulo.setRadius(500);
    circulo.setStyle(estilo2)
}, 8000)


// Nuevo video

const definirRectangulo = [
    [10.426160, -75.548485],
    [10.415479, -75.528505]
]

const Rectangulo = L.rectangle(definirRectangulo, estilo3).addTo(map);

//map.fitBounds(definirRectangulo);

const poligono = L.polygon([
     [10.423960, -75.553637],
    [10.431409, -75.540513],
     [10.424079, -75.530062],
    [10.413721, -75.528077],
     [10.410893, -75.540472],
    [10.409100, -75.549262]
    ], estilo3).addTo(map);

map.fitBounds(poligono.getBounds());

// FIN Nuevo video



// var marker_cerro = L.circleMarker(L.latLng(4.791132952755172, -73.99527784552215), {
//     radius: 6,
//     fillColor: "#ff0000",
//     color: "blue",
//     weight: 2,
//     opacity: 1,
//     fillOpacity: 0.6,
// }).addTo(map);

// Agregar la leyenda
const leyenda = L.control.Legend({
    title: 'Leyenda',
    position: "bottomright",
    collapsed: false,
    symbolWidth: 24,
    opacity:1,
    column:1,
    legends: [
        {
            label: "Cerro Guayabos",
            type: "circle",
            radius: 6,
            color: "blue",
            fillColor: "#FF0000",
            fillOpacity: 0.6,
            weight: 2,
            layers: [marker_cerro],
            inactive: false,
        }, {
            label: "Carrera Septima",
            type: "polyline",
            color: "#FF0000",
            fillColor: "#FF0000",
            weight: 2,
            layers: camino
        },  {
            label: "Barrios",
            type: "rectangle",
            color: "#0074f0",
            fillColor: "#009ff0",
            weight: 2,
            layers: barriosJS,barrios
        }, {
            label: "Marcador",
            type: "image",
            url: "Leaflet.Legend-master/examples/marker/purple.png"
        },{
            label: "Linea Punteada",
            type: "polyline",
            color: "#0000FF",
            fillColor: "#0000FF",
            dashArray: [5, 5],
            weight: 2
        }, {
            label: "Poligono",
            type: "polygon",
            sides: 5,
            color: "#FF0000",
            fillColor: "#FF0000",
            weight: 2
        }]
}).addTo(map);


////////////////////////////////////////////////////////

// Agregar control para ver los datos al pasar el puntero

var info = L.control();

// Crear un div con una clase info
    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info');
        this.update();
        return this._div;
    };

// Agregar el metodo que actualiza el control segun el puntero vaya pasando
    info.update = function (props) {
        this._div.innerHTML = '<h4>Total Viviendas por Barrio</h4>' +  (props ?
            '<b>' + props.BARRIO + '</b><br />' + props.TOT_VIVIEN + ' viviendas</sup>'
            : 'Pase el puntero por un barrio');
    };

    info.addTo(map);

// Generar rangos de colores de acuerdo al atributo TOT_VIVIEN
function getColor(d) {
    return d > 9000 ? '#2510a3' :
           d > 7500 ? '#0000ff' :
           d > 6000 ? '#673dff' :
           d > 4500 ? '#9265ff' :
           d > 2500 ? '#b38bff' :
           d > 1000 ? '#cfb1ff' :
           d > 0    ? '#e8d8ff' :
                      '#ffffff';
}

// Funcion para mostrar la simbologia de acuerdo con el atributo TOT_VIVIEN
function style(feature) {
    return {
        fillColor: getColor(feature.properties.TOT_VIVIEN),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}



// Agregar interaccion del puntero con la capa para resaltar el objeto
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}


// Configurar los cambios de resaltado y zoom de la capa Geojson
var barriosJS;

function resetHighlight(e) {
    barriosJS.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }


function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }


    
// Agregar capa en formato GeoJson
barriosJS = L.geoJson(barrios,{
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

// Agregar Atribuciones
map.attributionControl.addAttribution('Viviendas en Bogotá &copy; <a href="https://www.dane.gov.co/">DANE</a>');


/////////////////////////NUEVO////////////////////////////////////////////////////////

// Volar a las coordenadas del lugar seleccionado

const volar = (coord) => {
    const zoom = map.getMaxZoom();
    map.flyTo(coord,zoom)
}

const definirAlert = ([latitud,longitud]) => {
    alert.classList.remove('hidden');
    alert.innerText = `Coordenadas:
        Latitud: ${latitud},
        Longitud: ${longitud}
        `
}


// Funcion para listar los sites

// Primero limpiar el Active de cada item
const limpiarItems = () => {
    const listadoLi = document.querySelectorAll('li');
    listadoLi.forEach(li => {
        li.classList.remove('active');
    })
}

// Crear el listado
const crearListado = () => {
    const ul = document.createElement('ul');
    ul.classList.add('list-group');
    sidebar.prepend(ul);

    sites.forEach(lugar => {
        const li = document.createElement('li');
        li.innerText = lugar.nombre;
        li.classList.add('list-group-item');
        ul.append(li);

        li.addEventListener('click',() => {
            limpiarItems();
            li.classList.add('active');
            volar(lugar.coordenadas);
            definirAlert(lugar.coordenadas);
        })
    }) 

}

crearListado();

