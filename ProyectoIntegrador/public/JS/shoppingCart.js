const buttonCart = document.querySelector(".main-header__cart-button-container");
const shoppingCartOverlay = document.querySelector(".shopping-cart__container")
const shoppingCart = document.querySelector(".shopping-cart");
const cartCloseButton = document.querySelector(".shopping-cart__close-window");
//Abre el carro cuando se presiona el boton de carrito
buttonCart.addEventListener("click", function() {
    shoppingCartOverlay.classList.remove("display-none");
    
});
//Cierra el carro cuando se presiona la x
cartCloseButton.addEventListener("click", function(){
    shoppingCartOverlay.classList.add("display-none");
    
});
//Cierra el carro cuando se presiona por fuera del carrito
shoppingCartOverlay.addEventListener("click", function(e){
    if(!shoppingCart.contains(e.target)){
        shoppingCartOverlay.classList.add("display-none");
    }
});



