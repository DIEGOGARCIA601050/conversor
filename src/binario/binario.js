import { mostrarEnPantalla } from './mostrarEnPantalla.js';
let results = document.getElementById("resultados");
export function binario() {
    let number = parseFloat(prompt("Que número quieres convertir a binario"));
    if (Number.isNaN(number)) {
        mostrarEnPantalla("no se puede convertir un texto a binario, ingresa un numero");
        return
    }
    if (number % 1 !== 0) {
        mostrarEnPantalla("conversiones decimales no disponibles")
        return
    }
    if (number < 0) {
        mostrarEnPantalla("conversiones de negativos no disponibles");
        return
    }
    let numeroOriginal = number;
    let binary = "";
    while (number > 0) {
        let remainder = number % 2;
        //registra los resultados en binary como cadena de texto
        binary = remainder + binary;
        number = Math.floor(number / 2);
    }
    //lo muestra en pantalla
    mostrarEnPantalla(`El numero ${numeroOriginal} en binario es ${binary}`);
}
