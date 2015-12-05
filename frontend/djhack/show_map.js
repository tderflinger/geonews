$('#dialog').hide();

var data_json = '{ "pins" : [' +
    '{ "id":"001" , "url":"http://www.google.de", "tags":"music", "lat":"48.13719", "long":"11.57579", "description":"BLA, bla, BLA", "title":"Headline", "user":"Stephan Baier", "copyright":"copyright"  },' +
    '{ "id":"002" , "url":"http://www.google.de", "tags":"music", "lat":"48.13800", "long":"11.57690", "description":"BLA, bla, BLA", "title":"Headline", "user":"Stephan Baier", "copyright":"copyright"  },' +
    '{ "id":"003" , "url":"http://www.google.de", "tags":"music", "lat":"48.13450", "long":"11.57430", "description":"BLA, bla, BLA", "title":"Headline", "user":"Stephan Baier", "copyright":"copyright"  }' +
    '],'+
    '"users" : [ { "id":"001", "surname":"Kai", "name":"Suden" }, '+
    ' { "id":"002", "surname":"Sabine", "name":"Longen" },'+
    ' { "id":"003", "surname":"Glamour", "name":"Redaktion Mode" }]}';

data = jQuery.parseJSON(data_json);

get_url = "http://localhost:8080/pins"

$.ajax({
    url: get_url,
    success: function(){
        console.log('get successful')
    }
});

map = L.map('map').setView([48.13719, 11.57579], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(map);

$.each(data['pins'], function (i, pin) {

    var popuptext = "<b>" + pin['title'] + "</b><br />"
        + pin['description'] +  "<br />"
        + '<a href="' + pin['url'] + '"  target="_blank">'+ pin['url'] +"</a>" + "<br />"
        + pin['copyright']

    var custIcon = L.icon({
        iconUrl: 'FlaggerFonly.png',

        iconSize:     [50, 70], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    L.marker([pin['lat'], pin['long']], {icon: custIcon}).addTo(map).bindPopup(popuptext);

});

