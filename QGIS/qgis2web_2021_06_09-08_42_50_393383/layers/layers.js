var wms_layers = [];

var format_ProvinciaTarma_0 = new ol.format.GeoJSON();
var features_ProvinciaTarma_0 = format_ProvinciaTarma_0.readFeatures(json_ProvinciaTarma_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinciaTarma_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinciaTarma_0.addFeatures(features_ProvinciaTarma_0);
var lyr_ProvinciaTarma_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProvinciaTarma_0, 
                style: style_ProvinciaTarma_0,
                interactive: true,
                title: '<img src="styles/legend/ProvinciaTarma_0.png" /> ProvinciaTarma'
            });
var format_Provincias_Junin_1 = new ol.format.GeoJSON();
var features_Provincias_Junin_1 = format_Provincias_Junin_1.readFeatures(json_Provincias_Junin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_Junin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_Junin_1.addFeatures(features_Provincias_Junin_1);
var lyr_Provincias_Junin_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincias_Junin_1, 
                style: style_Provincias_Junin_1,
                interactive: true,
                title: '<img src="styles/legend/Provincias_Junin_1.png" /> Provincias_Junin'
            });
var format_Distritos_Junin_2 = new ol.format.GeoJSON();
var features_Distritos_Junin_2 = format_Distritos_Junin_2.readFeatures(json_Distritos_Junin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritos_Junin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritos_Junin_2.addFeatures(features_Distritos_Junin_2);
var lyr_Distritos_Junin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Distritos_Junin_2, 
                style: style_Distritos_Junin_2,
                interactive: true,
                title: '<img src="styles/legend/Distritos_Junin_2.png" /> Distritos_Junin'
            });
var format_Puntos_3 = new ol.format.GeoJSON();
var features_Puntos_3 = format_Puntos_3.readFeatures(json_Puntos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_3.addFeatures(features_Puntos_3);
var lyr_Puntos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntos_3, 
                style: style_Puntos_3,
                interactive: true,
                title: '<img src="styles/legend/Puntos_3.png" /> Puntos'
            });

lyr_ProvinciaTarma_0.setVisible(true);lyr_Provincias_Junin_1.setVisible(true);lyr_Distritos_Junin_2.setVisible(true);lyr_Puntos_3.setVisible(true);
var layersList = [lyr_ProvinciaTarma_0,lyr_Provincias_Junin_1,lyr_Distritos_Junin_2,lyr_Puntos_3];
lyr_ProvinciaTarma_0.set('fieldAliases', {'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'NOMBPROV', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'Area (Has)': 'Area (Has)', 'Perimetro': 'Perimetro', });
lyr_Provincias_Junin_1.set('fieldAliases', {'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'NOMBPROV', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'Area (Has)': 'Area (Has)', 'Perimetro ': 'Perimetro ', });
lyr_Distritos_Junin_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'IDDIST': 'IDDIST', 'IDDPTO': 'IDDPTO', 'IDPROV': 'IDPROV', 'NOMBDIST': 'NOMBDIST', 'NOMBPROV': 'NOMBPROV', 'NOMBDEP': 'NOMBDEP', 'DCTO': 'DCTO', 'LEY': 'LEY', 'FECHA': 'FECHA', 'NOM_CAP': 'NOM_CAP', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AR_1': 'SHAPE_AR_1', 'AREA_MINAM': 'AREA_MINAM', 'Area (Has)': 'Area (Has)', 'Perimetro': 'Perimetro', });
lyr_Puntos_3.set('fieldAliases', {'id': 'id', 'CoorX': 'CoorX', 'CoorY': 'CoorY', });
lyr_ProvinciaTarma_0.set('fieldImages', {'COUNT': '', 'FIRST_IDPR': '', 'NOMBPROV': '', 'FIRST_NOMB': '', 'LAST_DCTO': '', 'LAST_LEY': '', 'FIRST_FECH': '', 'LAST_FECHA': '', 'Area (Has)': '', 'Perimetro': '', });
lyr_Provincias_Junin_1.set('fieldImages', {'COUNT': '', 'FIRST_IDPR': '', 'NOMBPROV': '', 'FIRST_NOMB': '', 'LAST_DCTO': '', 'LAST_LEY': '', 'FIRST_FECH': '', 'LAST_FECHA': '', 'Area (Has)': '', 'Perimetro ': '', });
lyr_Distritos_Junin_2.set('fieldImages', {'OBJECTID': 'Range', 'IDDIST': 'TextEdit', 'IDDPTO': 'TextEdit', 'IDPROV': 'TextEdit', 'NOMBDIST': 'TextEdit', 'NOMBPROV': 'TextEdit', 'NOMBDEP': 'TextEdit', 'DCTO': 'TextEdit', 'LEY': 'TextEdit', 'FECHA': 'TextEdit', 'NOM_CAP': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_AR_1': 'TextEdit', 'AREA_MINAM': 'TextEdit', 'Area (Has)': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_Puntos_3.set('fieldImages', {'id': '', 'CoorX': '', 'CoorY': '', });
lyr_ProvinciaTarma_0.set('fieldLabels', {'COUNT': 'no label', 'FIRST_IDPR': 'no label', 'NOMBPROV': 'no label', 'FIRST_NOMB': 'no label', 'LAST_DCTO': 'no label', 'LAST_LEY': 'no label', 'FIRST_FECH': 'no label', 'LAST_FECHA': 'no label', 'Area (Has)': 'no label', 'Perimetro': 'no label', });
lyr_Provincias_Junin_1.set('fieldLabels', {'COUNT': 'no label', 'FIRST_IDPR': 'no label', 'NOMBPROV': 'no label', 'FIRST_NOMB': 'no label', 'LAST_DCTO': 'no label', 'LAST_LEY': 'no label', 'FIRST_FECH': 'no label', 'LAST_FECHA': 'no label', 'Area (Has)': 'no label', 'Perimetro ': 'no label', });
lyr_Distritos_Junin_2.set('fieldLabels', {'OBJECTID': 'no label', 'IDDIST': 'no label', 'IDDPTO': 'no label', 'IDPROV': 'no label', 'NOMBDIST': 'inline label', 'NOMBPROV': 'no label', 'NOMBDEP': 'no label', 'DCTO': 'no label', 'LEY': 'no label', 'FECHA': 'no label', 'NOM_CAP': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_AR_1': 'no label', 'AREA_MINAM': 'no label', 'Area (Has)': 'no label', 'Perimetro': 'no label', });
lyr_Puntos_3.set('fieldLabels', {'id': 'no label', 'CoorX': 'no label', 'CoorY': 'no label', });
lyr_Puntos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});