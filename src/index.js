import validator from './validator.js';

console.log(validator);

let btn = document.getElementById("btn");
btn.addEventListener("click", ValidarDigitos)

function ValidarDigitos() {
        // Obtiene el valor del elemento del Id
       let NumeroDeTarjeta= document.getElementById("PonerNumero").value;
       validator.isValid(NumeroDeTarjeta)
       validator.maskify(NumeroDeTarjeta)

    console.log("Numero de Tarjeta es =" + NumeroDeTarjeta);

      // genero un arreglo para que mi cadena se guarde por cada digito.
      let ArregloNumeroDeTarjeta= NumeroDeTarjeta.split("");
    console.log(ArregloNumeroDeTarjeta);
      //Pone mi arreglo en reverso
      let NumeroDeTarjetaReverso= ArregloNumeroDeTarjeta.reverse();
    console.log(NumeroDeTarjetaReverso);

    //Empieza mi validación en Luhm
   let SumaTotal= 0;
     for(let i=0; i<NumeroDeTarjetaReverso.length; i++){
       let CadaNumero= NumeroDeTarjetaReverso[i];
       if((i % 2) != 0){
         // arregloVacio.push(CadaNumero *= 2;)
           CadaNumero *= 2;
             if(CadaNumero > 9){
               CadaNumero -= 9;
           }
       }
       SumaTotal += CadaNumero
   }
       if( SumaTotal % 10 ==0)
     {
   return alert("LA TARJETA ES VALIDA");
     }
 else{
   return alert("LA TARJETA ES INVALIDA");
     }
}
