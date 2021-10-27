// Let's try to use the geolocation information with the API of Here Maps.
// Use a map to show your location
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
    console.log(`More or less ${crd.accuracy} meters.`)
    var platform = new H.service.Platform({
        'apikey': '44EY6xD3b5q68_g59xKWR_2EQezJ3tZt4ZWCe-syp0g'
      });
    
      // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();
    
    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
          zoom: 15,
          center: { lat: crd.latitude, lng: crd.longitude }
        });;
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);


// Draw a marker in your location
// Design a way to calculate and draw the route from my current location to a given place.
// Find a way to know the address of your location (reverse geocoding).