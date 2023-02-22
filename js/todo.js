const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos"

let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // toDos array를 localstorage에 저장.
} //JSON.stringify 는 javascript object나 array 또는 어떤 코드건 간에 string으로 만들어준다
// string으로 만들어 주지 않으면 1을 저장하고 1을 저장하면 새로고침됨. string으로 해야 중복 입력된 값도 저장됨

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 클릭했던 li의 id를 갖고 있는 ToDo를 지움 -> 내가 클릭한 li.id와 다른 toDo는 유지됨 //
    saveToDos()          // 위 toDo는 toDos DB에 있는 요소 중 하나.
}                        //parseInt => 문자열을 숫자로 바꿔줌

function paintToDo(newToDo) {
    const li = document.createElement("li"); // li을 HTML에서가 아닌 js에서 만들고 싶음
    li.id = newToDo.id;
    const span = document.createElement("span"); // span을 HTML에서가 아닌 js에서 만들고 싶음
    span.innerText = newToDo.text // span의 텍스트는 handleToDoSubmit에서 온 newToDo텍스트가 됨
    const button = document.createElement("button");// button을 HTML에서가 아닌 js에서 만들고 싶음
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span) // li는 span이라는 자식을 가지게 됨(span을 li 내부에 집어넣음)
    li.append(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); // 새로고침 방지
    const newToDo = toDoInput.value; // input.value를 새로운 변수(newTodo)에 복사
    toDoInput.value = ""; // input.value를 비우기(비운다고 하더라도 nowToDo가 비워지는것이 아님
    const newToDoObj = { // newTodo 
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj); // newToDoObj 를 toDos array에 push
    paintToDo(newToDoObj); // 화면에 newToDoObj를 나타냄
    saveToDos(); // toDos array를 localstorage에 저장하는 펑션 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // stringify(toDos)에서 얻은 string을 가지고 string이 아닌 javascript에서 사용 가능한 object로 만듦
    toDos = parsedToDos; // localStroage에 저장된 이전의 toDo 데이터    
    parsedToDos.forEach(paintToDo);
}