var platform = new H.service.Platform({
    'apikey': 'wfqOhECUDtOq7h4QM2iRB4vouPKTqW47wG2wWTCgMTY'
  });
// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 10,
      center: { lat: 52.5, lng: 13.4 }
    });

/**
 * * Calculates and displays a public trasnsport route from the Fernsehturm in Berlin
 * to Kurfürstendamm in the west of the city
 *
 * A full list of available request parameters can be found in the Routing API documentation.
 * see:  http://developer.here.com/rest-apis/documentation/routing/topics/resource-calculate-route.html
 *
 * @param   {H.service.Platform} platform    A stub class to access HERE services
 */
 

function calculateRouteFromAtoB (platform) {
    var router = platform.getPublicTransitService(),
        routeRequestParams = {
          origin: '52.5208,13.4093', // Fernsehturm
          destination: '52.5034,13.3280',  // Kurfürstendamm
          return: 'polyline,actions,travelSummary'
        };
  
  
    router.getRoutes(
      routeRequestParams,
      onSuccess,
      onError
    );
  }

calculateRouteFromAtoB (platform)

function onSuccess(result) {
    var route = result.routes[0];
  
   /*
    * The styling of the route response on the map is entirely under the developer's control.
    * A representitive styling can be found the full JS + HTML code of this example
    * in the functions below:
    */
    addRouteShapeToMap(route);
    addManueversToMap(route);
    addManueversToPanel(route);
    addSummaryToPanel(route);
    // ... etc.
  }
  
  /**
   * This function will be called if a communication error occurs during the JSON-P request
   * @param  {Object} error  The error message received.
   */
function onError(error) {
    alert('Can\'t reach the remote server');
}