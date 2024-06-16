const apikey="5bf8108b95d7cdd82a6e0bea6f43497e";
const apiUrl =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=kerala&appid=${apikey}`;
async function cheakweather(){
    try{
        
    const response =await fetch(apiUrl);
    var data =await response.json();
    console.log(data)
    var city=data.name;
    var imgs=document.querySelector(".weather-icon");
    if(data.weather[0].main=="Cloud"){
    imgs.src="imgs/clouds.png";
    }else if(data.weather[0].main=="Clear"){
        imgs.src="imgs/clear.png";
    }else if(data.weather[0].main=="Rain"){
        imgs.src="imgs/rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        imgs.src="imgs/drizzle.png";
    }else{
        imgs.src="imgs/mist.png";
    }
    var names=document.getElementById("ht");
    names.textContent=city;
    var temps=data.main.temp;
    var heat=document.getElementById("tem");
    heat.textContent=temps+"°C"
    var hum=data.main.humidity;
    var humid=document.getElementById("humidity");
    humid.textContent=hum+"%"
    var win=data.wind.speed;
    var winds=document.getElementById("wind");
    winds.textContent=win+" km/h"
}
catch(error){
    console.log("error for getting details",error);
    var names=document.getElementById("ht");
    names.textContent="NO INTERNET";
    var heat=document.getElementById("tem");
    heat.textContent="0°C"
    var humid=document.getElementById("humidity");
    humid.textContent="!!!!"
    var winds=document.getElementById("wind");
    winds.textContent="!!!! km/h"

}
}
cheakweather();

async function getCity() {
    try {
        var citys = document.getElementById("search").value.trim();
        var apiUrl1 = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${citys}&appid=${apikey}`;
        console.log(citys);
        const response = await fetch(apiUrl1);
        console.log(apiUrl1);
        var data = await response.json();
        console.log(data.weather[0].main);
        
        var imgs = document.querySelector(".weather-icon");
        if (imgs) {
            if (data.weather[0].main == "Cloud") {
                imgs.src = "imgs/clouds.png";
            } else if (data.weather[0].main == "Clear") {
                imgs.src = "imgs/clear.png";
            } else if (data.weather[0].main == "Rain") {
                imgs.src = "imgs/rain.png";
            } else if (data.weather[0].main == "Drizzle") {
                imgs.src = "imgs/drizzle.png";
            } else {
                imgs.src = "imgs/mist.png";
            }
        }
        
        var city = data.name;
        var names = document.getElementById("ht");
        names.textContent = city;
        
        var temps = data.main.temp;
        var heat = document.getElementById("tem");
        heat.textContent = temps + "°C";
        
        var hum = data.main.humidity;
        var humid = document.getElementById("humidity");
        humid.textContent = hum + "%";
        
        var win = data.wind.speed;
        var winds = document.getElementById("wind");
        winds.textContent = win + " km/h";
    } catch (error) {
        console.log("error for getting details", error);
        var names = document.getElementById("ht");
        names.textContent = "Enter one city";
        
        var heat = document.getElementById("tem");
        heat.textContent = "0°C";
        
        var humid = document.getElementById("humidity");
        humid.textContent = "!!!!";
        
        var winds = document.getElementById("wind");
        winds.textContent = "!!!! km/h";
    }
}
