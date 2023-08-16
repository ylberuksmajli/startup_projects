var menu = document.getElementById('realMenu');
var navbar = document.getElementById('navbar');
var sticky = document.getElementById('menu').offsetTop;
var bg = document.getElementById('background');
var body = document.getElementById('root');

function showMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
}
const observer = new ResizeObserver(entries => {
    const bodyElement = entries[0];
    if (bodyElement && bodyElement.contentRect.width <= 990) {
        menu.style.display = "none";
    }
    else if (bodyElement && bodyElement.contentRect.width > 990) {
        menu.style.display = "flex";
    }
})
observer.observe(body);


const map1 = document.getElementById('map');
const activeLang = document.getElementById('activeLang');
const disabledLang = document.getElementById('disabledLang');
activeLang.style.backgroundImage = "url('images/triangle-down.png')";

activeLang.addEventListener('click', function () {
    changeLang();
})
//   function for language changer
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



function initMap() {

    if (window.innerWidth > 991) {
        gmap_zoom = 9;
        gmap_center = new google.maps.LatLng(46.602440, 6.609986);
        marker = 'images/map-marker.png';
        var address1 = new google.maps.LatLng(46.007964, 6.175171); //Genève
        var address2 = new google.maps.LatLng(46.318632, 6.661547); //Lausanne
        var address3 = new google.maps.LatLng(46.800173, 6.949460); //Neuchâtel
        var address4 = new google.maps.LatLng(46.031595, 7.400000); //Sion
    }
    else if(window.innerWidth > 768 && window.innerWidth<=990){
        gmap_zoom = 9;
        gmap_center = new google.maps.LatLng(46.602440, 6.609986);
        marker = 'images/marker-mobile.png';
        var address1 = new google.maps.LatLng(46.197964, 6.145171); //Genève
        var address2 = new google.maps.LatLng(46.518632, 6.631547); //Lausanne
        var address3 = new google.maps.LatLng(46.990173, 6.929460); //Neuchâtel
        var address4 = new google.maps.LatLng(46.231595, 7.361778); //Sion
    }
    else if(window.innerWidth <= 768){
        gmap_zoom = 8;
        gmap_center = new google.maps.LatLng(46.602440, 6.609986);
        marker = 'images/marker-mobile.png';
        var address1 = new google.maps.LatLng(46.197964, 6.145171); //Genève
        var address2 = new google.maps.LatLng(46.518632, 6.631547); //Lausanne
        var address3 = new google.maps.LatLng(46.990173, 6.929460); //Neuchâtel
        var address4 = new google.maps.LatLng(46.231595, 7.361778); //Sion
    }
    var mapProp = {
        mapId: 'f4fb6dd27213cc55',
        center: gmap_center,
        zoom: gmap_zoom,
        maxZoom: gmap_zoom,
        minZoom: gmap_zoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        mapTypeControl: false,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        // styles: stylesArray,
    };

    var map = new google.maps.Map(map1, mapProp);

    var Geneve = new google.maps.Marker({
        position: address1,
        zIndex: 9999,
        icon: marker,
    });
    Geneve.setMap(map);

    var Lausanne = new google.maps.Marker({
        position: address2,
        zIndex: 9999,
        icon: marker,
    });
    Lausanne.setMap(map);

    var Neuchatel = new google.maps.Marker({
        position: address3,
        zIndex: 9999,
        icon: marker,
    });
    Neuchatel.setMap(map);

    var Sion = new google.maps.Marker({
        position: address4,
        zIndex: 9999,
        icon: marker,
    });
    Sion.setMap(map);

    //header
    const Geneve_side = document.getElementById('Geneve');
    const Neuchatel_side = document.getElementById('Neuchatel');
    const Sion_side = document.getElementById('Sion');
    const Lausanne_side = document.getElementById('Lausanne');

    const sidepanels = document.querySelectorAll('.side-Panel');
    const overlay = document.getElementById('overlay');
    //Footer (Media-Queries)
    const Geneve_side1 = document.getElementById('Geneve1');
    const Neuchatel_side1 = document.getElementById('Neuchatel1');
    const Sion_side1 = document.getElementById('Sion1');
    const Lausanne_side1 = document.getElementById('Lausanne1');

    // const sidepanels1 = document.querySelectorAll('.side-Panel1');
    const footerShowContent = document.getElementById('footerShowContent')


    Geneve.addListener('click',()=>{
        if(window.innerWidth <= 990) {
                footerShowContent.innerHTML="";
                footerShowContent.appendChild(Geneve_side1);
                Geneve_side1.scrollIntoView();
        }else{
                    Geneve_side.style.left = "0";
                    overlay.style.zIndex = "5";
        }
    });
    Lausanne.addListener('click',()=>{
        if(window.innerWidth <=990 ){
                footerShowContent.innerHTML="";
                footerShowContent.appendChild(Lausanne_side1);
                Lausanne_side1.scrollIntoView();
        ;
        }else{
                Lausanne_side.style.left = "0";
                overlay.style.zIndex = "5";
        ;
        }
    })
    Neuchatel.addListener('click',()=>{
        if(window.innerWidth <= 990){
                footerShowContent.innerHTML="";
                footerShowContent.appendChild(Neuchatel_side1);
                Neuchatel_side1.scrollIntoView();
        }
        else{
                Neuchatel_side.style.left= "0";
                overlay.style.zIndex = "5";
        }
    })
    Sion.addListener('click',()=>{
        if(window.innerWidth <=990 ){
                footerShowContent.innerHTML="";
                footerShowContent.appendChild(Sion_side1);
                Sion_side1.scrollIntoView();
        }else{
                Sion_side.style.left = "0";
                overlay.style.zIndex = "5";
        }
    })


        overlay.addEventListener('click',()=>{
            sidepanels.forEach(sidepanel =>sidepanel.style.left = "-350px");
            overlay.style.zIndex = "-1";
        })
};