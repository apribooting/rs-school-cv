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






