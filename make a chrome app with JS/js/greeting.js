const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 이 명령어를 통해 페이지가 새로고침 되는 동작(브라우저의 기본 동작)을 막고 있음
    loginForm.classList.add(HIDDEN_CLASSNAME) // 이 명령어를 통해 form과 h1 모두 hidden이라는 class를 수행하게함(숨겨짐). hidden class는 CSS에 있음. 
    const inputtedUsernameValue = loginInput.value; // loginInput 값을 변수(username)로 지정 
    localStorage.setItem(USERNAME_KEY, inputtedUsernameValue); // 
    paintGreetings(inputtedUsernameValue); //input에 적었던 값을 인자로 넣어주고 greeting 안에 텍스트를 넣어줌
}

function paintGreetings(username) {
    greeting.innerText = `hello ${username}`; // 비어있는 h1인 greeting을 가져다가 hello username 이라는 텍스트를 넣어줌
    greeting.classList.remove(HIDDEN_CLASSNAME); //이 명령어를 통해 innerText가 숨겨지지 않게 h1에서 hidden class가 remove 됨. 이에 따라 hidden 명령어는 form 에만 적용됨
}

const savedUserName = localStorage.getItem(USERNAME_KEY); // 만약 유저정보가 localstorage에 없다면 localstorage는 null 값을 반환

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 유저정보가 없으면 hidden이라는 class를 지워줌으로 써 로그인 창이 생김
    loginForm.addEventListener("submit", onLoginSubmit) // form은 submit을 기다림 -> submit 이벤트가 발생하면 onLoginSubmit 펑션 실행

} else {
    paintGreetings(savedUserName);

}

