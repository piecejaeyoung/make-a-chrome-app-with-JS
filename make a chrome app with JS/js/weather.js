const API_KEY = "0e9799a46aa54748b3329b59f732995f";

function onGeoOk(position) {
    const latitude = position.coords.latitude; // 위도
    const longitude = position.coords.longitude; // 경도
    console.log("you live in", latitude, longitude);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=35.143581&lon=128.4815205&appid=0e9799a46aa54748b3329b59f732995f&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = `Location: ${data.name}`
            weather.innerText = `Weather: ${data.weather[0].main} / Temp: ${data.main.temp}`

        });
}

function onGeoError() {
    alert("cant find you. no weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) // 브라우저에서 위치등 정보를 준다. 위치확인성공(onGeoOk)과 실패(onGeoError) 함수만 지정 해주면 된다
