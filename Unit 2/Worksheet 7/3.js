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
  
    /*console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`)*/
    
    ///////////AQUI EMPIEZAN LAS APIS DE HERE MAPS
    
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
    // Define a variable holding SVG mark-up that defines an icon image:
    var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">H</text></svg>';

    // Create an icon, an object holding the latitude and longitude, and a marker:
    var icon = new H.map.Icon(svgMarkup),
    coords = {lat: crd.latitude, lng: crd.longitude},
    marker = new H.map.Marker(coords, {icon: icon});

    // Add the marker to the map and center the map at the location of the marker:
    map.addObject(marker);
    map.setCenter(coords);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);


// Draw a marker in your location
// Design a way to calculate and draw the route from my current location to a given place.
// Find a way to know the address of your location (reverse geocoding).

// Get an instance of the geocoding service:
var service = platform.getSearchService();

// Call the geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):