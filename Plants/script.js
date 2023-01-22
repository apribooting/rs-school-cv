(function () {
    const burgerItem = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.menu');
    burgerItem.addEventListener("click", () => {
       burgerMenu.classList.toggle("burger_menu_active");  
    });
}()); 

(function () {
    const main = document.querySelector('.main');
    const burgerMenu = document.querySelector('.menu');
    main.addEventListener("click", () => {
       burgerMenu.classList.toggle("burger_menu_active");  
    });
}()); 