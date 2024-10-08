const apikey = "899c321ef74efd00fbde937c8994afdc";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const weathericon = document.querySelector(".weather img");

async function weatherCheck(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "Images/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "Images/sunny.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "Images/rain.png";
    } else if (data.weather[0].main == "drizzle") {
      weathericon.src = "Images/drizzle.png";
    } else if (data.weather[0].main == "snow") {
      weathericon.src = "Images/snow.png";
    } else if (data.weather[0].main == "mist") {
      weathericon.src = "Images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
  searchBox.value = "";
}

// searchBtn.addEventListener("enter",()=>{})
// for buttons

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    weatherCheck(searchBox.value);
  }
});

weatherCheck();
