const avocat_profiles = document.querySelectorAll('.avocat_profile');
const col = document.getElementById('col');

avocat_profiles.forEach(avocat => {
    avocat.addEventListener('click',() =>{

        //Reset margin-bottom
        avocat_profiles.forEach(el =>{el.style.marginBottom = 0;});


        //overlays
        const overlays = document.querySelectorAll('.overlay');
        overlays.forEach(overlay => {
            overlay.style.opacity = 0;
            overlay.style.width = 0;
        })
        const avocat_overlay = avocat.childNodes[1].childNodes[1].childNodes[5];
        avocat_overlay.style.opacity=1;
        avocat_overlay.style.zIndex = "11";
        avocat_overlay.style.width = '100%';
        //overlays


        //Avocat-content
        const all_avocats_content = document.querySelectorAll('.content');
        all_avocats_content.forEach(all_avocat_content =>{
            all_avocat_content.style.display="none";
        })
        avocat_content = avocat.childNodes[5];
        avocat_content.style.display = "flex";
        avocat_content.setAttribute('open',"");
        //Avocat-contents


        const first = avocat.childNodes[5].childNodes[1];
        const second = avocat.childNodes[5].childNodes[3];
        const hidden = avocat.childNodes[5].childNodes[3].childNodes[1];
        show_more_btn = avocat.childNodes[5].childNodes[3].childNodes[3];
        show_less_btn = avocat.childNodes[5].childNodes[3].childNodes[5];

        //Hidden content(third) - always the same height
        hidden.style.height = '390px';
        if(hidden.style.height = '390px'){
            show_more_btn.style.display = 'block';
            show_less_btn.style.display = 'none';
        };
        //Hidden content(third) - always the same height


        // show more/show less--avocat popup
        show_more_btn?.addEventListener('click', function (event) {
            event.stopPropagation();
            showfun();
        });
        show_less_btn?.addEventListener('click', function (event) {
            event.stopPropagation();
            lessFun();
        });
        function showfun() {
            hidden.style.height = hidden.scrollHeight + "px";
            show_more_btn.style.display = 'none';
            show_less_btn.style.display = 'block';
            setTimeout(avocat_margin_bottom,200);
            
        };
        function lessFun() {
            hidden.style.height = "390px";
            show_more_btn.style.display = 'block';
            show_less_btn.style.display = 'none';
            setTimeout(avocat_margin_bottom,200);
        };
        // show more/show less--avocat popup



        //Remove parent event.listener
        first.addEventListener('click',(event)=>{
            event.stopPropagation();
        });
        second.addEventListener('click',(event)=>{
            event.stopPropagation();
        });
        hidden.addEventListener('click',(event)=>{
            event.stopPropagation();
        });
        avocat_content.addEventListener('click',(event)=>{
            event.stopPropagation();
        });
        avocat_overlay.addEventListener('click',(event)=>{
            event.stopPropagation();
            setTimeout(scroll,50);
        });
        //Remove parent event.listener



        function avocat_margin_bottom(){
            avocat.style.marginBottom = avocat_content.clientHeight + "px";
        }
        avocat_margin_bottom();


        function scroll(){
            if(bg.clientWidth>990){
                window.scrollTo({
                    top:(avocat_content.offsetTop+col.offsetTop)-(bg?.clientHeight+bg?.offsetTop)-avocat_overlay.clientHeight,
                    behavior:"smooth"
                });
            }else{
                window.scrollTo({
                    top:(avocat_content.offsetTop+col.offsetTop)-avocat_overlay.clientHeight,
                    behavior:"smooth"
                })
            }
        }
        setTimeout(scroll,300);

        //Remove buttons if not needed 
        if(hidden.scrollHeight<=hidden.clientHeight+18){
            show_more_btn.style.display='none';
            show_less_btn.style.display='none';
        }
    });
})