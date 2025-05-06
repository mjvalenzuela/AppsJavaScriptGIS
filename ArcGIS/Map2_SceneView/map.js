var myMap, mySceneView;

require(["esri/Map","esri/Basemap","esri/layers/TileLayer","esri/geometry/Point","esri/Viewpoint","esri/views/SceneView", "dojo/domReady!"],
function(Map,Basemap,TileLayer,Point,Viewpoint,SceneView)
{
	/*var myTransportLayer = new TileLayer({
		url: "https://server.arcgisonline.com/arcgis/rest/services/Reference/World_Transportation/MapServer",
		id: "transportation",
		visible: true
	});*/
	var usPop2010layer = new TileLayer({
		url: "https://server.arcgisonline.com/arcgis/rest/services/Demographics/USA_2000-2010_Population_Change/MapServer",
		id: "USA Population",
		visible: true
	});

	var myBasemap = new Basemap({
		baseLayers: [usPop2010layer],
		title: "myBasemap",
		id: "USA Population"
	});


	/*var myPoint = new Point({
		longitude: -74.092123,
		latitude: 4.650998,
		z: 1000
	});

	var myViewPoint = new Viewpoint ({
		camera: {
			position: myPoint,
			tilt: 80,
			heading: 330
		}
	});*/

	myMap = new Map({
		basemap: myBasemap,
		// layers: [myTransportLayer],
		ground: "world-elevation"
	});	

	mySceneView = new SceneView({
		container:"map1",
		map:myMap,
		camera: {
				position: [-122.4479, 37.7531, 1000],
				tilt: 80,
				heading: 330
				}
		//viewpoint: myViewPoint
	});

	/*mySceneView.on("click", function(){
		myViewPoint2 = new Viewpoint ({
			camera: {
				position: [-72.092123, 3.650998, 500],
				tilt: 80,
				heading: 100
			},
		});
		mySceneView.goTo(myViewPoint2);
	});*/
});