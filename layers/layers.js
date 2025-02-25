var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_rewild_site_map_epsg_2157_2 = new ol.format.GeoJSON();
var features_rewild_site_map_epsg_2157_2 = format_rewild_site_map_epsg_2157_2.readFeatures(json_rewild_site_map_epsg_2157_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rewild_site_map_epsg_2157_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rewild_site_map_epsg_2157_2.addFeatures(features_rewild_site_map_epsg_2157_2);
var lyr_rewild_site_map_epsg_2157_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rewild_site_map_epsg_2157_2, 
                style: style_rewild_site_map_epsg_2157_2,
                popuplayertitle: "rewild_site_map_epsg_2157",
                interactive: true,
    title: 'rewild_site_map_epsg_2157<br />\
    <img src="styles/legend/rewild_site_map_epsg_2157_2_0.png" /> Music Area<br />\
    <img src="styles/legend/rewild_site_map_epsg_2157_2_1.png" /> Camping<br />\
    <img src="styles/legend/rewild_site_map_epsg_2157_2_2.png" /> Parking<br />\
    <img src="styles/legend/rewild_site_map_epsg_2157_2_3.png" /> Stage<br />\
    <img src="styles/legend/rewild_site_map_epsg_2157_2_4.png" /> <br />\
    <img src="styles/legend/rewild_site_map_epsg_2157_2_5.png" /> Boundary<br />\
    <img src="styles/legend/rewild_site_map_epsg_2157_2_6.png" /> Staff Area<br />\
    <img src="styles/legend/rewild_site_map_epsg_2157_2_7.png" /> Area<br />\
    <img src="styles/legend/rewild_site_map_epsg_2157_2_8.png" /> Off Limit<br />\
    <img src="styles/legend/rewild_site_map_epsg_2157_2_9.png" /> Vendor Area<br />\
    <img src="styles/legend/rewild_site_map_epsg_2157_2_10.png" /> Toilets<br />'
        });
var format_rewild_operation_points_3 = new ol.format.GeoJSON();
var features_rewild_operation_points_3 = format_rewild_operation_points_3.readFeatures(json_rewild_operation_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rewild_operation_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rewild_operation_points_3.addFeatures(features_rewild_operation_points_3);
var lyr_rewild_operation_points_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rewild_operation_points_3, 
                style: style_rewild_operation_points_3,
                popuplayertitle: "rewild_operation_points",
                interactive: true,
                title: '<img src="styles/legend/rewild_operation_points_3.png" /> rewild_operation_points'
            });
var format_rewild_site_map_roads_new_4 = new ol.format.GeoJSON();
var features_rewild_site_map_roads_new_4 = format_rewild_site_map_roads_new_4.readFeatures(json_rewild_site_map_roads_new_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rewild_site_map_roads_new_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rewild_site_map_roads_new_4.addFeatures(features_rewild_site_map_roads_new_4);
var lyr_rewild_site_map_roads_new_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rewild_site_map_roads_new_4, 
                style: style_rewild_site_map_roads_new_4,
                popuplayertitle: "rewild_site_map_roads_new",
                interactive: true,
    title: 'rewild_site_map_roads_new<br />\
    <img src="styles/legend/rewild_site_map_roads_new_4_0.png" /> Field<br />\
    <img src="styles/legend/rewild_site_map_roads_new_4_1.png" /> Local Road<br />\
    <img src="styles/legend/rewild_site_map_roads_new_4_2.png" /> Rough Road (Bumpy in Car)<br />\
    <img src="styles/legend/rewild_site_map_roads_new_4_3.png" /> Tared Road<br />\
    <img src="styles/legend/rewild_site_map_roads_new_4_4.png" /> <br />\
    <img src="styles/legend/rewild_site_map_roads_new_4_5.png" /> Walking Trail<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(true);lyr_rewild_site_map_epsg_2157_2.setVisible(true);lyr_rewild_operation_points_3.setVisible(true);lyr_rewild_site_map_roads_new_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatelite_1,lyr_rewild_site_map_epsg_2157_2,lyr_rewild_operation_points_3,lyr_rewild_site_map_roads_new_4];
lyr_rewild_site_map_epsg_2157_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Category': 'Category', 'Area': 'Area', });
lyr_rewild_operation_points_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Catagory': 'Catagory', 'Notes': 'Notes', });
lyr_rewild_site_map_roads_new_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Category': 'Category', 'Length': 'Length', });
lyr_rewild_site_map_epsg_2157_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Category': 'TextEdit', 'Area': 'TextEdit', });
lyr_rewild_operation_points_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Catagory': 'TextEdit', 'Notes': 'TextEdit', });
lyr_rewild_site_map_roads_new_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Category': 'TextEdit', 'Length': 'TextEdit', });
lyr_rewild_site_map_epsg_2157_2.set('fieldLabels', {'id': 'header label - always visible', 'Name': 'inline label - visible with data', 'Category': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_rewild_operation_points_3.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - visible with data', 'Catagory': 'inline label - visible with data', 'Notes': 'inline label - visible with data', });
lyr_rewild_site_map_roads_new_4.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - always visible', 'Category': 'inline label - always visible', 'Length': 'inline label - always visible', });
lyr_rewild_site_map_roads_new_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});