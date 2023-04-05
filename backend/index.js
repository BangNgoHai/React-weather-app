const express = require('express');
const app = express();

const weatherData = {
    "01d": { description: "clear sky", imgSrc: "https://cdn-icons-png.flaticon.com/512/169/169367.png" },
    "01n": { description: "clear sky", imgSrc: "https://cdn-icons-png.flaticon.com/512/180/180700.png" },
    "02d": { description: "few clouds", imgSrc: "https://cdn-icons-png.flaticon.com/512/252/252035.png" },
    "02n": { description: "few clouds", imgSrc: "https://cdn-icons-png.flaticon.com/512/6805/6805164.png" },
    "03d": { description: "scattered clouds", imgSrc: "https://icons.veryicon.com/png/o/weather/weather-15/few-clouds.png" },
    "03n": { description: "scattered clouds", imgSrc: "https://us.123rf.com/450wm/apvaper/apvaper1801/apvaper180100056/94377086-mond-mit-wolken-symbol-wetterkennsatz-f%C3%BCr-web-auf-wei%C3%9Fem-hintergrund-cartoon-vektor-illustration.jpg" },
    "04d": { description: "broken clouds", imgSrc: "https://icons.veryicon.com/png/o/weather/weather-15/few-clouds.png" },
    "04n": { description: "broken clouds", imgSrc: "https://us.123rf.com/450wm/apvaper/apvaper1801/apvaper180100056/94377086-mond-mit-wolken-symbol-wetterkennsatz-f%C3%BCr-web-auf-wei%C3%9Fem-hintergrund-cartoon-vektor-illustration.jpg" },
    "09d": { description: "shower rain", imgSrc: "https://st4.depositphotos.com/4177785/22382/v/1600/depositphotos_223823738-stock-illustration-scattered-shower-color-icon-rainy.jpg" },
    "09n": { description: "shower rain", imgSrc: "https://static.vecteezy.com/system/resources/previews/007/488/950/original/rain-night-color-icon-drizzle-or-shower-at-night-cloud-raindrop-and-moon-weather-forecast-isolated-illustration-vector.jpg" },
    "10d": { description: "rain", imgSrc: "https://st4.depositphotos.com/4177785/22382/v/1600/depositphotos_223823738-stock-illustration-scattered-shower-color-icon-rainy.jpg" },
    "10n": { description: "rain", imgSrc: "https://static.vecteezy.com/system/resources/previews/007/488/950/original/rain-night-color-icon-drizzle-or-shower-at-night-cloud-raindrop-and-moon-weather-forecast-isolated-illustration-vector.jpg" },
    "11d": { description: "thunderstorm", imgSrc: "https://img.freepik.com/premium-vector/thunderstorm-icon-forecast-weather-illustration-symbol-cloud-ligthning-vector_744955-684.jpg" },
    "11n": { description: "thunderstorm", imgSrc: "https://cdn4.vectorstock.com/i/1000x1000/54/18/isolated-thunderstorm-weather-icon-vector-21015418.jpg" },
    "13d": { description: "snow", imgSrc: "https://cdn-icons-png.flaticon.com/512/2044/2044021.png" },
    "13n": { description: "snow", imgSrc: "https://www.iconpacks.net/icons/5/free-blue-moon-and-snowy-night-icon-16543-thumb.png" },
    "50d": { description: "mist", imgSrc: "https://w7.pngwing.com/pngs/296/238/png-transparent-cloudy-day-fog-foggy-mist-sun-weather-the-weather-is-nice-today-icon.png" },
    "50n": { description: "mist", imgSrc: "https://cdn3.iconfinder.com/data/icons/weather-ios-11-1/50/Night_Fog_Humidity_Smog_Mist_Cloud_Apple_Flat_iOS_Weather-512.png" },
};


app.get("/v1/weathericons", (req,res) => {
    res.status(200).json(weatherData);
});


app.listen("8080",()=>{
    console.log("Server is on fire...🔥🔥🔥⛔️⛔️");
});