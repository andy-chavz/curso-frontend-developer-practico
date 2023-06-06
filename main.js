const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const menuHamburguesa = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const aside = document.querySelector ('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener ('click', toggleMobileMenu);
menuCarritoIcon.addEventListener ('click', toggleCarritoAside);
/*Esta funcion la hiciste para que se cierre el aside si picas el desktopmenu (dandole click al correo)*/
 function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
     
        if (!isAsideClosed){
            aside.classList.add ('inactive');
        }
    desktopMenu.classList.toggle('inactive');
 }
 /*Esta funcion la hiciste para que se cierre el carrito si picas el menuHamburger*/
 function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
     
        if (!isAsideClosed){
            aside.classList.add ('inactive');
        }
    mobileMenu.classList.toggle ('inactive');
 }
 /*Esta funcion la hiciste para que se cierre el menuHamburger si picas el carrito*/
 function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
     
        if (!isMobileMenuClosed){
            mobileMenu.classList.add ('inactive');
        }
    aside.classList.toggle ('inactive');
    }
       
    
    
   
 
 
 