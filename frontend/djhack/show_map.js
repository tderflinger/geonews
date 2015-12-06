$('#dialog').hide();

var data_json = '{ "pins" : [' +
    '{ "id":"001" , "url":"http://www.travel-blues.com", "tags":"music", "lat":"35.698133", "long":"-89.4103167", "description":"Eine Kirche, eine Kneipe, eine Schule. Ein Klo im Freien. Am Highway  19 halten die Leute die Stadt sauber. Sie nennen sie Nutbush!  Nutbush City Limits!  Yeah, es gibt ihn wirklich! Der winzige Ort in Tennessee ist zwar nur ein Fliegenschiss auf der Landkarte der USA, aber ein musikalisches Landmark. Hier ist die berühmte Rock`Roll Ikone vor 76 Jahren zur Welt gekommen und aufgewachsen. Ihre einstige Grundschule ist heute Teil eines neuen Tina-Turner-Museums. Bettina Winterfeld hat sich mit einer ehemaligen Schulfreundin der Sängerin unterhalten.", "title":"Wo Tina Turner die limts sprengte", "user":"Stephan Baier", "user-id":"001", "copyright":"Bettina Winterfeld"  },' +
    '{ "id":"002" , "url":"http://www.google.de", "tags":"fashion", "lat":"48.13800", "long":"11.57690", "description":"BLA, bla, BLA", "title":"Headline", "user":"Stephan Baier", "user-id":"002", "copyright":"copyright"  },' +
    '{ "id":"003" , "url":"http://www.glamour.de/mode/mode-news/istanbul-guide-nisantasi-karakoey-und-cihangir-istanbul-fuer-insider/istanbul-guide-karakoey-fuer-insider", "tags":"travel", "lat":"41.02773", "long":"28.97382", "description":"Der Name ist Programm und steht für die Verkaufsfläche dieses Concept Stores. Besitzer Ali Isitir hat ihn 2013 eröffnet. Hier versammelt er die verschiedensten Bekleidungs-Brands, aber auch Tonka-Duftkerzen von Geodesis, handgefertigte Ledercases von Il Bussetto oder Zeitschriften wie Cereal, High Snobiety und Oak. Kleines Trostpflaster für alle, die nicht nach Istanbul kommen können: Die Läden sind etwas kleiner auch in Amsterdam und Zürich vertreten, ab 2015 soll es einen Onlineshop geben.", "title":"Karaköy: Shopping/ Für Sneakerfreaks: 290 Square Meters", "user":"Stephan Baier", "user-id":"003","copyright":"GLAMOUR"  }' +
    '],'+
    '"users" : [ { "id":"001", "surname":"Kai", "name":"Suden" }, '+
    ' { "id":"002", "surname":"Sabine", "name":"Longen" },'+
    ' { "id":"003", "surname":"Glamour", "name":"Redaktion Mode" }],' +
    '"tags" : [ { "id":"001", "name":"music" }, '+
    ' { "id":"002", "name":"fashion" },'+
    ' { "id":"003", "name":"travel" }]}';

data = jQuery.parseJSON(data_json);


get_url = "http://localhost:8080/pins"

$.ajax({
    url: get_url,
    success: function(){
        console.log('get successful')
    }
});

map = L.map('map').setView([48.13719, 11.57579], 3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(map);

layer_markers = {};

$.each(data['tags'], function (i, tag) {

    layer_markers[tag['name']] = [];

});

$.each(data['users'], function (i, user) {


    layer_markers[user['id']] = [];

});


$.each(data['pins'], function (i, pin) {

    var popuptext = "<b>" + pin['title'] + "</b><br />"
        + pin['description'] +  "<br />"
        + '<a href="' + pin['url'] + '"  target="_blank">'+ pin['url'] +"</a>" + "<br />"
        + pin['copyright']

    var custIcon = L.icon({
        iconUrl: 'flag.png',

        iconSize:     [50, 70], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var marker = L.marker([pin['lat'], pin['long']], {icon: custIcon}).addTo(map).bindPopup(popuptext);

    layer_markers[pin['tags']].push(marker);
    layer_markers[pin['user-id']].push(marker);

});
