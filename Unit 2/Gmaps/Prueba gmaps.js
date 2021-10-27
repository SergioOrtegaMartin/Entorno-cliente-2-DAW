

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  var crd
  function success(pos) {
    crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
}
      
navigator.geolocation.getCurrentPosition(success, error, options);

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.1888286, lng: -3.6116593},
    zoom: 8
  });
}