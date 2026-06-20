import { mostrarEnPantalla } from './mostrarEnPantalla.js';
export function binarioinverso() {
    let numeroAconvertir = prompt("Que número binario quieres convertir a decimal");
    const cadenaBinaria = /^[01]+\$/
    if (cadenaBinaria.test(numeroAconvertir)) {
        let numeroOriginal = numeroAconvertir;
        numeroAconvertir = parseInt(numeroAconvertir, 2);
        mostrarEnPantalla(`El numero ${numeroOriginal} en base 10 es ${numeroAconvertir}`);
    }
    else {
        mostrarEnPantalla("el numero ingresado solo puede tener 1s y 0s");
    }
}
