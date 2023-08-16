// let buttons = document.querySelectorAll('.dropButton');
// buttons.forEach(button=>{
//     button.addEventListener('click',()=>{
//         const dropList = button.nextElementSibling;
//         button.classList.toggle('dropListShow');
        
//         if(button.classList.contains('dropListShow')){
//             dropList.style.height = dropList.scrollHeight + "px" ;
//             if(window.innerWidth>990){
//                 window.scrollTo({
//                     top:dropList.offsetTop-(bg.clientHeight+bg.offsetTop)-90,
//                     behavior:"smooth"
//                 });
//             }else{
//                 window.scrollTo({
//                     top:button.offsetTop-20,
//                     behavior:"smooth"
//             })
//             }
//         }
//         else{
//             dropList.style.height = 0
//         }
//     })
// })

let dropButton = document.querySelectorAll('.dropButton');
console.log(dropButton)
dropButton.forEach(dropElement => {
    dropElement.addEventListener('click', () => {
        let bg = document.getElementById('background');
        const dropList = dropElement.nextElementSibling;
        dropList.style.height = 0
        if (!dropElement.classList.contains('dropListShow')) {
            dropElement.classList.toggle('dropListShow');
            dropList.style.height = dropList.scrollHeight + "px";
            if (window.innerWidth > 990) {
                window.scrollTo({
                    top: dropList.offsetTop - (bg?.clientHeight + bg?.offsetTop) - 20,
                    behavior: "smooth"
                });
            } else {
                window.scrollTo({
                    top: dropElement.offsetTop - 20,
                    behavior: "smooth"
                })
            }
        } else {
            dropElement.classList.toggle('dropListShow');
        }
    })
})
