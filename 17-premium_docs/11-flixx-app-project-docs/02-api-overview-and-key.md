# API Overview & API Key

We will be using the [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to get the data for our app. You will need to create an account and get an API key. The API key is free and you can get one by following these steps:

1. Go to the [TMDb website](https://www.themoviedb.org/)
2. Click on the `Sign Up` button in the top right corner
3. Fill out the form and click `Sign Up`
4. Once you are logged in, click on your avatar in the top right corner and select `Settings`
5. Click on the `API` tab
6. Click on the `Create` button
7. Enter a name for your API key and click `Save`
8. Copy the API key and paste it into a text file. You will need it later

All of the API documentation at the https://developers.themoviedb.org/3. We are using version 3 of the API. The API documentation is very good and you should read through it to get a better understanding of how the API works.

Here are the endpoints that we will need to hit to get the data for the app. You will need to send your API key with every request.

- [Get Popular Movies](https://api.themoviedb.org/3/movie/popular)
- [Get Popular TV Shows](https://api.themoviedb.org/3/tv/popular)
- [Get Movie Details](https://api.themoviedb.org/3/movie/MOVIE_ID)
- [Get TV Show Details](https://api.themoviedb.org/3/tv/SHOW_ID)
- [Get Now Playing Movies](https://api.themoviedb.org/3/movie/now_playing)
- [Search Movies](https://api.themoviedb.org/3/search/movie?query=QUERY)
- [Search TV Shows](https://api.themoviedb.org/3/search/tv?query=QUERY)
