// Step 1: Create an array with some dummy weather data
// https://api.openweathermap.org/data/2.5/weather?lat=39.74&lon=-104.98&appid=abaf5ef99f724e583ebb861229ef7e7f for Toronto

var weather = [
  {
    city: 'Toronto',
    temperature: '25C',
    main: 'cloudy'
  }
]

// Use input to make a GET request from the Weather API.
$('.search').on('click', function(){
  var search = $('#temperature-query').val();
  fetch(search);
});

// Get user input when form is submitted
const form = document.querySelector('.search-form');
const userInput = document.getElementById('input');
const weatherContainer = document.querySelector('.weather-container');
const apiKey = '75e7ccabdef5725374998f0c3f3798b2';
const city = document.getElementById('search-query');
const searchBtn = document.querySelector('.search'); 

// Function to change city name
searchBtn.addEventListener('click', function(){
  console.log(`1. finding ${city.value}`)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&apiKey=75e7ccabdef5725374998f0c3f3798b2&units=imperial`)

  .then(response => response.json())
  .then(data => {
    console.log(`2. finding ${city.value}`)
    console.log(data)
    // console.log(`Temp: ${data.main.temp}`)
    console.log(`City: ${data.name}`)
    // console.log(`Weather: ${data.weather.main}`)
  }
  
)})


function displayWeather(){}

displayWeather();

