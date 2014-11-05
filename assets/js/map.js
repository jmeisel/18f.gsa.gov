var teamAPI = "/api/data/team.json";
var locationsAPI = "/api/data/locations.json";
$(document).ready( function() {
  var locations = $.ajax({
    dataType: "json",
    url: locationsAPI,
  }).done(function(data) {
    return data;
  });
  $.ajax({
    dataType: "json",
    url: teamAPI,
  }).done(function(data) {
    locations = $.each(locations.responseJSON, function( index, object ) {
      locations.responseJSON[index].members = [];
      return
    });
    $.each(data, function( index, object ) {
      if (object.location && object.hidden != true) {
        locations[object.location].members.push([object.name, object.full_name]);
      }
      return locations;
    });
    $.each(locations, function( index, object ) {
      popup = L.popup([object.lat, object.long] );
      popupContent = "<a href='#"+index+"'>"+object.city+", "+object.state+"</a>";
      L.marker([object.lat, object.long]).bindPopup(
        popupContent, 'p',popup).addTo(map);
    })
  });
});
