
var bg = document.getElementById('background');
var menu = document.getElementById('realMenu');


function showMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none"
    }
}
const observer = new ResizeObserver(entries =>{
    const bodyElement = entries[0];
    if(bodyElement&&bodyElement.contentRect.width <= 990){
        menu.style.display = "none";
    }
    else if((bodyElement&&bodyElement.contentRect.width > 990 )){
        menu.style.display = "flex";
    }
})
observer.observe(bg);

const activeLang = document.getElementById('activeLang');
const disabledLang = document.getElementById('disabledLang');
activeLang.style.backgroundImage = "url('images/triangle-down.png')";

activeLang.addEventListener('click', function(){
    console.log('hello')
    changeLang();
})

function changeLang() {
    if (disabledLang.style.display == "none") {
        disabledLang.style.display = "list-item";
        disabledLang.style.opacity="1";
        activeLang.style.backgroundImage = "url('images/triangle-up.png')";
    }
    else {
        disabledLang.style.display = "none"
        disabledLang.style.opacity="0";
        activeLang.style.backgroundImage = "url('images/triangle-down.png')";
    }
}