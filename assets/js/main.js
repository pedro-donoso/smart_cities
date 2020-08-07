//base
const map = L.map('map', { zoomControl: false }).setView([48.23, 16.37], 10);
const title = L.control();
title.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'info');
    div.innerHTML +=
        '<h2>Smart Cities</h2> y sus características';
        
    return div;
};
title.addTo(map);
//----------------------------------------------------------------------
//mapas base

const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const mono = 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png';
const plano = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png';
const cartoUrl = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
const OpenTopoMap = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
const HikeBike = 'https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png';
const CartoDB = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const Relieve = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}';
const Esri = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const TopoMap = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';
const StreetMap = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
const CyclOSM = 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png';
const Outdoors = 'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png';
const OSM_BZH = 'https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png';
const OSM_HOT = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
const OSM_Fr = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png';
const OSM_CH = 'https://tile.osm.ch/switzerland/{z}/{x}/{y}.png';
const OSM_DE = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';




const baseLayers = {
     OSM: L.tileLayer(osmUrl, { minZoom: 1, maxZoom: 18 }),
    Mono: L.tileLayer(mono, { minZoom: 1, maxZoom: 18 }),
    Plano: L.tileLayer(plano, { minZoom: 1, maxZoom: 18 }),
    DarkMap: L.tileLayer(cartoUrl, { minZoom: 1, maxZoom: 18 }),
    OpenTopoMap: L.tileLayer(OpenTopoMap, { minZoom: 1, maxZoom: 18 }),
    HikeBike: L.tileLayer(HikeBike, { minZoom: 1, maxZoom: 18 }),
    CartoDB: L.tileLayer(CartoDB, { minZoom: 1, maxZoom: 18 }),
    Relieve: L.tileLayer(Relieve, { minZoom: 1, maxZoom: 18 }),
    Esri: L.tileLayer(Esri, { minZoom: 1, maxZoom: 18 }),
    TopoMap: L.tileLayer(TopoMap, { minZoom: 1, maxZoom: 18 }),
    StreetMap: L.tileLayer(StreetMap, { minZoom: 1, maxZoom: 18 }),
    CyclOSM: L.tileLayer(CyclOSM, { minZoom: 1, maxZoom: 18 }),
    Outdoors: L.tileLayer(Outdoors, { minZoom: 1, maxZoom: 18 }),
    OSM_BZH: L.tileLayer(OSM_BZH, { minZoom: 1, maxZoom: 18 }),
    OSM_HOT: L.tileLayer(OSM_HOT, { minZoom: 1, maxZoom: 18 }),
    OSM_Fr: L.tileLayer(OSM_Fr, { minZoom: 1, maxZoom: 18 }),
    OSM_CH: L.tileLayer(OSM_CH, { minZoom: 1, maxZoom: 18 }),
    OSM_DE: L.tileLayer(OSM_DE, { minZoom: 1, maxZoom: 18 }),



  
};
//cuadro
map.addLayer(baseLayers.Esri);
L.control.layers(baseLayers).addTo(map);
//zoom
new L.Control.Zoom({ position: 'topright' }).addTo(map);
//viajes

        const barcelona = [41.41, 2.17];
        const copenhague = [55.70, 12.56];
        const berlin = [52.55, 13.40];
        const tokyo = [35.71, 139.69];
        const londres = [51.55, -0.11];
        const nuevayork = [40.74, -74.00];
        const paris = [48.88, 2.35];
        const viena = [48.23, 16.37];
        //vuelo
document.getElementById('barcelona').onclick = function () {map.flyTo(barcelona, 12, { duration: 9 }); };
document.getElementById('copenhague').onclick = function () {map.flyTo(copenhague, 12, { duration: 9 }); };
document.getElementById('berlin').onclick = function () {map.flyTo(berlin, 12, { duration: 9 }); };
document.getElementById('tokyo').onclick = function () {map.flyTo(tokyo, 12, { duration: 9 }); };
document.getElementById('londres').onclick = function () {map.flyTo(londres, 12, { duration: 9 }); };
document.getElementById('nuevayork').onclick = function () {map.flyTo(nuevayork, 12, { duration: 9 }); };
document.getElementById('paris').onclick = function () {map.flyTo(paris, 12, { duration: 9 }); };
document.getElementById('viena').onclick = function () {map.flyTo(viena, 12, { duration: 9 }); };
document.getElementById('stop').onclick = function () {map.stop(); };
//marcadores
const myMarker1 = L.marker([41.38, 2.17]);
const myMarker2 = L.marker([55.67, 12.56]);
const myMarker3 = L.marker([52.52, 13.40]);
const myMarker4 = L.marker([35.68, 139.69]);
const myMarker5 = L.marker([51.52, -0.11]);
const myMarker6 = L.marker([40.71, -74.00]);
const myMarker7 = L.marker([48.85, 2.35]);
const myMarker8 = L.marker([48.20, 16.37]);
const geoJsonLayer = L.geoJson().addTo(map);
map.addLayer(myMarker1);
map.addLayer(myMarker2);
map.addLayer(myMarker3);
map.addLayer(myMarker4);
map.addLayer(myMarker5);
map.addLayer(myMarker6);
map.addLayer(myMarker7);
map.addLayer(myMarker8);
//textos
 point = L.marker([41.38, 2.17]).addTo(map).bindPopup
("<center><b>BARCELONA, ESPAÑA:</b></center> <li>Es pionera en soluciones de Smart city y en la disminución de emisiones de carbono. </li><li>Fue una de las primeras en utilizar sistemas de ordenanza solar térmica y lanzó su proyecto LIVE EV, que promueve la compra de vehículos eléctricos y cambiará la infraestructura eléctrica de la ciudad.</li>");
 point = L.marker([55.67, 12.56]).addTo(map).bindPopup
("<center><b>COPENHAGUE, DINAMARCA:</b></center> <li>Posicionada en el primer puesto de los rankings de ciudades verdes en Europa. </li><li>Es líder en innovación sustentable, se comprometió a alcanzar neutralidad de carbono y gran parte de sus habitantes se transportan en bicicleta.</li>");
 point = L.marker([52.52, 13.40]).addTo(map).bindPopup
("<center><b>BERLIN, ALEMANIA:</b></center> <li>En los Rankings la ciudad alemana esta en los puestos mas altos en innovación, sustentabilidad y calidad de vida. </li><li>Berlin prueba con tecnología del vehiculo a la red V2G, con la intención de crear una planta de energía virtual que provenga de vehículos eléctricos.</li>");
 point = L.marker([35.68, 139.69]).addTo(map).bindPopup
("<center><b>TOKYO, JAPÓN:</b></center> <li>La ciudad anunció sus planes de crear un pueblo inteligente en sus suburbios, con casas con paneles solares integrados, baterías almacenadas y tecnología con uso energético eficiente, todos conectados a una red inteligente. </li>");
 point = L.marker([51.52, -0.11]).addTo(map).bindPopup
("<center><b>LONDRES, INGLATERRA:</b></center> <li>Alberga el centro de investigación Smart Cities que trabaja en mejorar el transporte, gobierno, negocios y la información académica y de consumo.</li> <li>Eficiente e innovadora, cuenta con una de las redes Wi-Fi gratuitas más grande de Europa.</li>");
 point = L.marker([40.71, -74.00]).addTo(map).bindPopup
("<center><b>NUEVA YORK, ESTADOS UNIDOS:</b></center> <li>Dedicada a atender la creciente demanda por las complejas capacidades de construir una ciudad inteligente y ayudar a sus clientes a optimizar sus procesos de negocio, previniendo incendios y ayudandole a la ciudad a ahorrar recursos</li>");
 point = L.marker([48.85, 2.35]).addTo(map).bindPopup
("<center><b>PARIS, FRANCIA:</b></center> <li>Está en los primeros lugares de innovación, ciudades sustentables y en gobierno digital. </li><li>Es pionera programas de bicicletas para sus ciudadanos y lanzó un sistema para vehículos eléctricos con cientos de estaciones de renta.</li>");
 point = L.marker([48.20, 16.37]).addTo(map).bindPopup
("<center><b>VIENA, AUSTRIA:</b></center> <li>En los primeros lugares de las categorías consideradas: innovación, sustentabilidad, calidad de vida y gobierno digital. </li><li>Viena estableció ambiciosas metas, para renovar las fuentes de energía de la ciudad, y modificar infraestructura.</li>");
//minimapa
const osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {minZoom:0, maxZoom: 13});
const miniMap = new L.Control.MiniMap(osm2, {toggleDisplay: true, minimized: true, position: 'bottomright' }).addTo(map);
const escala = L.control.scale({position: 'bottomleft', imperial: false});
map.addControl(escala);