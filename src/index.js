import validator from './validator.js';

console.log(validator);

let btn = document.getElementById("btn");
btn.addEventListener("click", ValidarDigitos)

function ValidarDigitos() {
        // Obtiene el numero de tarjeta
       let NumeroDeTarjeta= document.getElementById("PonerNumero").value;
       //importamos el validator con la función IsValid y maskify
       validator.isValid(NumeroDeTarjeta);
       validator.maskify(NumeroDeTarjeta);
  }
