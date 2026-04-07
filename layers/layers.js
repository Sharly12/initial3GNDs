var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Thimbirigasyaya_1 = new ol.format.GeoJSON();
var features_Thimbirigasyaya_1 = format_Thimbirigasyaya_1.readFeatures(json_Thimbirigasyaya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thimbirigasyaya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thimbirigasyaya_1.addFeatures(features_Thimbirigasyaya_1);
var lyr_Thimbirigasyaya_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thimbirigasyaya_1, 
                style: style_Thimbirigasyaya_1,
                popuplayertitle: 'Thimbirigasyaya',
                interactive: true,
                title: '<img src="styles/legend/Thimbirigasyaya_1.png" /> Thimbirigasyaya'
            });
var format_Kollupitiya_2 = new ol.format.GeoJSON();
var features_Kollupitiya_2 = format_Kollupitiya_2.readFeatures(json_Kollupitiya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kollupitiya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kollupitiya_2.addFeatures(features_Kollupitiya_2);
var lyr_Kollupitiya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kollupitiya_2, 
                style: style_Kollupitiya_2,
                popuplayertitle: 'Kollupitiya',
                interactive: true,
                title: '<img src="styles/legend/Kollupitiya_2.png" /> Kollupitiya'
            });
var format_Kurunduwatta_3 = new ol.format.GeoJSON();
var features_Kurunduwatta_3 = format_Kurunduwatta_3.readFeatures(json_Kurunduwatta_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kurunduwatta_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kurunduwatta_3.addFeatures(features_Kurunduwatta_3);
var lyr_Kurunduwatta_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kurunduwatta_3, 
                style: style_Kurunduwatta_3,
                popuplayertitle: 'Kurunduwatta',
                interactive: true,
                title: '<img src="styles/legend/Kurunduwatta_3.png" /> Kurunduwatta'
            });
var format_Kollupitiya_Collection_4 = new ol.format.GeoJSON();
var features_Kollupitiya_Collection_4 = format_Kollupitiya_Collection_4.readFeatures(json_Kollupitiya_Collection_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kollupitiya_Collection_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kollupitiya_Collection_4.addFeatures(features_Kollupitiya_Collection_4);
var lyr_Kollupitiya_Collection_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kollupitiya_Collection_4, 
                style: style_Kollupitiya_Collection_4,
                popuplayertitle: 'Kollupitiya_Collection',
                interactive: true,
                title: '<img src="styles/legend/Kollupitiya_Collection_4.png" /> Kollupitiya_Collection'
            });
var format_Kurunduwatta_Collection_5 = new ol.format.GeoJSON();
var features_Kurunduwatta_Collection_5 = format_Kurunduwatta_Collection_5.readFeatures(json_Kurunduwatta_Collection_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kurunduwatta_Collection_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kurunduwatta_Collection_5.addFeatures(features_Kurunduwatta_Collection_5);
var lyr_Kurunduwatta_Collection_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kurunduwatta_Collection_5, 
                style: style_Kurunduwatta_Collection_5,
                popuplayertitle: 'Kurunduwatta_Collection ',
                interactive: true,
                title: '<img src="styles/legend/Kurunduwatta_Collection_5.png" /> Kurunduwatta_Collection '
            });
var format_Thimbirigasyaya_Collection_6 = new ol.format.GeoJSON();
var features_Thimbirigasyaya_Collection_6 = format_Thimbirigasyaya_Collection_6.readFeatures(json_Thimbirigasyaya_Collection_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thimbirigasyaya_Collection_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thimbirigasyaya_Collection_6.addFeatures(features_Thimbirigasyaya_Collection_6);
var lyr_Thimbirigasyaya_Collection_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thimbirigasyaya_Collection_6, 
                style: style_Thimbirigasyaya_Collection_6,
                popuplayertitle: 'Thimbirigasyaya_Collection',
                interactive: true,
                title: '<img src="styles/legend/Thimbirigasyaya_Collection_6.png" /> Thimbirigasyaya_Collection'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Thimbirigasyaya_1.setVisible(true);lyr_Kollupitiya_2.setVisible(true);lyr_Kurunduwatta_3.setVisible(true);lyr_Kollupitiya_Collection_4.setVisible(true);lyr_Kurunduwatta_Collection_5.setVisible(true);lyr_Thimbirigasyaya_Collection_6.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Thimbirigasyaya_1,lyr_Kollupitiya_2,lyr_Kurunduwatta_3,lyr_Kollupitiya_Collection_4,lyr_Kurunduwatta_Collection_5,lyr_Thimbirigasyaya_Collection_6];
lyr_Thimbirigasyaya_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_Kollupitiya_2.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_Kurunduwatta_3.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_Kollupitiya_Collection_4.set('fieldAliases', {'id': 'id', 'temp_1': 'temp_1', 'rh_1': 'rh_1', 'temp_2': 'temp_2', 'rh_2': 'rh_2', 'temp_3': 'temp_3', 'rh_3': 'rh_3', 'avg_temp': 'avg_temp', 'avg_rh': 'avg_rh', 'Date': 'Date', 'Time': 'Time', 'longitude/X': 'longitude/X', 'latitude/Y': 'latitude/Y', });
lyr_Kurunduwatta_Collection_5.set('fieldAliases', {'id': 'id', 'temp_1': 'temp_1', 'rh_1': 'rh_1', 'temp_2': 'temp_2', 'rh_2': 'rh_2', 'temp_3': 'temp_3', 'rh_3': 'rh_3', 'avg_temp': 'avg_temp', 'avg_rh': 'avg_rh', 'Date': 'Date', 'Time': 'Time', 'longitude/X': 'longitude/X', 'latitude/Y': 'latitude/Y', });
lyr_Thimbirigasyaya_Collection_6.set('fieldAliases', {'id': 'id', 'temp_1': 'temp_1', 'rh_1': 'rh_1', 'temp_2': 'temp_2', 'rh_2': 'rh_2', 'temp_3': 'temp_3', 'rh_3': 'rh_3', 'avg_temp': 'avg_temp', 'avg_rh': 'avg_rh', 'Date': 'Date', 'Time': 'Time', 'longitude/X': 'longitude/X', 'latitude/Y': 'latitude/Y', });
lyr_Thimbirigasyaya_1.set('fieldImages', {'PROVINCE_N': '', 'DISTRICT_N': '', 'DSD_N': '', 'DSD_C': '', 'GND_N': '', 'GND_NO': '', 'GND_C': '', 'PROVINCE_C': '', 'DISTRICT_C': '', 'GN_UID': '', 'OID_': '', 'UID_DIST_D': '', 'TOT_POP': '', 'RANK_POP': '', 'MALE': '', 'FEMALE': '', 'RATIOSEX': '', 'RANK_SR': '', '0TO14': '', '15TO59': '', 'OVER60': '', 'RATIODEPEN': '', 'RANK_DR': '', 'BUDDHIST': '', 'HINDU': '', 'ISLAM': '', 'ROMANCATHO': '', 'OTHERCHRIS': '', 'OTHERELIGI': '', 'SINHALESE': '', 'SRILANKATA': '', 'INDIANTAMI': '', 'SRILANKAMO': '', 'OTHERETHGR': '', 'NAME_DIST_': '', 'NUM_GN': '', 'Area': '', });
lyr_Kollupitiya_2.set('fieldImages', {'PROVINCE_N': '', 'DISTRICT_N': '', 'DSD_N': '', 'DSD_C': '', 'GND_N': '', 'GND_NO': '', 'GND_C': '', 'PROVINCE_C': '', 'DISTRICT_C': '', 'GN_UID': '', 'OID_': '', 'UID_DIST_D': '', 'TOT_POP': '', 'RANK_POP': '', 'MALE': '', 'FEMALE': '', 'RATIOSEX': '', 'RANK_SR': '', '0TO14': '', '15TO59': '', 'OVER60': '', 'RATIODEPEN': '', 'RANK_DR': '', 'BUDDHIST': '', 'HINDU': '', 'ISLAM': '', 'ROMANCATHO': '', 'OTHERCHRIS': '', 'OTHERELIGI': '', 'SINHALESE': '', 'SRILANKATA': '', 'INDIANTAMI': '', 'SRILANKAMO': '', 'OTHERETHGR': '', 'NAME_DIST_': '', 'NUM_GN': '', 'Area': '', });
lyr_Kurunduwatta_3.set('fieldImages', {'PROVINCE_N': '', 'DISTRICT_N': '', 'DSD_N': '', 'DSD_C': '', 'GND_N': '', 'GND_NO': '', 'GND_C': '', 'PROVINCE_C': '', 'DISTRICT_C': '', 'GN_UID': '', 'OID_': '', 'UID_DIST_D': '', 'TOT_POP': '', 'RANK_POP': '', 'MALE': '', 'FEMALE': '', 'RATIOSEX': '', 'RANK_SR': '', '0TO14': '', '15TO59': '', 'OVER60': '', 'RATIODEPEN': '', 'RANK_DR': '', 'BUDDHIST': '', 'HINDU': '', 'ISLAM': '', 'ROMANCATHO': '', 'OTHERCHRIS': '', 'OTHERELIGI': '', 'SINHALESE': '', 'SRILANKATA': '', 'INDIANTAMI': '', 'SRILANKAMO': '', 'OTHERETHGR': '', 'NAME_DIST_': '', 'NUM_GN': '', 'Area': '', });
lyr_Kollupitiya_Collection_4.set('fieldImages', {'id': '', 'temp_1': '', 'rh_1': '', 'temp_2': '', 'rh_2': '', 'temp_3': '', 'rh_3': '', 'avg_temp': '', 'avg_rh': '', 'Date': '', 'Time': '', 'longitude/X': '', 'latitude/Y': '', });
lyr_Kurunduwatta_Collection_5.set('fieldImages', {'id': '', 'temp_1': '', 'rh_1': '', 'temp_2': '', 'rh_2': '', 'temp_3': '', 'rh_3': '', 'avg_temp': '', 'avg_rh': '', 'Date': '', 'Time': '', 'longitude/X': '', 'latitude/Y': '', });
lyr_Thimbirigasyaya_Collection_6.set('fieldImages', {'id': 'Range', 'temp_1': 'TextEdit', 'rh_1': 'TextEdit', 'temp_2': 'TextEdit', 'rh_2': 'TextEdit', 'temp_3': 'TextEdit', 'rh_3': 'TextEdit', 'avg_temp': 'TextEdit', 'avg_rh': 'TextEdit', 'Date': 'TextEdit', 'Time': 'TextEdit', 'longitude/X': 'TextEdit', 'latitude/Y': 'TextEdit', });
lyr_Thimbirigasyaya_1.set('fieldLabels', {'PROVINCE_N': 'inline label - always visible', 'DISTRICT_N': 'inline label - always visible', 'DSD_N': 'hidden field', 'DSD_C': 'hidden field', 'GND_N': 'inline label - always visible', 'GND_NO': 'hidden field', 'GND_C': 'hidden field', 'PROVINCE_C': 'hidden field', 'DISTRICT_C': 'hidden field', 'GN_UID': 'hidden field', 'OID_': 'hidden field', 'UID_DIST_D': 'hidden field', 'TOT_POP': 'hidden field', 'RANK_POP': 'hidden field', 'MALE': 'hidden field', 'FEMALE': 'hidden field', 'RATIOSEX': 'hidden field', 'RANK_SR': 'hidden field', '0TO14': 'hidden field', '15TO59': 'hidden field', 'OVER60': 'hidden field', 'RATIODEPEN': 'hidden field', 'RANK_DR': 'hidden field', 'BUDDHIST': 'hidden field', 'HINDU': 'hidden field', 'ISLAM': 'hidden field', 'ROMANCATHO': 'hidden field', 'OTHERCHRIS': 'hidden field', 'OTHERELIGI': 'hidden field', 'SINHALESE': 'hidden field', 'SRILANKATA': 'hidden field', 'INDIANTAMI': 'hidden field', 'SRILANKAMO': 'hidden field', 'OTHERETHGR': 'hidden field', 'NAME_DIST_': 'hidden field', 'NUM_GN': 'hidden field', 'Area': 'hidden field', });
lyr_Kollupitiya_2.set('fieldLabels', {'PROVINCE_N': 'inline label - always visible', 'DISTRICT_N': 'inline label - always visible', 'DSD_N': 'hidden field', 'DSD_C': 'hidden field', 'GND_N': 'inline label - visible with data', 'GND_NO': 'hidden field', 'GND_C': 'hidden field', 'PROVINCE_C': 'hidden field', 'DISTRICT_C': 'hidden field', 'GN_UID': 'hidden field', 'OID_': 'hidden field', 'UID_DIST_D': 'hidden field', 'TOT_POP': 'hidden field', 'RANK_POP': 'hidden field', 'MALE': 'hidden field', 'FEMALE': 'hidden field', 'RATIOSEX': 'hidden field', 'RANK_SR': 'hidden field', '0TO14': 'hidden field', '15TO59': 'hidden field', 'OVER60': 'hidden field', 'RATIODEPEN': 'hidden field', 'RANK_DR': 'hidden field', 'BUDDHIST': 'hidden field', 'HINDU': 'hidden field', 'ISLAM': 'hidden field', 'ROMANCATHO': 'hidden field', 'OTHERCHRIS': 'hidden field', 'OTHERELIGI': 'hidden field', 'SINHALESE': 'hidden field', 'SRILANKATA': 'hidden field', 'INDIANTAMI': 'hidden field', 'SRILANKAMO': 'hidden field', 'OTHERETHGR': 'hidden field', 'NAME_DIST_': 'hidden field', 'NUM_GN': 'hidden field', 'Area': 'hidden field', });
lyr_Kurunduwatta_3.set('fieldLabels', {'PROVINCE_N': 'inline label - always visible', 'DISTRICT_N': 'inline label - always visible', 'DSD_N': 'inline label - always visible', 'DSD_C': 'hidden field', 'GND_N': 'inline label - always visible', 'GND_NO': 'hidden field', 'GND_C': 'hidden field', 'PROVINCE_C': 'hidden field', 'DISTRICT_C': 'hidden field', 'GN_UID': 'hidden field', 'OID_': 'hidden field', 'UID_DIST_D': 'hidden field', 'TOT_POP': 'hidden field', 'RANK_POP': 'hidden field', 'MALE': 'hidden field', 'FEMALE': 'hidden field', 'RATIOSEX': 'hidden field', 'RANK_SR': 'hidden field', '0TO14': 'hidden field', '15TO59': 'hidden field', 'OVER60': 'hidden field', 'RATIODEPEN': 'hidden field', 'RANK_DR': 'hidden field', 'BUDDHIST': 'hidden field', 'HINDU': 'hidden field', 'ISLAM': 'hidden field', 'ROMANCATHO': 'hidden field', 'OTHERCHRIS': 'hidden field', 'OTHERELIGI': 'hidden field', 'SINHALESE': 'hidden field', 'SRILANKATA': 'hidden field', 'INDIANTAMI': 'hidden field', 'SRILANKAMO': 'hidden field', 'OTHERETHGR': 'hidden field', 'NAME_DIST_': 'hidden field', 'NUM_GN': 'hidden field', 'Area': 'hidden field', });
lyr_Kollupitiya_Collection_4.set('fieldLabels', {'id': 'inline label - always visible', 'temp_1': 'inline label - always visible', 'rh_1': 'inline label - always visible', 'temp_2': 'inline label - always visible', 'rh_2': 'inline label - always visible', 'temp_3': 'inline label - always visible', 'rh_3': 'inline label - always visible', 'avg_temp': 'inline label - always visible', 'avg_rh': 'inline label - always visible', 'Date': 'inline label - always visible', 'Time': 'inline label - always visible', 'longitude/X': 'inline label - always visible', 'latitude/Y': 'inline label - always visible', });
lyr_Kurunduwatta_Collection_5.set('fieldLabels', {'id': 'inline label - always visible', 'temp_1': 'inline label - always visible', 'rh_1': 'inline label - always visible', 'temp_2': 'inline label - always visible', 'rh_2': 'inline label - always visible', 'temp_3': 'inline label - always visible', 'rh_3': 'inline label - always visible', 'avg_temp': 'inline label - always visible', 'avg_rh': 'inline label - always visible', 'Date': 'inline label - always visible', 'Time': 'inline label - always visible', 'longitude/X': 'inline label - always visible', 'latitude/Y': 'inline label - always visible', });
lyr_Thimbirigasyaya_Collection_6.set('fieldLabels', {'id': 'inline label - always visible', 'temp_1': 'inline label - always visible', 'rh_1': 'inline label - always visible', 'temp_2': 'inline label - always visible', 'rh_2': 'inline label - always visible', 'temp_3': 'inline label - always visible', 'rh_3': 'inline label - always visible', 'avg_temp': 'inline label - always visible', 'avg_rh': 'inline label - always visible', 'Date': 'inline label - always visible', 'Time': 'inline label - always visible', 'longitude/X': 'inline label - always visible', 'latitude/Y': 'inline label - always visible', });
lyr_Thimbirigasyaya_Collection_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});