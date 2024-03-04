# Plotting Your Location on a Map

In this lesson, you will learn how to use the Geolocation API along with a map library called `Leaflet` to plot your location on a map.

The Leaflet website is located at [https://leafletjs.com/](https://leafletjs.com/). If you go to `Tutorials->Get Started`, you will see the code to add Leaflet to your project. We can include the CDN in our HTML. Your HTML page should look like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
      integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
      crossorigin=""
    />
    <title>My Location</title>

    <style>
      #map {
        height: 600px;
        width: 600px;
      }
    </style>
  </head>
  <body>
    <h1>My Location</h1>

    <div id="map"></div>
    <script
      src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
      integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
      crossorigin=""
    ></script>
    <script src="script.js"></script>
  </body>
</html>
```

We brought in the CSS and JS and added a div for the map to display. I also set the size to 600x600. Now we need to add the JavaScript to plot our location on the map.

Let's start by displaying the map:

```js
// Initialize the map
const map = L.map('map').setView([0, 0], 2);

// Add a tile layer to the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
```

This is just the basic code from the docs to display a map. It will show the whole world. Now let's add a marker to the map:

```js
// Add a marker to the map
const marker = L.marker([0, 0]).addTo(map);
```

Right now, it will just display a marker in the mioddle of the map. We need to get the user's location and update the marker's position. We can do this using the Geolocation API:

```js
// Use the HTML5 geolocation API to get the current location
navigator.geolocation.getCurrentPosition(function (position) {
  // Get the coordinates of the current location
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  // Set the marker to the current location and zoom the map
  marker.setLatLng([lat, lng]).update();
  map.setView([lat, lng], 13);

  // Add a popup to the marker
  marker.bindPopup('<b>Hello world!</b><br>This is my current location');
});
```

So we are just using the `getCurrentPosition` method to get the current location. We then get the latitude and longitude from the `position` object. We then set the marker's position to the current location and zoom the map to 13.

We can also add a popup:

```js
navigator.geolocation.getCurrentPosition(function (position) {
  // ...

  // Add a popup to the marker
  marker.bindPopup('<b>Hello world!</b><br>This is my current location');
});
```

That's it. We can now see our location on a map.
