var menu = document.getElementById("menu_ham");
var boton = document.getElementById("boton");

function cambio() {
    /*boton.removeAttribute("class");
    setTimeout(() => {
        if (boton.innerHTML == "+") {
            var cambio = "btn_menos";
            boton.innerHTML = "-";
            boton.classList.toggle(cambio);
        } else {
            var cambio = "btn_mas";
            boton.innerHTML = "+";
            boton.classList.toggle(cambio);
        }
        
    }, 1);*/
    boton.classList.toggle("btn_menos");
    setTimeout(() => {
        
        menu.classList.toggle("menu_on");
    }, 2);
    if (boton.innerHTML == "+") {
        boton.innerHTML = "-";
    } else {
        boton.innerHTML = "+";
    }
}

function menu_off() {
    menu.classList.toggle("menu_on");
}