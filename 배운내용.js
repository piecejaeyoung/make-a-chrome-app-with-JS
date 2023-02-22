

//constant

const tobuy = ["apple", "tomato", "pizza"];

console.log(tobuy);
tobuy.push("water");
console.log(tobuy[3]);
tobuy[2] = "burger";
console.log(tobuy[2]);



//Objects

const player = {
    name : "shim",
    points : 10,
    fat : false,

}

console.log(player)
player.name = "young"
console.log(player.name)
console.log(player.name, player.points)



//function 어떤 코드를 캡슐화해서 그걸 계속 반복해서 사용 

//1
function plus(){
    console.log(2+4);
}
plus();



// 2
function sayhello(nameOfPerson, age) {
    console.log("hello my name is "+nameOfPerson+" and i`m "+age+" years old")
}

sayhello("shim", 30);
sayhello("lee",15);
sayhello("young", 20);



function plus(a,b){    //여기서 a,b는 argument
    console.log(a,b);
}

plus(5, 232);
plus(34, 4545);

/// 계산기 만들기
const calculator = {
    add: function(a,b) {
    console.log(a+b);   
    },

    minus: function(a,b) {
        console.log(a-b);   
    },

    nanuki: function(a,b) {
        console.log(a/b);   
    },

    kobhagi: function(a,b) {
        console.log(a*b);   
        
    },

}

calculator.add(5,1);
calculator.minus(5,1);
calculator.nanuki(5,1);
calculator.kobhagi(5,1);


// return
const age = 36 ;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2 ;
}

const krage = calculateKrAge(age);
console.log(krage);

//
const calculator3 = {
    plus: function(a, b) {
    return a + b ; 
    },  

    minus: function(a, b) {
    return a - b ;   
    },

    devide: function(a, b) {
    return a / b ;   
    },

    times: function(a, b) {
    return a * b ;   
    },
};
const plusResult = calculator3.plus(2, 3);
const minusResult = calculator3.minus(plusResult, 3);
const devideResult = calculator3.devide(minusResult, 5);
const timesResult = calculator3.times(devideResult, 5);

///

// 
const age = parseInt(prompt("how old are you?"));

if(isNaN(age) || age<0) {
    console.log("please write a real positive number");
} else if( age < 18 ) {
    console.log("you are too young");
} else if( 18<= age && age <=50 ) {  // else if(18<= age && age <=50) --> 둘다 맞아야함 // else if(18 <= age || age <= 50)
    console.log("you can drink"); 
} else if(age === 100) { // 나이가 100일때 age === 100, 나이가 100이 아닐떄 age !== 100
    console.log("you are 100 years old");
} else if(age>50) {
    console.log("please don`t drink");
}

////
const title = document.querySelector(".hello h1"); // Helllo 란 class 내부에 있는 모든 h1을 가지고 올 수 있다는 것을 의미

function handleTitleClick(){  // 클릭하면 중괄호 안의 명령이 실행

    title.style.color = "red"    
    console.log("title was clicked")
}
title.addEventListener("click", handleTitleClick)


///////
const h1 = document.querySelector(".hello h1"); // Helllo 란 class 내부에 있는 모든 h1을 가지고 올 수 있다는 것을 의미

console.dir(h1)
function handleTitleClick(){
    h1.style.color = "red";
}
function handleMouseEnter(){
    h1.innerText = "mouse is here!";
}
function handleMouseLeave(){
    h1.innerText = "mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"; // document의 body, head, title만 적용가능
}
function handleWindowCopy(){
    alert("copier")
}
function handwindowOffline(){
    alert("SOS no WIFI")
}
function handwindowOnline(){
    alert("on WIFI")
}

h1.addEventListener("click", handleTitleClick) //= h1.onclick=handleTitleClick; 와 동일
h1.addEventListener("mouseenter", handleMouseEnter)
h1.addEventListener("mouseleave", handleMouseLeave)

window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handwindowOffline);
window.addEventListener("online", handwindowOnline);



// 일반적인 글자 색 변경 방법 //

const h1 = document.querySelector(".hello h1"); // Helllo 란 class 내부에 있는 모든 h1을 가지고 올 수 있다는 것을 의미

function handleTitleClick(){ // 일반적인 글자 색 변경 방법
  if(h1.style.color === "blue") {
        h1.style.color = "tomato";
 } else {
 h1.style.color ="blue";
 }
}

h1.addEventListener("click", handleTitleClick) //= h1.onclick=handleTitleClick; 와 동일


// 더 쉬운 코드로 글자 색 변경 방법 //

const h1 = document.querySelector(".hello h1"); // Helllo 란 class 내부에 있는 모든 h1을 가지고 올 수 있다는 것을 의미

function handleTitleClick() { // 일반적인 글자 색 변경 방법
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick) //= h1.onclick=handleTitleClick; 와 동일



// 클릭시 글자 색상 변경 가장 간단한 명령 - toggle

const h1 = document.querySelector(".hello h1"); // Helllo 란 class 내부에 있는 모든 h1을 가지고 올 수 있다는 것을 의미

function handleTitleClick() {
    const clickedClass = "clicked";
    h1.classList.toggle(clickedClass);
}
h1.addEventListener("click", handleTitleClick);


