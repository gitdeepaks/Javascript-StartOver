# Geolocation API

The Geolocation API allows us to access the user's location. It is part of the HTML5 specification and is supported by all modern browsers. For privacy reasons, the user is asked for permission to report location information. If the user grants permission, the location information is made available to the web page. I'm sure most of you have seen this when the webpage asks you if it can access your location.

## Why use the Geolocation API?

The Geolocation API is useful for a variety of applications. For example, if you are building a weather app, you can use the Geolocation API to get the user's location and then use that information to display the weather for that location. You can also use the Geolocation API to build a map app that shows the user's location on a map.

There are 2 main methods that we can use to access the user's location:

- `navigator.geolocation.getCurrentPosition()` - This method is used to get the user's current position.
- `navigator.geolocation.watchPosition()` - This method is used to watch the user's position for changes.

## Getting the user's current position

The `navigator.geolocation.getCurrentPosition()` method is used to get the user's current position. It takes 2 callback functions as parameters as well as a third optional parameter that is an object containing options.

- `success` - This callback function is called if the user's location is successfully retrieved.
- `error` - This callback function is called if there is an error getting the user's location.
- `options` - Options about how to get the user's location. This is an optional parameter.

Let's call the method, with named functions as the callbacks:

```js
navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);
```

Let's create the success function:

```js
function curSuccess(pos) {
  const coords = pos.coords;

  console.log('Current position is:');
  console.log(`Latitude : ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`More or less ${coords.accuracy} meters.`);
}
```

Let's create the error function:

```js
function curError(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
```

Let's create the options object:

```js
const curOptions = {
  enableHighAccuracy: true, // use GPS if available
  timeout: 5000, // wait 5 seconds before giving up
  maximumAge: 0, // do not use a cached position
};
```

As you can see, it will show your latitude and longitude as well as the accuracy of the location. The accuracy is the radius of a 95% confidence interval. In other words, it is the radius of a circle centered at the given position, where the probability of the device's position being within the circle is 95%.

My location is based on my VPN so it is not accurate. If you are using a VPN, make sure to disable it before testing this.

## Watching the user's position

Let's call the `navigator.geolocation.watchPosition()` method, with named functions as the callbacks:

```js
navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);
```

Let's create the success function. We can also create a target that when that target is reached, it can do something. In this case, we will just log a message to the console when the target is reached. We won't see the message, because obviously I am not moving, while I'm sitting here creating a tutorial. But if you were to move and reach the target, you would see the message in the console.

```js
let target = {
  latitude: 41.7568588,
  longitude: -71.6789246,
};
```

```js
function watchSuccess(pos) {
  const coords = pos.coords;

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log('Congratulations, you reached the target');
    navigator.geolocation.clearWatch(id);
  }
}
```

Let's create the error function:

```js
function watchError(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
```

And the options:

```js
const watchOptions = {
  enableHighAccuracy: false, // use GPS if available
  timeout: 5000, // wait 5 seconds before giving up
  maximumAge: 0, // do not use a cached position
};
```

This method returns an ID that we can use to stop watching the user's position. We used this in the success function with the `navigator.geolocation.clearWatch()` method to stop watching the user's position.

```js
const id = navigator.geolocation.watchPosition(
  watchSuccess,
  watchError,
  watchOptions
);
console.log(id);
```
