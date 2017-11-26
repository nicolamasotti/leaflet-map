
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

var precipitation_rate = L.tileLayer.wms('http://wms.tidetech.org/geoserver/public/wcs', {
    layers: 'public:precipitation_rate',
    transparent: true,
    format: 'image/png'
}),

    sea_ice_coverage = L.tileLayer.wms('http://wms.tidetech.org/geoserver/public/wcs', {
    layers: 'public:sea_ice_coverage',
    transparent: true,
    format: 'image/png'
}),

    air_temperature = L.tileLayer.wms('http://wms.tidetech.org/geoserver/public/wcs', {
    layers: 'public:air_temperature',
    transparent: true,
    format: 'image/png'
}),

    cloud_cover = L.tileLayer.wms('http://wms.tidetech.org/geoserver/public/wcs', {
    layers: 'public:cloud_cover',
    transparent: true,
    format: 'image/png'
}),

    wind_mean_sea_level_pressure = L.tileLayer.wms('http://wms.tidetech.org/geoserver/public/wcs', {
    layers: 'public:wind_mslp',
    transparent: true,
    format: 'image/png'
}),

    combined_currents = L.tileLayer.wms('http://wms.tidetech.org/geoserver/public/wcs', {
    layers: 'public:combined_currents',
    transparent: true,
    format: 'image/png'
}),

    wave_wind_height_direction = L.tileLayer.wms('http://wms.tidetech.org/geoserver/public/wcs', {
    layers: 'public:wave_wind_height_direction',
    transparent: true,
    format: 'image/png'
});

var tileLayers = {
    "Ocean currents": combined_currents,
    "Wind + mean sea level pressure": wind_mean_sea_level_pressure,
    "Cloud cover": cloud_cover,
    "Sea ice coverage": sea_ice_coverage,
    "Air temperature": air_temperature,
    "Waves height + wind direction": wave_wind_height_direction,
    "Precipitation rate": precipitation_rate
};

var map = L.map('mapid', {
    center: [41.902695, 12.496251],
    zoom: 10,
    layers: baseMapColor
});

L.control.layers(baseMaps, tileLayers).addTo(map);

