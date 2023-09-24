// Comprobar si el navegador permite el geolocalizador
if(navigator.geolocation){
    console.log("El navegador permite el geolocalizador");

    // conseguir la posición del navegador
    navigator.geolocation.getCurrentPosition(
        function(position){
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            console.log(position);
            console.log("Latitud:", lat, "Longitud:", lon);
        },
        function(error){
            console.log(error);
        }
    );
}