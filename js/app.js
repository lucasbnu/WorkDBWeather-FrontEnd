const app = {
  init: () => {
    document
      .getElementById('btnGet')
      .addEventListener('click', app.fetchWeather);
  },
  fetchWeather: (ev) => {
    //use the values from latitude and longitude to fetch the weather
    let cidade = document.getElementById('cidade').value;
    let url = `http://localhost:8080/clima/${cidade}`;
    //fetch the weather
    fetch(url)
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        app.showWeather(data);
      })
      .catch(console.err);
  },
  getLocation: (ev) => {
    let opts = {
      enableHighAccuracy: true,
      timeout: 1000 * 10, //10 seconds
      maximumAge: 1000 * 60 * 5, //5 minutes
    };
    navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
  },
  ftw: (position) => {
    //got position
    document.getElementById('latitude').value =
      position.coords.latitude.toFixed(2);
    document.getElementById('longitude').value =
      position.coords.longitude.toFixed(2);
  },
  wtf: (err) => {
    //geolocation failed
    console.error(err);
  },
  showWeather: (resp) => {
    console.log(resp);
    let row = document.querySelector('.weather.row');
    //clear out the old weather and add the new
    // row.innerHTML = '';
    row.innerHTML = resp.daily
      .map((day, idx) => {
        if (idx <= 2) {
          let dt = new Date(day.dt * 1000); //timestamp * 1000
          let sr = new Date(day.sunrise * 1000).toTimeString();
          let ss = new Date(day.sunset * 1000).toTimeString();
          const option = {
            year: 'numeric',
            month: ('long' || 'short' || 'numeric'),
            day: 'numeric'
        }
          
          return `<div class="col">
              <div class="card">
              <h5 class="card-title p-2">${dt.toLocaleDateString('pt-br',option)}</h5>
                <img
                  src="http://openweathermap.org/img/wn/${
                    day.weather[0].icon
                  }@4x.png"
                  class="card-img-top"
                  alt="${day.weather[0].description}"
                />
                <div class="card-body">
                  <h3 class="card-title">${day.weather[0].description}</h3>
                  <p class="card-text">Máxima ${day.temp.max}&deg;C Mínima ${
            day.temp.min
          }&deg;C</p>
                  <p class="card-text">Sensação térmica ${
                    day.feels_like.day
                  }&deg;C</p>
                  <p class="card-text">Pressão ${day.pressure}mb</p>
                  <p class="card-text">Umidade ${day.humidity}%</p>
                  <p class="card-text">Intensidade UV ${day.uvi}</p>
                  <p class="card-text">Precipitação  ${day.pop * 100}%</p>
                  <p class="card-text">Condensação  ${day.dew_point}</p>
                  <p class="card-text">Vento ${day.wind_speed}m/s, ${
            day.wind_deg
          }&deg;</p>
                  <p class="card-text">Nascer do Sol ${sr}</p>
                  <p class="card-text">Por do Sol ${ss}</p>
                </div>
              </div>
            </div>
          </div>`;
        }
      })
      .join(' ');
  },
};

app.init();