$.each(data['users'], function (i, user) {

    var li_entry = "<li class='list-group-item'> <div class='checkbox'> <label> <input id='checkbox-" + user['id'] +"' type='checkbox' value='' checked>"
        + user['surname'] + " " + user['name'] + "</label> </div> </li>";

    $('#user_menu').append(li_entry);

    $('#checkbox-' + user['id'])
        .click(function() {
            var $this = $(this);
            if ($this.is(':checked')) {
                console.log('activate layer: ' + user['id']);

                $.each(layer_markers[user['id']], function(i, marker){
                    marker.addTo(map);
                });


            } else {
                console.log('deactivate layer: ' + user['id']);

                $.each(layer_markers[user['id']], function(i, marker){
                    map.removeLayer(marker);
                });
            }
        });;

});



$.each(data['tags'], function (i, tag) {

    var li_entry = "<li class='list-group-item'> <div class='checkbox'> <label> <input id='checkbox-" + tag['name'] +"' type='checkbox' value='' checked>"
        + tag['name'] + "</label> </div> </li>";

    $('#tag_menu').append(li_entry);



    $('#checkbox-' + tag['name'])
        .click(function() {
            var $this = $(this);
            if ($this.is(':checked')) {
                console.log('activate layer: ' + tag['name']);

                $.each(layer_markers[tag['name']], function(i, marker){
                    marker.addTo(map);
                });


            } else {
                console.log('deactivate layer: ' + tag['name']);

                $.each(layer_markers[tag['name']], function(i, marker){
                    map.removeLayer(marker);
                });
            }
    });;

});
