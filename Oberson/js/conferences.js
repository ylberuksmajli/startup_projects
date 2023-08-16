let dropButton = document.getElementById('dropButton');
dropButton.addEventListener('click',()=>{
    const dropList = dropButton.nextElementSibling;
    dropButton.classList.toggle('dropListHide');
    if(dropButton.classList.contains('dropListHide')){
        dropList.style.height = 0
    }
    else{
        dropList.style.height = dropList.scrollHeight + "px";
        if(window.innerWidth>990){
            window.scrollTo({
                top:dropList.offsetTop-(bg.clientHeight+bg.offsetTop)-90,
                behavior:"smooth"
            });
        }else{
            window.scrollTo({
                top:dropButton.offsetTop-20,
                behavior:"smooth"
        });
        }
    }
});
