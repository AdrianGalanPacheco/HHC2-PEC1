/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import L from "leaflet";

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

const mapContainer = document.getElementById("mapid");

if (mapContainer) {
  const map = L.map("mapid").setView([42.5078, 1.5211], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const locations = [
    {
      name: "Casa de la Vall",
      coords: [42.50662467322665, 1.5204813711636094],
    },
    {
      name: "Església de Sant Esteve",
      coords: [42.50734648798675, 1.5216841123769627],
    },
    {
      name: "Plaça del Poble",
      coords: [42.50681605720371, 1.5223212960374424],
    },
    {
      name: "Pont de la Margineda",
      coords: [42.484275751797746, 1.4920227291680497],
    },
    {
      name: "Avinguda Meritxell",
      coords: [42.50870019966253, 1.5281460711636097],
    },
  ];

  locations.forEach((loc) => {
    console.log(`${loc.name}`);
    L.marker(loc.coords).addTo(map).bindPopup(`<b>${loc.name}</b>`).openPopup();
  });
}
