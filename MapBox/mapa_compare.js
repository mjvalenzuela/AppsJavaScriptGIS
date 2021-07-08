mapboxgl.accessToken = 'pk.eyJ1IjoibWp2YWxlbnp1ZWxhIiwiYSI6ImNrb2Fmdm9zZDBpM28ybnFtYTQ2Z2MwMnYifQ.ZY3jTw0-6tjUSOOJXJHsdw'

var antesMap = new mapboxgl.Map({
	container: 'antes',
	style: 'mapbox://styles/mapbox/light-v10',
	center: [-74.082412,4.639386],
	zoom: 9
});

var despuesMap = new mapboxgl.Map({
	container: 'despues',
	style: 'mapbox://styles/mapbox/dark-v10',
	center: [-74.082412,4.639386],
	zoom: 9
});

var contanier = '#compare-container';

var map = new mapboxgl.Compare(antesMap,despuesMap,contanier,{
	//mousemove: true
})