var wms_layers = [];


        var lyr_ESRIOcean_0 = new ol.layer.Tile({
            'title': 'ESRI Ocean',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_CindysSiteFigExtracted_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cindy\'s Site Fig-Extracted<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CindysSiteFigExtracted_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8291186.993774, 4486198.921671, -8205693.624845, 4588852.575555]
        })
    });
var format_Skarkeetal2024_USAMseeps_duplicatesremoved_2 = new ol.format.GeoJSON();
var features_Skarkeetal2024_USAMseeps_duplicatesremoved_2 = format_Skarkeetal2024_USAMseeps_duplicatesremoved_2.readFeatures(json_Skarkeetal2024_USAMseeps_duplicatesremoved_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Skarkeetal2024_USAMseeps_duplicatesremoved_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Skarkeetal2024_USAMseeps_duplicatesremoved_2.addFeatures(features_Skarkeetal2024_USAMseeps_duplicatesremoved_2);
var lyr_Skarkeetal2024_USAMseeps_duplicatesremoved_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Skarkeetal2024_USAMseeps_duplicatesremoved_2, 
                style: style_Skarkeetal2024_USAMseeps_duplicatesremoved_2,
                popuplayertitle: 'Skarkeetal2024_USAMseeps_duplicatesremoved',
                interactive: true,
                title: '<img src="styles/legend/Skarkeetal2024_USAMseeps_duplicatesremoved_2.png" /> Skarkeetal2024_USAMseeps_duplicatesremoved'
            });

lyr_ESRIOcean_0.setVisible(true);lyr_CindysSiteFigExtracted_1.setVisible(true);lyr_Skarkeetal2024_USAMseeps_duplicatesremoved_2.setVisible(true);
var layersList = [lyr_ESRIOcean_0,lyr_CindysSiteFigExtracted_1,lyr_Skarkeetal2024_USAMseeps_duplicatesremoved_2];
lyr_Skarkeetal2024_USAMseeps_duplicatesremoved_2.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', });
lyr_Skarkeetal2024_USAMseeps_duplicatesremoved_2.set('fieldImages', {'field_1': '', 'field_2': '', 'field_3': '', 'field_4': '', 'field_5': '', 'field_6': '', 'field_7': '', 'field_8': '', 'field_9': '', });
lyr_Skarkeetal2024_USAMseeps_duplicatesremoved_2.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'field_4': 'no label', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', });
lyr_Skarkeetal2024_USAMseeps_duplicatesremoved_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});