ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([119.509385, 10.818232, 119.522755, 10.824698]);
var wms_layers = [];

var format_PoblacionTaytay_0 = new ol.format.GeoJSON();
var features_PoblacionTaytay_0 = format_PoblacionTaytay_0.readFeatures(json_PoblacionTaytay_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoblacionTaytay_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacionTaytay_0.addFeatures(features_PoblacionTaytay_0);
var lyr_PoblacionTaytay_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoblacionTaytay_0, 
                style: style_PoblacionTaytay_0,
                popuplayertitle: 'Poblacion, Taytay',
                interactive: false,
                title: '<img src="styles/legend/PoblacionTaytay_0.png" /> Poblacion, Taytay'
            });
var format_POBLACION_WATERWAYS_1 = new ol.format.GeoJSON();
var features_POBLACION_WATERWAYS_1 = format_POBLACION_WATERWAYS_1.readFeatures(json_POBLACION_WATERWAYS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_POBLACION_WATERWAYS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POBLACION_WATERWAYS_1.addFeatures(features_POBLACION_WATERWAYS_1);
var lyr_POBLACION_WATERWAYS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POBLACION_WATERWAYS_1, 
                style: style_POBLACION_WATERWAYS_1,
                popuplayertitle: 'POBLACION_WATERWAYS',
                interactive: true,
                title: '<img src="styles/legend/POBLACION_WATERWAYS_1.png" /> POBLACION_WATERWAYS'
            });
var format_POBLACION_WATER_2 = new ol.format.GeoJSON();
var features_POBLACION_WATER_2 = format_POBLACION_WATER_2.readFeatures(json_POBLACION_WATER_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_POBLACION_WATER_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POBLACION_WATER_2.addFeatures(features_POBLACION_WATER_2);
var lyr_POBLACION_WATER_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POBLACION_WATER_2, 
                style: style_POBLACION_WATER_2,
                popuplayertitle: 'POBLACION_WATER',
                interactive: true,
                title: '<img src="styles/legend/POBLACION_WATER_2.png" /> POBLACION_WATER'
            });
var format_POBLACION_TRANSPORT_3 = new ol.format.GeoJSON();
var features_POBLACION_TRANSPORT_3 = format_POBLACION_TRANSPORT_3.readFeatures(json_POBLACION_TRANSPORT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_POBLACION_TRANSPORT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POBLACION_TRANSPORT_3.addFeatures(features_POBLACION_TRANSPORT_3);
var lyr_POBLACION_TRANSPORT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POBLACION_TRANSPORT_3, 
                style: style_POBLACION_TRANSPORT_3,
                popuplayertitle: 'POBLACION_TRANSPORT',
                interactive: true,
                title: '<img src="styles/legend/POBLACION_TRANSPORT_3.png" /> POBLACION_TRANSPORT'
            });
var format_POBLACION_ROADS_4 = new ol.format.GeoJSON();
var features_POBLACION_ROADS_4 = format_POBLACION_ROADS_4.readFeatures(json_POBLACION_ROADS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_POBLACION_ROADS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POBLACION_ROADS_4.addFeatures(features_POBLACION_ROADS_4);
var lyr_POBLACION_ROADS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POBLACION_ROADS_4, 
                style: style_POBLACION_ROADS_4,
                popuplayertitle: 'POBLACION_ROADS',
                interactive: true,
                title: '<img src="styles/legend/POBLACION_ROADS_4.png" /> POBLACION_ROADS'
            });
var format_Place_5 = new ol.format.GeoJSON();
var features_Place_5 = format_Place_5.readFeatures(json_Place_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Place_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Place_5.addFeatures(features_Place_5);
var lyr_Place_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Place_5, 
                style: style_Place_5,
                popuplayertitle: 'Place',
                interactive: true,
                title: '<img src="styles/legend/Place_5.png" /> Place'
            });

lyr_PoblacionTaytay_0.setVisible(true);lyr_POBLACION_WATERWAYS_1.setVisible(true);lyr_POBLACION_WATER_2.setVisible(true);lyr_POBLACION_TRANSPORT_3.setVisible(true);lyr_POBLACION_ROADS_4.setVisible(true);lyr_Place_5.setVisible(true);
var layersList = [lyr_PoblacionTaytay_0,lyr_POBLACION_WATERWAYS_1,lyr_POBLACION_WATER_2,lyr_POBLACION_TRANSPORT_3,lyr_POBLACION_ROADS_4,lyr_Place_5];
lyr_PoblacionTaytay_0.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_POBLACION_WATERWAYS_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_POBLACION_WATER_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_POBLACION_TRANSPORT_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_POBLACION_ROADS_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Place_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_PoblacionTaytay_0.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_POBLACION_WATERWAYS_1.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'width': '', 'name': '', });
lyr_POBLACION_WATER_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_POBLACION_TRANSPORT_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_POBLACION_ROADS_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Place_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_PoblacionTaytay_0.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_POBLACION_WATERWAYS_1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'width': 'no label', 'name': 'inline label - visible with data', });
lyr_POBLACION_WATER_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_POBLACION_TRANSPORT_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_POBLACION_ROADS_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Place_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', 'type': 'no label', });
lyr_Place_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});