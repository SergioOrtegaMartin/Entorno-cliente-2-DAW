mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZzFvcnRlZ2EiLCJhIjoiY2t1aTgxaWZ6MHEzcDJwbXlzaWxnOG9jbCJ9.TvwFb0pF-kfD71Ah2D-gaQ';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/serg1ortega/ckup8vq6c26he17pj60i17s10',
    center: [-3.62388,37.18922],
    zoom: 13
    });

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
    }));
map.addControl(
    new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric'
    }),
    
    'top-left'
    );

map.setLayoutProperty('country-label', 'text-field', [
'get',
`name_${spanish}`
]);

var options = { units: 'kilometers' };


