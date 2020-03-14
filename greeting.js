const form = document.querySelector(".js-form");
const todoFORM = document.querySelector(".js-toDoForm") // change
const input = document.querySelector(".input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
SHOWING_ON = 'showing'; 
NOSHOWING = 'not_showing' // change

function saveName(text){
    localStorage.setItem(USER_LS, text); // currentUser : currentValue 형식
}
function handleSubmit(event){
    event.preventDefault(); // default 기능을 무력화 시킴
    const currentValue = input.value; // 방금 input form 안에 작성한 내용 담음
    paingGreeting(currentValue);
    saveName(currentValue); // local storage에 저장하는 함수 호출

}
function askForName(){
    todoFORM.classList.add(NOSHOWING); // change
    form.classList.add(SHOWING_ON); // form 이 display: block 이 된다
    form.addEventListener("submit", handleSubmit); // form 작성후 엔터치면(submit) 함수호출

}
function paingGreeting(text){
    const calendar = new Date();
    const time = calendar.getHours();
    // user 등록이 되어 있을 때
    todoFORM.classList.remove(NOSHOWING); // change

    form.classList.remove(SHOWING_ON); // form 이 display : none 으로 된다
    greeting.classList.add(SHOWING_ON); // greeting 이 display : block 으로 된다
    if( 5<= time && time <=11 ){
        greeting.innerText = `Good morning, ${text}.`; // hello + currentUser 출력
    }
    else if(11< time && time <=17){
        greeting.innerText = `Good afternoon, ${text}.`; // hello + currentUser 출력
    }
    else{
        greeting.innerText = `Good evening, ${text}.`; // hello + currentUser 출력

    }
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // user 등록이 안되어 있을 경우
        askForName();

    }else{ 
        // user로 등록이 되어있을 경우 currentUser를 파라미터로 받는 함수 호출
        paingGreeting(currentUser);
    }
}

function init(){
    loadName(); // loadName 호출

}
init();