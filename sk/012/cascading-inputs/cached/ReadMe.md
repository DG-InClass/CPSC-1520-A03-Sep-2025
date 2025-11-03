# Cached JSON Data

The [`countries.json`](./countries.json) file is data saved from the [API Countries](https://www.apicountries.com/docs/api/countries) public API. We are *not* calling this API from the original source in our JavaScript because that endpoint has CORS restrictions on it. This prevents our client-side code from calling the API (and we do not have any server-side code in this web app).
