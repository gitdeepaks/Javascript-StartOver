const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
//   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//   .openPopup();

const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(function (pos) {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;

  marker.setLatLng([lat, lon]).update();
  map.setView([lat, lon], 13);

  marker.bindPopup('<strong>Hello</strong> <br> Thi is my Location')
});