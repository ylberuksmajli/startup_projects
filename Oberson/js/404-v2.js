var bg = document.getElementById('background');
var title = document.getElementById('title');


const observer = new ResizeObserver(entries =>{
    const bodyElement = entries[0];
    if(bodyElement&&bodyElement.contentRect.width <= 767){
        title.innerHTML="Page not found!"
    }
    else {
        title.innerHTML="Oops, sorry we cant't find that page!"
    }
})
observer.observe(bg);