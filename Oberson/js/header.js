let mainLogo = document.getElementById('mainLogo');
let menu = document.getElementById('realMenu');
let navbar = document.getElementById('navbar');
const sticky = document.getElementById('menu').offsetTop;
let bg = document.getElementById('background');
let body = document.getElementById('root');
let gradientText = document.getElementById('gradientText');
let secondLogo = document.getElementById('secondLogo');


window.addEventListener('load', function () {
    scrollHeader();
    gradientTextWitdh();
})
window.addEventListener('scroll', function () {
    scrollHeader();
    secondLogoScroll();
})
window.onresize = function () {
    gradientTextWitdh();
};


function scrollHeader() {
    let value = window.pageYOffset;
    let downArrow = document.getElementById('downArrow');
    let sticky2 = document.getElementById('menu');
    if (window.innerWidth > 990) {
        if (window.pageYOffset >= sticky) {
            sticky2.style.position = "fixed";
            sticky2.style.top = "0";
            navbar.classList.add('sticky');
            downArrow.style.opacity = 1 - sticky * 0.003;
            if (bg.clientWidth > 2200 && bg.clientHeight > 1460) {
                bg.style.top = "-" + sticky * 1.65 + "px";
                gradientText.style.top = (sticky + 90) + sticky * 0.60 + "px";
                gradientText.style.width = "inherit";
            }
            else if (bg.clientHeight < 650) {
                bg.style.top = "-" + sticky * 1.25 + "px";
                gradientText.style.top = (sticky + 90) + sticky * 0.1 + "px";
                gradientText.style.width = 649 - sticky * 0.7 + "px";
                secondLogo.style.top = "50px";
            }
            else if (bg.clientHeight < 735) {
                bg.style.top = "-" + sticky * 1.37 + "px";
                gradientText.style.top = (sticky + 90) + sticky * 0.25 + "px";
                gradientText.style.width = 649 - sticky * 0.7 + "px";
                secondLogo.style.top = "50px";
            }
            else if (bg.clientHeight < 830) {
                bg.style.top = "-" + sticky * 1.45 + "px";
                gradientText.style.top = (sticky + 90) + sticky * 0.32 + "px";
                gradientText.style.width = 649 - sticky * 0.35 + "px";
            }
            else if (bg.clientHeight > 1150) {
                bg.style.top = "-" + sticky * 1.6 + "px";
                gradientText.style.top = (sticky + 90) + sticky * 0.55 + "px";
                gradientText.style.width = 649 - sticky * 0.4 + "px";
            }
            else {
                // sticky2.style.position= "fixed";
                // sticky2.style.top = "0";
                // navbar.classList.add('sticky');
                bg.style.top = "-" + sticky * 1.5 + "px";
                gradientText.style.top = (sticky + 90) + sticky * 0.43 + "px";
                gradientText.style.width = 649 - sticky * 0.40 + "px";
                downArrow.style.opacity = 1 - sticky * 0.003;
            }
        }
        else {
            gradientText.style.width = 649 - value * 0.40 + "px";
            gradientText.style.top = (value + 90) + value * 0.47 + "px";
            navbar.classList.remove('sticky');
            bg.style.backgroundAttachment = "scroll";
            sticky2.style.position = "absolute";
            sticky2.style.top = "50%";
            downArrow.style.bottom = 20 + value * 0.5 + "px";
            downArrow.style.opacity = 1 - value * 0.003;
            // secondLogo.style.opacity = 0;
            if (bg.clientWidth > 2200 && bg.clientHeight > 1460) {
                bg.style.top = "-" + value * 1.65 + "px";
                gradientText.style.top = (sticky + 90) + value * 0.60 + "px";
                gradientText.style.width = "inherit";

            }
            else if (bg.clientHeight < 650) {
                bg.style.top = "-" + value * 1.25 + "px";
                gradientText.style.top = (sticky + 90) + value * 0.1 + "px";
                gradientText.style.width = 649 - value * 0.7 + "px";
            }
            else if (bg.clientHeight < 735) {
                bg.style.top = "-" + value * 1.37 + "px";
                gradientText.style.top = (sticky + 90) + value * 0.25 + "px";
                gradientText.style.width = 649 - value * 0.7 + "px";
            }
             else if (bg.clientHeight < 830) {
                bg.style.top = "-" + value * 1.45 + "px";
                gradientText.style.top = (sticky + 90) + value * 0.32 + "px";
                gradientText.style.width = 649 - value * 0.35 + "px";
            }
            else if (bg.clientHeight > 1150) {
                bg.style.top = "-" + value * 1.6 + "px";
                gradientText.style.top = (sticky + 90) + value * 0.55 + "px";
                gradientText.style.width = 649 - value * 0.4 + "px";
            }
            else {
                gradientText.style.top = (sticky + 90) + value * 0.43 + "px";
                gradientText.style.width = 649 - value * 0.40 + "px";
                bg.style.top = "-" + value * 1.5 + "px";
            }
            
        }
    }
}
function secondLogoScroll() {
    var value = window.pageYOffset;
    if (window.innerWidth > 990&& window.innerWidth <= 1200) {
        if (window.pageYOffset >= sticky - 50) {
            secondLogo.style.opacity = 0 + (value - 400) * 0.007;
            secondLogo.style.left = (bg.clientWidth-990)/2  + "px";
        }
        else {
            secondLogo.style.opacity = 0;
        }
    }
    else if(window.innerWidth > 1200 && window.innerWidth <= 1250){
        if (window.pageYOffset >= sticky - 50) {
            secondLogo.style.opacity = 0 + (value - 400) * 0.007;
            secondLogo.style.left = (bg.clientWidth-1200)/2  + "px";
            // secondLogo.style.left = "2%"
        }
        else {
            secondLogo.style.opacity = 0;
        }
    }
    else if(window.innerWidth > 1250){
        if (window.pageYOffset >= sticky - 50) {
            secondLogo.style.opacity = 0 + (value - 400) * 0.007;
            secondLogo.style.left = (bg.clientWidth-1250)/2  + "px";
            // secondLogo.style.left = "2%"
        }
        else {
            secondLogo.style.opacity = 0;
        }
    }
}

function gradientTextWitdh() {
    if (bg.clientHeight < 500 && bg.clientWidth < 990) {
        gradientText.style.width = "500px";
    }
    else if (bg.clientHeight < 500 && bg.clientWidth > 990) {
        gradientText.style.width = "649px"
    }
}
function showMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none"
    }
}

const observer = new ResizeObserver(entries => {
    const bodyElement = entries[0];
    if (bodyElement && bodyElement.contentRect.width <= 990) {
        menu.style.display = "none";
    }
    else if ((bodyElement && bodyElement.contentRect.width > 990)) {
        menu.style.display = "flex";
    }
})
observer.observe(body);


const activeLang = document.getElementById('activeLang');
const disabledLang = document.getElementById('disabledLang');
activeLang.style.backgroundImage = "url('images/triangle-down.png')";

activeLang.addEventListener('click', function () {
    changeLang();
})

function changeLang() {
    if (disabledLang.style.display == "none") {
        disabledLang.style.display = "list-item";
        disabledLang.style.opacity = "1";
        activeLang.style.backgroundImage = "url('images/triangle-up.png')";
    }
    else {
        disabledLang.style.display = "none"
        disabledLang.style.opacity = "0";
        activeLang.style.backgroundImage = "url('images/triangle-down.png')";
    }
}