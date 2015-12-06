$("#createPin" ).click(function() {

    $('.leaflet-container').css('cursor','crosshair');

     function onMapClick(e) {
         var lat = e.latlng['lat'];
         var lng = e.latlng['lng'];

         $('.leaflet-container').css('cursor','');

         map.off('click');

        var custIcon = L.icon({
            iconUrl: 'flag.png',

            iconSize:     [50, 70], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

         last_marker = L.marker([lat, lng], {icon: custIcon}).addTo(map)

         $( "#dialog" ).dialog({
             minWidth: 350
         });
     }

     map.on('click', onMapClick);

});

$('#new-save').click(function(){

    var title = $('#new-title').val();
    var description = $('#new-description').val();
    var url = $('#new-url').val();
    var copyright = $('#new-copyright').val();


    new_pin = {'url' : url, 'title' : title, 'description' : description, 'copyright' : copyright}

    var popuptext = "<b>" + title + "</b><br />"
        + description +  "<br />"
        + '<a href="' + url + '"  target="_blank">'+ url +"</a>" + "<br />"
        + copyright;

    last_marker.bindPopup(popuptext);

    $("#dialog").dialog("close");

})

$('#new-cancel').click(function(){
    map.removeLayer(last_marker);
    $("#dialog").dialog("close");
})
