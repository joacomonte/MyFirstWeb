
let ws = new WebSocket('wss://stream.binance.com:9443/ws/lunausdt@trade');
let stockPriceElement = document.getElementById('lunaprice');

ws.onmessage = (event) =>{
    let stockObjetct = JSON.parse(event.data);
    stockPriceElement.innerText = parseFloat(stockObjetct.p).toFixed(2);
}



const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => 
{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);

//show active menu when scrolling

const hightlightMenu = () => 
{
    const elem = document.querySelector('highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY

    if (window.innerWidth >850 && scrollPos < 600)
    {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }else if (window.innerWidth >850 && scrollPos < 1400)
    {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    }else if (window.innerWidth >850 && scrollPos < 2345)
    {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }

    if((elem && window.innerWidth <850 && scrollPos < 600) || elem)
    {
        elem.classList.remove('highlight');
    }
}


window.addEventListener('scroll', hightlightMenu);
window.addEventListener('click', hightlightMenu);
