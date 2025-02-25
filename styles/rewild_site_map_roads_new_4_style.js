var size = 0;
var placement = 'point';
function categories_rewild_site_map_roads_new_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Field':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,162,40,1.0)', lineDash: [5.016,2.508], lineCap: 'square', lineJoin: 'bevel', width: 1.254}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Local Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(234,32,227,1.0)', lineDash: [5.016,2.508], lineCap: 'square', lineJoin: 'bevel', width: 1.254}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rough Road (Bumpy in Car)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(33,172,236,1.0)', lineDash: [5.016,2.508], lineCap: 'square', lineJoin: 'bevel', width: 1.254}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tared Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(201,17,36,1.0)', lineDash: [5.016,2.508], lineCap: 'square', lineJoin: 'bevel', width: 1.254}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,226,179,1.0)', lineDash: [5.016,2.508], lineCap: 'square', lineJoin: 'bevel', width: 1.254}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Walking Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(134,18,166,1.0)', lineDash: [5.016,2.508], lineCap: 'square', lineJoin: 'bevel', width: 1.254}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_rewild_site_map_roads_new_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Category");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_rewild_site_map_roads_new_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
