var wms_layers = [];


        var lyr_ESRIOcean_0 = new ol.layer.Tile({
            'title': 'ESRI Ocean',
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

lyr_ESRIOcean_0.setVisible(true);lyr_CindysSiteFigExtracted_1.setVisible(true);
var layersList = [lyr_ESRIOcean_0,lyr_CindysSiteFigExtracted_1];
