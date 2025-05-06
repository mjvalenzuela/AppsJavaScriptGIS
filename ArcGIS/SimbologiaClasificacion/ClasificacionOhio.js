var map;

require([
	"esri/map",
	"esri/layers/FeatureLayer",
	"esri/InfoTemplate",
	"esri/symbols/SimpleFillSymbol",
	"esri/renderers/ClassBreaksRenderer",
	"esri/Color",
	"dojo/dom-style",
	"dojo/domReady!"
	], function(
		Map,
		FeatureLayer,
		InfoTemplate,
		SimpleFillSymbol,
		ClassBreaksRenderer,
		Color,
		domStyle
		){		

		// Crear mapa con centro y zoom definido
		map = new Map("map",{
			basemap: "streets",
			center: [-82.396855,40.182435],
			zoom: 7,
			slider: false
		});


		// Crear la simbologia para el layer
		var symbol = new SimpleFillSymbol();
		symbol.setColor(new Color([150,150,150,0.5]));
		
		// Crear la clasificacion para la simbologia por intervalos según el campo definido
		var renderer = new ClassBreaksRenderer(symbol,"POP07_SQMI");
		renderer.addBreak(0, 25, new SimpleFillSymbol().setColor(new Color([56,168,0,0.5])));
		renderer.addBreak(25, 75, new SimpleFillSymbol().setColor(new Color([139,209,0,0.5])));
		renderer.addBreak(75, 175, new SimpleFillSymbol().setColor(new Color([255,255,0,0.5])));
		renderer.addBreak(175, 400, new SimpleFillSymbol().setColor(new Color([255,128,0,0.5])));
		renderer.addBreak(400, Infinity, new SimpleFillSymbol().setColor(new Color([255,0,0,0.5])));

		// Crear una plantilla para mostrar el PopUp
		var infoTemplate = new InfoTemplate("Name: ${NAME}", "${*}");

		// Agregar una capa
		var featureLayer = new FeatureLayer("https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer/3",
		{
			mode: FeatureLayer.MODE_SNAPSHOT,
			outFields: ["*"], // Se puede especificar los campos a mostrar
			infoTemplate: infoTemplate
		});

		// Especificar un campo para filtrar y mostrar los features que cumplan con la expresion
		featureLayer.setDefinitionExpression("STATE_NAME = 'Ohio'");
		featureLayer.setRenderer(renderer);

		// Agregar layer al mapa
		map.addLayer(featureLayer);

		

	});