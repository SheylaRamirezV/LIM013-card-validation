const validator = {
  isValid:
  function(NumeroDeTarjeta){
    //Genero un Arreglo para que mi numero general sea de manera unitaria
    let ArregloNumeroDeTarjeta= NumeroDeTarjeta.split("");
  console.log(ArregloNumeroDeTarjeta);
    //Pone mi arreglo en reverso
    let NumeroDeTarjetaReverso= ArregloNumeroDeTarjeta.reverse();
  console.log(NumeroDeTarjetaReverso);
  //Empieza mi validación en Luhm
  //genero una variable Sumatotal = 0
 let SumaTotal= 0;
 // para que mi variable i pueda recorrer debe llegar hasta 1 mes de 16 (posicion 15) y mi variable sera 1 a 1
   for(let i=0; i<NumeroDeTarjetaReverso.length; i++){
     // genero una nueva variable CadaPar - parseInt para que el numero sea entero y se trabaja con NumeroDeTarjetaReverso
     let CadaPar= parseInt(NumeroDeTarjetaReverso[i]);
     // Si mi numero divido entre dos su residuo es diferente de cero (entramos a las condicionales)
     if((i % 2) != 0){
       // Mi nueva variable cadapar se multiplica por dos
         CadaPar *= 2;
         // Si es el resultado es mayor a nueve , entonces se le resta nueve.
           if(CadaPar > 9){
             CadaPar -= 9;
         }
     }
     // mi variable Suma Total se sumara cada numero incluido las posiciones CadaPar.
     SumaTotal += CadaPar;
 }
 console.log(SumaTotal);
 // Si mi SumaTotal si al dividir entre 10 es igual a cero
     if( SumaTotal % 10 ==0)
   {
 return alert("LA TARJETA ES VALIDA");
   }
else{
 return alert("LA TARJETA ES INVALIDA");
  }
},


maskify:
function(Ocultar){
  let maskify2= "";
  for(let i=0; i<Ocultar.length; i++){
    if(i<= Ocultar.length -5){
      maskify2=maskify2 + "*"
    } else {
      maskify2=maskify2 + Ocultar[i]

    }
  }
console.log(maskify2);
return maskify2
 }
}

export default validator;
