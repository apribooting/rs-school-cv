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

(function () {
    const basics_sec = document.querySelector('.basics');
    const burger_open = document.querySelector('.basics_opened');
    const pro_care_sec = document.querySelector('.pro_care');
    const circle_pro_care = document.querySelector('.price_circle_pro_care');
    const circle_standard = document.querySelector('.price_circle_standard');  
    const circle_basics = document.querySelector('.price_circle_bacics'); 
    const standard_sec = document.querySelector('.standard');
    const pudge = document.querySelectorAll('.pudge');
    basics_sec.addEventListener("click", () => {
       basics_sec.classList.toggle("basics_opened");
       standard_sec.classList.remove("basics_opened");
       pro_care_sec.classList.remove("basics_opened");
       circle_basics.classList.toggle("price_circle_active")
       circle_standard.classList.remove("price_circle_active")
       circle_pro_care.classList.remove("price_circle_active")
       pudge[0].classList.toggle("pudge");
       pudge[1].classList.toggle("pudge");
       pudge[2].classList.toggle("pudge");
       pudge[3].classList.add("pudge");
       pudge[4].classList.add("pudge");
       pudge[5].classList.add("pudge");
       pudge[6].classList.add("pudge");
       pudge[7].classList.add("pudge");
       pudge[8].classList.add("pudge"); 

    });
}());

(function () {
    const standard_sec = document.querySelector('.standard');
    const burger_open = document.querySelector('.basics_opened');
    const pro_care_sec = document.querySelector('.pro_care');
    const basics_sec = document.querySelector('.basics');
    const circle_basics = document.querySelector('.price_circle_bacics'); 
    const circle_standard = document.querySelector('.price_circle_standard');
    const circle_pro_care = document.querySelector('.price_circle_pro_care');
    const pudge = document.querySelectorAll('.pudge');
    standard_sec.addEventListener("click", () => {
       standard_sec.classList.toggle("basics_opened");
       basics_sec.classList.remove("basics_opened");
       pro_care_sec.classList.remove("basics_opened");
       circle_standard.classList.toggle("price_circle_active")
       circle_pro_care.classList.remove("price_circle_active")
       circle_basics.classList.remove("price_circle_active")    
       pudge[0].classList.add("pudge");
       pudge[1].classList.add("pudge");
       pudge[2].classList.add("pudge")
       pudge[3].classList.toggle("pudge");
       pudge[4].classList.toggle("pudge");
       pudge[5].classList.toggle("pudge");
       pudge[6].classList.add("pudge");
       pudge[7].classList.add("pudge");
       pudge[8].classList.add("pudge"); 
    });   
}());

(function () {
    const pro_care_sec = document.querySelector('.pro_care');
    const basics_sec = document.querySelector('.basics');
    const standard_sec = document.querySelector('.standard');
    const burger_open = document.querySelector('.basics_opened');
    const circle_pro_care = document.querySelector('.price_circle_pro_care');
    const circle_basics = document.querySelector('.price_circle_bacics'); 
    const circle_standard = document.querySelector('.price_circle_standard');
    const pudge = document.querySelectorAll('.pudge');
    pro_care_sec.addEventListener("click", () => {
       pro_care_sec.classList.toggle("basics_opened");
       standard_sec.classList.remove("basics_opened");
       basics_sec.classList.remove("basics_opened");
       circle_pro_care.classList.toggle("price_circle_active")
       circle_basics.classList.remove("price_circle_active")   
       circle_standard.classList.remove("price_circle_active")   
       pudge[0].classList.add("pudge");
       pudge[1].classList.add("pudge");
       pudge[2].classList.add("pudge");
       pudge[3].classList.add("pudge");
       pudge[4].classList.add("pudge");
       pudge[5].classList.add("pudge");
       pudge[6].classList.toggle("pudge");
       pudge[7].classList.toggle("pudge");
       pudge[8].classList.toggle("pudge"); 
    });
}());

(function () {
    const city_list = document.querySelector('.prikol');
    const knopka = document.querySelector('.knopka');
    const hide = document.querySelectorAll('.city_hide');

    knopka.addEventListener("click", () => {
       city_list.classList.toggle("city_selector_active");
       hide[1].classList.toggle("city_hide");
       hide[2].classList.toggle("city_hide"); 
       hide[3].classList.toggle("city_hide"); 
       hide[0].classList.toggle("city_hide");   
    });
}());






