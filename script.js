
// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

var input =document.getElementById('city-input')
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});


getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(FULL_URL)
  return weatherPromise.then((response)=>{
    return response.json()
  })

}


const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  getWeatherData(city)
  const data = await getWeatherData(city)
  console.log(data)
  showWeatherData(data)
 

}



const showWeatherData = (weatherData) => {
  
  document.getElementById('temp').innerText=weatherData.main.temp
  document.getElementById('city-name').innerText=weatherData.name
  document.getElementById('weather-type').innerText=weatherData.weather[0].main
  document.getElementById('min-temp').innerText=weatherData.main.temp_min
  document.getElementById('max-temp').innerText=weatherData.main.temp_max
}

