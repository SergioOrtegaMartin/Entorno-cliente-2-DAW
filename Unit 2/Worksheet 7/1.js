/*1)Develop a web app in which:
    a)Test if geolocation is available.*/
    //b)If it's available, show the current position (latitude and longitude)
    //c)If it isn't available, show a message for each and everyone of the possible errors.
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
    };
    
    function success(pos) {
    var crd = pos.coords;
    
    document.write('Your current position is:  <br>' );
    document.write(`Latitude : ${crd.latitude} <br>`);
    document.write(`Longitude: ${crd.longitude} <br>`);
    document.write(`More or less ${crd.accuracy} meters. <br>`);
    }
    
    function error(err) {
    document.write(`ERROR(${err.code}): ${err.message}`);
    }
    
    //navigator.geolocation.getCurrentPosition(success, error, options);

  
    //d)Improve your code so you show the position continuously (although the user could be in moving, so it could change)
        //navigator.geolocation.watchPosition(success, error, options);
    

//e)Find the way to meassure the distance traveled.


function GradosARadianes(x){  
    return x*3.14/180
}

function calcularDistancia(lat1,lon1,lat2,lon2){
    var R = 6378; //Radio de la tierra en km
    var dLat = GradosARadianes( lat2 - lat1 );
    var dLong = GradosARadianes( lon2 - lon1 );
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(GradosARadianes(lat1)) * Math.cos(GradosARadianes(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d.toFixed(2);
 }

 distancia = calcularDistancia(37.1888286,-3.6116593, 37.1888286,-3.0);

 document.write(`La distancia entre los dos puntos es de ${distancia} kilometros`)