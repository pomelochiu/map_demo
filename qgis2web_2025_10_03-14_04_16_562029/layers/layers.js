var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '電池和儲能統計表 測試 - 區內鋰電池廠商',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 電池和儲能統計表 測試 - 區內鋰電池廠商'
            });
var format_10MW_2 = new ol.format.GeoJSON();
var features_10MW_2 = format_10MW_2.readFeatures(json_10MW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10MW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10MW_2.addFeatures(features_10MW_2);
var lyr_10MW_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10MW_2, 
                style: style_10MW_2,
                popuplayertitle: '電池和儲能統計表 測試 - 園區逾10MW儲能案場統計表',
                interactive: true,
                title: '<img src="styles/legend/10MW_2.png" /> 電池和儲能統計表 測試 - 園區逾10MW儲能案場統計表'
            });

lyr_GoogleRoad_0.setVisible(true);lyr__1.setVisible(true);lyr_10MW_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr__1,lyr_10MW_2];
lyr__1.set('fieldAliases', {'Item': 'Item', 'Industrial park': 'Industrial park', 'Company': 'Company', 'Address': 'Address', 'Battery Manufacturing Process (Y/N)': 'Battery Manufacturing Process (Y/N)', 'lat': 'lat', 'lon': 'lon', 'Maximum Design Capacity': 'Maximum Design Capacity', 'Service Center Recommendations': 'Service Center Recommendations', 'Supervision Conducted': 'Supervision Conducted', });
lyr_10MW_2.set('fieldAliases', {'Item': 'Item', 'Country': 'Country', 'Industrial park': 'Industrial park', 'Number': 'Number', 'Company': 'Company', 'Application to Taipower for grid interconnection of energy storage (MW)': 'Application to Taipower for grid interconnection of energy storage (MW)', 'Transmission-level (MW), Distribution-level (MW)': 'Transmission-level (MW), Distribution-level (MW)', 'units': 'units', 'total_Storage': 'total_Storage', 'Address': 'Address', 'lat': 'lat', 'lon': 'lon', 'Shortest Distance to Industrial Park Boundary (m)': 'Shortest Distance to Industrial Park Boundary (m)', 'Distance Requirement (Energy Storage Cabinet)': 'Distance Requirement (Energy Storage Cabinet)', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'Distance Requirement Outside the Plant Area': 'Distance Requirement Outside the Plant Area', 'field_22': 'field_22', 'field_23': 'field_23', 'Notes': 'Notes', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', });
lyr__1.set('fieldImages', {'Item': 'Range', 'Industrial park': 'TextEdit', 'Company': 'TextEdit', 'Address': 'TextEdit', 'Battery Manufacturing Process (Y/N)': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'Maximum Design Capacity': 'TextEdit', 'Service Center Recommendations': 'TextEdit', 'Supervision Conducted': 'TextEdit', });
lyr_10MW_2.set('fieldImages', {'Item': 'Range', 'Country': 'TextEdit', 'Industrial park': 'TextEdit', 'Number': 'Range', 'Company': 'TextEdit', 'Application to Taipower for grid interconnection of energy storage (MW)': 'TextEdit', 'Transmission-level (MW), Distribution-level (MW)': 'TextEdit', 'units': 'Range', 'total_Storage': 'TextEdit', 'Address': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'Shortest Distance to Industrial Park Boundary (m)': 'TextEdit', 'Distance Requirement (Energy Storage Cabinet)': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', 'Distance Requirement Outside the Plant Area': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'Notes': 'TextEdit', 'field_25': 'TextEdit', 'field_26': 'TextEdit', 'field_27': 'TextEdit', });
lyr__1.set('fieldLabels', {'Item': 'no label', 'Industrial park': 'no label', 'Company': 'no label', 'Address': 'no label', 'Battery Manufacturing Process (Y/N)': 'no label', 'lat': 'no label', 'lon': 'no label', 'Maximum Design Capacity': 'no label', 'Service Center Recommendations': 'no label', 'Supervision Conducted': 'no label', });
lyr_10MW_2.set('fieldLabels', {'Item': 'no label', 'Country': 'no label', 'Industrial park': 'no label', 'Number': 'no label', 'Company': 'no label', 'Application to Taipower for grid interconnection of energy storage (MW)': 'no label', 'Transmission-level (MW), Distribution-level (MW)': 'no label', 'units': 'no label', 'total_Storage': 'no label', 'Address': 'no label', 'lat': 'no label', 'lon': 'no label', 'Shortest Distance to Industrial Park Boundary (m)': 'no label', 'Distance Requirement (Energy Storage Cabinet)': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', 'Distance Requirement Outside the Plant Area': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'Notes': 'no label', 'field_25': 'no label', 'field_26': 'no label', 'field_27': 'no label', });
lyr_10MW_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});