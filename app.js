// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0
//SELECT ELEMENT
const iconElement = documment.querySelector(".weather-icon");
const tempElement = documment.querySelector(".temperature-value p");
const descElement = documment.querySelector(".temperarue-description p");
const locationElement = documment.querySelector(".location p");
const notificationElement = documment.querySelector(".notification");

//App data
const weather = {};

weather.temperature = {
  unit : "celsius"
}
// App CONSTS AND VARS
const KELVIN = 273;
//API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

//CHECK IF BROWSER SUPORTS GEOLOCATION
if('geolocation' in navigator){
  navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser dosn't Support Geolocation</p>";
  
}

// SET USER'S POSITION
function setPosition(){
  let latitude = position.coords.latitutde;
  let longitude = position.coords.longitude;
  getWeather(latitude, longitude)
}


// SHOW ERROR WHEN THERE IS AN ISSUE
