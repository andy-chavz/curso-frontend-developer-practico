const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const menuHamburguesa = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector ('.product-detail-close');
const shoppingCartContainer = document.querySelector ('#shoppingCartContainer');
const cardsContainer = document.querySelector ('.cards-container');
const productDetailContainer = document.querySelector ('#productDetail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener ('click', toggleMobileMenu);
menuCarritoIcon.addEventListener ('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener ('click',closeProductDetailAside);

/*Esta funcion la hiciste para que se cierre el aside si picas el desktopmenu (dandole click al correo)*/
 function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
     
        if (!isAsideClosed){
            shoppingCartContainer.classList.add ('inactive');
        }       
    desktopMenu.classList.toggle('inactive');
 }

 /*Esta funcion la hiciste para que se cierre el carrito si picas el menuHamburger*/
 function toggleMobileMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
     
        if (!isAsideClosed){
            shoppingCartContainer.classList.add ('inactive');
        }
        closeProductDetailAside();
    mobileMenu.classList.toggle ('inactive');
 }
 /*Esta funcion la hiciste para que se cierre el menuHamburger si picas el carrito*/
 function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
     
        if (!isMobileMenuClosed){
            mobileMenu.classList.add ('inactive');
        }
        const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
     
        if (!isProductDetailClosed){
            productDetailContainer.classList.add ('inactive');
        }  
        const isDesktopMenuClosed = desktopMenu.classList.contains ('inactive');

        if (!isDesktopMenuClosed) {
            desktopMenu.classList.add('inactive');
        }        


        shoppingCartContainer.classList.toggle ('inactive');

    }
function openProductDetailAside (){
    shoppingCartContainer.classList.add ('inactive');
    productDetailContainer.classList.remove ('inactive');
}
function closeProductDetailAside (){
    productDetailContainer.classList.add ('inactive');
}

    const productList = [];
    productList.push ({
        name: 'Serum facial',
        price: 700,
        image: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });
    productList.push ({
        name: 'Red lip stick',
        price: 580,
        image:"https://images.pexels.com/photos/90297/pexels-photo-90297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    });
    productList.push ({
        name: 'Perfum',
        price: 1700,
        image:"https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    });
    productList.push ({
        name: 'Skin-care set',
        price: 1200,
        image:"https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    });
    productList.push ({
        name: 'Bronzer',
        price: 350,
        image:"https://images.pexels.com/photos/354962/pexels-photo-354962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    });
    productList.push ({
        name: 'Hidratante facial',
        price: 280,
        image:"https://images.pexels.com/photos/6621355/pexels-photo-6621355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    });
    
 /* 
    ?Así se ve lo que quieres maquetar en JS pero hecho en HTML
     <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
      <div>
        <p>$120,00</p>
        <p>Bike</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div> */

//!Con la función vas a maquetar en JS lo que esta arriba en tu HTML original
function renderProducts (arr){
    for (product of arr){
        const productCard = document.createElement('div');//* creaste el primer div que contiene la estructura de la card
        productCard.classList.add ('product-card');//* le añadiste la clase product-card
 
        const productImg = document.createElement ('img'); //* creaste la imagen
        productImg.setAttribute ('src',product.image); //* Al atributo imagen le diste el valor de product.image de tu arreglo anterior.
        productImg.addEventListener('click', openProductDetailAside);
 
        const productInfo = document.createElement ('div');//*Creaste el segundo div que contiene la info de la card es decir precio y nombre del producto
        productInfo.classList.add ('product-info'); //* le pusiste la clase product-info
 
        const productInfoDiv = document.createElement ('div'); //* este es el div que contiene el precio y la descripcion
        const productPrice = document.createElement ('p'); //* parrafo de precio
        productPrice.innerText = '$' + product.price;//*creaste el valor del precio concatenando el signo de pesos con el valor de product.price
        const productName = document.createElement ('p'); //* parrafo de nombre del producto
        productName.innerText = product.name;//* el nombre de producto que debe aparecer va ser el que este en product.name
 
        //! Metiste dentro de el div product info el precio y el nombre (como hijos del div de product info)
         productInfoDiv.appendChild (productPrice); 
         productInfoDiv.appendChild (productName);
 
 
        const productInfoFigure = document.createElement ('figure'); //*Creaste el contenedor figure donde va la imagen del carrito
        const productImgCart = document.createElement ('img'); //* imagen del carrito
        productImgCart.setAttribute ('src', './icons/bt_add_to_cart.svg'); //* le pusiste de atributo el url donde se guarda la imagen
 
        productInfoFigure.appendChild (productImgCart); //* Metiste la imagen como hijo de la figure

       //! Metiste la info del div (que tiene precio y nombre) y el contenedor de la imagen dentro del div que contiene toda la info de la card (product-info)
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);   
 
        //! Al div que contiene toda la card (product-card) le pusiste de hijo la imagen y la info del producto
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        //* Por último al div contenedor de todas las tarjetas (cards-container) le pones de hijo el div con la estructura de toda la card (product-card)
        cardsContainer.appendChild (productCard);
 
     } 

}
renderProducts(productList);





    

       
    
    
   
 
 
 