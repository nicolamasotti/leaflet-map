var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoibml2NyIsImEiOiJjajlmaGtqbDAycjdwMnhxc2llMzl6MmlqIn0.ezndKIXDc_T8ofY2fReRBA';

var baseMapGray = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr});
var baseMapColor  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});

var baseMaps = {
    "Grayscale": baseMapGray,
    "Color": baseMapColor
    //Names can also be styled: "<span style='color: gray'>Grayscale</span>": baseMapGray
};

var map = L.map('mapid', {
    center: [41.902695, 12.496251],
    zoom: 10,
    layers: baseMapColor
});

L.control.layers(baseMaps, layers).addTo(map);

