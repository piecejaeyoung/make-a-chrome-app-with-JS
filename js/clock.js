const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`; // `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
}
getClock() // 시간을 즉시호출
setInterval(getClock, 1000); /// 1초마다 getClock 펑션 실행