console.log("1. 24/24 \n 2. 24/24 \n 3. 15/15 \n 4. Нету крестика, меню не скрывается при нажатии на ссылки, скрывается плавно, 16/22 \n Total 79/85 ");
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

