const apikey = 'Your-API-Key';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function getWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404) {

        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else {

        var data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' m/s';
        document.querySelector('.visibility').innerHTML = (data.visibility) / 1000 + ' Km';
        document.querySelector('.pressure').innerHTML = data.main.pressure + ' hPa';

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'img/clouds.png'
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'img/clear.png'
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'img/rain.png'
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'img/drizzle.png'
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'img/mist.png'
        }
        else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = 'img/snow.png'
        }
        else if (data.weather[0].main == 'Smoke') {
            weatherIcon.src = 'img/smoke.png'
        }
        else if (data.weather[0].main == 'Haze') {
            weatherIcon.src = 'img/haze.png'
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }
}

searchBtn.addEventListener('click', () => {
    getWeather(searchBox.value);
})
