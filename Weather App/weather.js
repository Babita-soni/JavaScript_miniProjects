const apiKey = "c33b99856b9b16a49c543110de5dcdca";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
   
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    // console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "Kmph";

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "images/clouds.png";
        document.querySelector(".card").style.background = 'url(https://images.unsplash.com/photo-1534358594138-6955f589fa24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "images/clear.png";
        document.querySelector(".card").style.background = 'url(https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png";
        document.querySelector(".card").style.background = 'url(https://scitechdaily.com/images/Rainy-Weather-1536x1024.jpg)'

    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png";
        document.querySelector(".card").style.background = 'url(https://images.pexels.com/photos/10393304/pexels-photo-10393304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
    }
    else{
        weatherIcon.src = "images/mist.png";
        document.body.style.background = 'url(https://brightpunjabexpress.com/wp-content/uploads/2020/11/foggy-weather.png)'
        document.querySelector('.card').style.background = 'linear-gradient(135deg,rgb(168, 187, 205),rgb(200, 200, 200));'
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
}
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
