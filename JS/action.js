const container = document.querySelector('.container');
const search = document.querySelector('.container-box #search');
const weatherBox = document.querySelector('.weather');
const weatherDetail = document.querySelector('.weather-detail');
const error = document.querySelector('.error');
const image = document.querySelector('.weather img');
const tempreature = document.querySelector('.weather .tempreature');
const description = document.querySelector('.weather .description');
const wind = document.querySelector('.weather-detail .wind-speed');
const humidity = document.querySelector('.weather-detail .humidity-ratio');
function inputSizeText() {
    var input = document.querySelector('.container-box input');
    input.style.fontSize = '20px'; // Adjust the size as needed
}

search.addEventListener('click', function () {
    const API_Key = "e62afd296a7efc4fb72aa40978528ed0";
    const city = document.querySelector('.container-box input').value;
    if (city == '') {
        return;
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`)
        .then(response => {
            container.style.height = '560px';
            weatherBox.classList.add('active');
            weatherDetail.classList.add('active');
            error.classList.remove('active');

            switch (response.data.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png'
                    break;
                case 'Rain':
                    image.src = 'images/rain.png'
                    break;
                case 'Snow':
                    image.src = 'images/snow.png'
                    break;
                case 'Clouds':
                    image.src = 'images/cloudy.png'
                    break;
                case 'Mist':
                    image.src = 'images/foggy.png'
                    break;
                case 'Haze':
                    image.src = 'images/foggy.png'
                    break;
                default:
                    image.src = 'images/clear.png'
            }
            tempreature.innerHTML = `${parseInt(response.data.main.temp)}<span>°C</span>`
            description.innerHTML = `${response.data.weather[0].description}`
            humidity.innerHTML = `${parseInt(response.data.main.humidity)}%`
            wind.innerHTML = `${parseInt(response.data.wind.speed)} Km/h`

        }).catch(err => {
            container.style.height = '300px';
            weatherBox.classList.remove('active');
            weatherDetail.classList.remove('active');
            error.classList.add('active');
            return;

        })

})