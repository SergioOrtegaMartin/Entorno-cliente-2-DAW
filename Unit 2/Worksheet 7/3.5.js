var platform = new H.service.Platform({
  'apikey': 'wfqOhECUDtOq7h4QM2iRB4vouPKTqW47wG2wWTCgMTY'
});
// Retrieve the target element for the map:
var targetElement = document.getElementById('mapContainer');

// Get the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate the map:
var map = new H.Map(
document.getElementById('mapContainer'),
defaultLayers.vector.normal.map,
{
  zoom: 10,
  center: { lat: 52.51, lng: 13.4 }
});

  // Get an instance of the search service:
  var service = platform.getSearchService();
  
  // Call the reverse geocode method with the geocoding parameters,
  // the callback and an error callback function (called if a
  // communication error occurs):
  service.reverseGeocode({
    at: '37.1888286,-3.6116593'
  }, (result) => {
    result.items.forEach((item) => {
      // Assumption: ui is instantiated
      // Create an InfoBubble at the returned location with
      // the address as its contents:
      ui.addBubble(new H.ui.InfoBubble(item.position, {
        content: item.address.label
      }));
    });
  }, alert);