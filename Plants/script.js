console.log("1. 24/24 \n 2. 24/24 \n 3. 15/15 \n 4. Нету крестика, меню не скрывается при нажатии на ссылки, скрывается плавно, 16/22 \n Total 79/85 ");
(function () {
    const burgerItem = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.menu');
    burgerItem.addEventListener("click", () => {
       burgerMenu.classList.toggle("burger_menu_active");  
    });
}()); 

(function () {
    const list = document.querySelector('.list');
    const burgerMenu = document.querySelector('.menu');
    list.addEventListener("click", () => {
       burgerMenu.classList.toggle("burger_menu_active");  
    });
}());

(function () {
    const list4 = document.querySelector('.list4');
    const burgerMenu = document.querySelector('.menu');
    list4.addEventListener("click", () => {
       burgerMenu.classList.toggle("burger_menu_active");  
    });
}()); 

(function () {
    const list1 = document.querySelector('.list1');
    const burgerMenu = document.querySelector('.menu');
    list1.addEventListener("click", () => {
       burgerMenu.classList.toggle("burger_menu_active");  
    });
}()); 

(function () {
    const list2 = document.querySelector('.list2');
    const burgerMenu = document.querySelector('.menu');
    list2.addEventListener("click", () => {
       burgerMenu.classList.toggle("burger_menu_active");  
    });
}()); 

(function () {
    const list3 = document.querySelector('.list3');
    const burgerMenu = document.querySelector('.menu');
    list3.addEventListener("click", () => {
       burgerMenu.classList.toggle("burger_menu_active");  
    });
}()); 


(function () {
    const ok = document.querySelector('.ok');
    const burgerMenu = document.querySelector('.menu');
    ok.addEventListener("click", () => {
       burgerMenu.classList.remove("burger_menu_active");  
    });
}());

(function () {
    const burger_ok = document.querySelector('.burger_ok');
    const burgerItem = document.querySelector('.burger');
    burgerItem.addEventListener("click", () => {
        burgerItem.classList.toggle("burger_ok");
    });
}());

(function () {
    const ok = document.querySelector('.ok');
    const burgerItem = document.querySelector('.burger');
    const burger_ok = document.querySelector('.burger_ok');
    ok.addEventListener("click", () => {
        burgerItem.classList.remove("burger_ok");
    });
}());

(function () {
    const list1 = document.querySelector('.list1');
    const burgerItem = document.querySelector('.burger');
    const burger_ok = document.querySelector('.burger_ok');
    list1.addEventListener("click", () => {
       burgerItem.classList.toggle("burger_ok");  
    });
}()); 

(function () {
    const list2 = document.querySelector('.list2');
    const burgerItem = document.querySelector('.burger');
    const burger_ok = document.querySelector('.burger_ok');
    list2.addEventListener("click", () => {
       burgerItem.classList.toggle("burger_ok");  
    });
}()); 

(function () {
    const list3 = document.querySelector('.list3');
    const burgerItem = document.querySelector('.burger');
    const burger_ok = document.querySelector('.burger_ok');
    list3.addEventListener("click", () => {
       burgerItem.classList.toggle("burger_ok");  
    });
}()); 

(function () {
    const list4 = document.querySelector('.list4');
    const burgerItem = document.querySelector('.burger');
    const burger_ok = document.querySelector('.burger_ok');
    list4.addEventListener("click", () => {
       burgerItem.classList.toggle("burger_ok");  
    });
}()); 

(function () {
    const list = document.querySelector('.list');
    const burgerItem = document.querySelector('.burger');
    const burger_ok = document.querySelector('.burger_ok');
    list.addEventListener("click", () => {
       burgerItem.classList.toggle("burger_ok");  
    });
}());


(function () {
    const garden = document.querySelectorAll('.card_garden');
    const planting = document.querySelectorAll('.card_planting');
    const lawn = document.querySelector('.card_lawn')
    const garden_btn = document.querySelector('.button_gardens');
    const planting_btn = document.querySelector('.button_planting');
    const lawn_btn = document.querySelector('.button_lawn');
    const blur = document.querySelector(".service_card_active");
    const service_button_active = document.querySelector('.service_button_js')
    garden_btn.addEventListener("click", () => {
        garden[0].classList.toggle("service_card_active");
        garden[1].classList.toggle("service_card_active");
        garden_btn.classList.toggle("service_button_js");
    });
    planting_btn.addEventListener("click", () => {
        planting[0].classList.toggle("service_card_active");
        planting[1].classList.toggle("service_card_active");
        planting[2].classList.toggle("service_card_active");
        planting_btn.classList.toggle("service_button_js");
    });
    lawn_btn.addEventListener("click", () => {
        lawn.classList.toggle("service_card_active");
        lawn_btn.classList.toggle("service_button_js");
    });
}());







