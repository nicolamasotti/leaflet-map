$.ajax({
    async: false,
    dataType: 'json',
    url: "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json",
    success: function(json) {
        //console.log(JSON.stringify(data, undefined, 2))
        layers['Country borders'] = L.geoJSON(json)
    }
});