import validator from './validator.js';

console.log(validator);

let btn = document.getElementById("btn");
let imputNumeroDeTarjeta= document.getElementById("PonerNumero");
let cajitaVariable= document.getElementById("michi");
let imputNombre= document.getElementById("PonerNombre");
  let cajitaNombre= document.getElementById("nombre1");

btn.addEventListener("click", function (event) {
  event.preventDefault();
      // Obtiene el numero de tarjeta
  let NumeroDeTarjeta = imputNumeroDeTarjeta.value;
     //importamos el validator con la función IsValid y maskify
     let resultado = validator.isValid(NumeroDeTarjeta);
     let ocultar = validator.maskify(NumeroDeTarjeta);

let divF=document.getElementById("valido");
  if(resultado===true){
    const anuncio="Tu tarjeta es VALIDA";
    divF.innerHTML=anuncio;
  } else{
    divF.innerHTML="Tu tarjeta es INVALIDA";
  }
cajitaVariable.innerHTML=ocultar;
  });

  imputNumeroDeTarjeta.addEventListener("keyup", function (){
    //console.log(imputNumeroDeTarjeta.value)

    let valorTarjeta= imputNumeroDeTarjeta.value;
    console.log(cajitaVariable);
    cajitaVariable.innerHTML=valorTarjeta;
  })

  imputNombre.addEventListener("keyup", function(){

    let valorNombre=imputNombre.value;
    cajitaNombre.innerHTML= valorNombre;
  })
