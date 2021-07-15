
/* ////////// Fase 1 ////////// */

//Proveedor de Tiles: Open Street Map
const tilesProvider = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

let mapFase1 = L.map("mapFase1").setView([41.38715190920178, 2.1700741025685213], 16); //setView(arrayCoordenadas, zoom)

//En el tileLayer le pasamos nustro proveedor y un objeto con las características, y lo añadimos a nuestro mapa.
L.tileLayer(tilesProvider, {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mapFase1); 

/*
 var mapFase1 = L.map('mapFase1').setView([41.38715190920178, 2.1700741025685213], 15);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mapFase1);
  */



/* ////////// Fase 2 ////////// */
//Marcador en Carrer Balmes 16
let marker = L.marker([41.3868561, 2.1661102]).addTo(mapFase1);

marker.bindPopup("<b>Restaurant Centfocs</b><br><br>Restaurante mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona");