// window.onload = function() {

let menuState = false;
let prevScrollpos = window.pageYOffset;

// }

window.onscroll = function() {
    let x = document.getElementsByClassName("burger_button")[0];
    let header = document.getElementsByClassName("header")[0];
    let burgerButton = document.getElementsByClassName("burger_button")[0];
    let currentScrollPos = window.pageYOffset;
    if (menuState) {
        x.classList.toggle("change");
        document.getElementsByClassName("menu_box")[0].classList.toggle("change_menu_box");
        document.getElementsByClassName("menu")[0].classList.toggle("change_menu");
        document.getElementsByClassName("darken_background")[0].classList.toggle("visible");
        menuState = !menuState;
    } else if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
        burgerButton.style.top = "10px";
    } else {
        header.style.top = "-180px";
        burgerButton.style.top = "-180px";
    }
    prevScrollpos = currentScrollPos;


}



function myFunction(x) {
    x.classList.toggle("change");
    document.getElementsByClassName("menu_box")[0].classList.toggle("change_menu_box");
    document.getElementsByClassName("menu")[0].classList.toggle("change_menu");
    document.getElementsByClassName("darken_background")[0].classList.toggle("visible");
    // let arr = document.getElementsByClassName("menu-item");
    // console.log(arr);
    // arr.forEach(myfunc);

    // function myfunc (item) { item.classList.toggle("menu-item_changed") }
    menuState = !menuState;

}