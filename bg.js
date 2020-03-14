const body = document.querySelector("body");

const IMG_NUM = 10;

// function handleImgLoad(){
//     console.log('finished loading');
// }

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image); 
    // 만약 api 를 이용할 경우에는 주석을 추가한다.
    // image.addEventListener("loadend",handleImgLoad);
}
function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUM); 
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}
init();