$("#createPin" ).click(function() {

    $('.leaflet-container').css('cursor','crosshair');

     function onMapClick(e) {
         var lat = e.latlng['lat'];
         var lng = e.latlng['lng'];

         $('.leaflet-container').css('cursor','');

         map.off('click');

         last_marker = L.marker([lat, lng]).addTo(map)

         $( "#dialog" ).dialog({
             minWidth: 400
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