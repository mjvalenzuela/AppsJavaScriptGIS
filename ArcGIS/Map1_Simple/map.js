var myMap, myMapView;

require(["esri/Map","esri/Graphic","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/views/MapView", "dojo/domReady!"],
function(Map,Graphic,Point,SimpleMarkerSymbol,MapView)
{
	myMap = Map({
		basemap:"satellite"
	});
	myMapView = MapView({
		container:"map1",
		map:myMap,
		center:[-74.092123,4.650998],
		/*extent: {
			xmax: -13619894,
			xmin: -13624389,
			ymax: 4556105,
			ymin: 4553024,
			spatialReference: 102100
			}*/
		//scale: 500000
		zoom:12
	});

	myMapView.on("click", function(e) {

		myMapView.graphics.removeAll();

		myMapView.popup.open({


			location: e.mapPoint,
			title: "This point coordinates are: ",
			content: "Longitude: "+ e.mapPoint.longitude.toString()+"\n"+"Latitude: "+ e.mapPoint.latitude.toString()
		});

		//1)				
		var myPoint = e.mapPoint;

		//2)
		var myMarkerSymbol = new SimpleMarkerSymbol({
			size: 16,
			color: [184,4,84],
			outline: {
				color:[219,219,219],
				width:3
			}
		});

		//3)
		var myGraphic = new Graphic({
			geometry: myPoint,
			symbol:myMarkerSymbol
		});

		//4)
		myMapView.graphics.add(myGraphic);
	});
	
	/*myMapView.on("click", function() {
		alert("El actual extent es: xmax: "+ myMapView.extent.xmax + "xmin: " + myMapView.extent.xmin +" ymax: " + myMapView.extent.ymax+" ymin: " + myMapView.extent.ymin);
	});*/


});