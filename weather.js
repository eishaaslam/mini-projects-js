  const weatherData = {
     karachi : {temperature :"46" , condition:"Humid and Sunny☀️"},
     lahore : {temperature :"32" , condition: "Sunny☀️"},
     islamabad : {temperature :"26" , condition:"Rainy🌧️"},
     quetta : {temperature :"40" , condition:"Cloudy☁️"},
    peshawar : {temperature :"36" , condition:"Thunderstorm🌪️"},
};

 const cityInfoDisplay = document.getElementById("city-name");
const temperatureDisplay = document.getElementById("temperature");
 const conditionDisplay = document.getElementById("condition");

 function showWeather(selectedcity){
    const cityInfo = weatherData[selectedcity];
    cityInfoDisplay.innerText = selectedcity.toUpperCase();
     temperatureDisplay.innerText = cityInfo.temperature;
    conditionDisplay.innerText = cityInfo.condition; 
 }






