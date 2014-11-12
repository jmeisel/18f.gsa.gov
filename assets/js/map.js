var teamAPI = "/api/data/team.json";
$(document).ready( function() {
  var locations = $.ajax({
    dataType: "json",
    url: teamAPI,
  }).done(function(data) {
    $.each(data['locations'], function( index, object ) {
      popup = L.popup([object.lat, object.long] );
      popupContent = "See members of our team in: <a href='#"+index+"'>"+object.city+", "+object.state+"</a>.";
      L.marker([object.lat, object.long]).bindPopup(
        popupContent, 'p',popup).addTo(map);
    })
  });
});
