require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Legend"
      ], function (Map, MapView, FeatureLayer, Legend) {
        
        // Definir la simbologia para los 4 intervalos de clasificacion
        const menos1000 = {
          type: "simple-fill", 
          color: "#fffcd4",
          style: "solid",
          outline: {
            width: 0.2,
            color: [255, 255, 255, 0.5]
          }
        };

        const menos9000 = {
          type: "simple-fill", 
          color: "#b1cdc2",
          style: "solid",
          outline: {
            width: 0.2,
            color: [255, 255, 255, 0.5]
          }
        };

        const mas9000 = {
          type: "simple-fill", 
          color: "#38627a",
          style: "solid",
          outline: {
            width: 0.2,
            color: [255, 255, 255, 0.5]
          }
        };

        const mas28000 = {
          type: "simple-fill", 
          color: "#0d2644",
          style: "solid",
          outline: {
            width: 0.2,
            color: [255, 255, 255, 0.5]
          }
        };

        // Definicion de intervalos segun los valores del campo FAGE05_CY (Poblacion de Mujeres mayores a 60 años)

        const renderer = {
          type: "class-breaks",
          field: "FAGE05_CY",                  
          legendOptions: {
            title: "Total mujeres mayores a 60 años"
          },
          defaultSymbol: {
            type: "simple-fill",
            color: "black",
            style: "backward-diagonal",
            outline: {
              width: 0.5,
              color: [50, 50, 50, 0.6]
            }
          },
          defaultLabel: "No data",
          classBreakInfos: [
            {
              minValue: 0,
              maxValue: 1000,
              symbol: menos1000,
              label: "< 1000"
            },
            {
              minValue: 1000,
              maxValue: 9000,
              symbol: menos9000,
              label: "1000 - 9000"
            },
            {
              minValue: 9000,
              maxValue: 28000,
              symbol: mas9000,
              label: "9000 - 28000"
            },
            {
              minValue: 28000,
              maxValue: 110000,
              symbol: mas28000,
              label: "> 28000"
            }
          ]
        };

        // Agregar el layer con sus propiedades
        const mexicoLayer = new FeatureLayer({
          url:            
            "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Mexico_demographics/FeatureServer/0",
          title: "Población de Mujeres > 60 años en México 2014",
          renderer: renderer,
          popupTemplate: {            
            title: "En {NAME}",
            content:
              "De {TOTPOP_CY} mujeres en total para 2014, habían {FAGE05_CY} mujeres mayores a 60 años en el país de Mexico"              
          },
          
          //definitionExpression: "TOTPOP_CY < 100000",
          opacity: 0.9
        });

        const map = new Map({
          basemap: "gray-vector",
          layers: [mexicoLayer]
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-100.971851,21.383222],
          zoom: 5
        });


        // Agregar leyenda
        const legend = new Legend({
          view: view
        });

        view.ui.add(legend, "bottom-left");
      });