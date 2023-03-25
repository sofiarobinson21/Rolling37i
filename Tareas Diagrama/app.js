// EJERCICIO1
// let lado, perimetro
// lado= parseFloat(prompt(`cuanto mide el lado del cuadrado?`))
// perimetro= lado*4

// document.write(`El perimetro del cuadrado en cuestion es de ${perimetro}, ya que sus lados miden ${lado}`)

// EJERCICIO6
// let clave1, clave2
// clave1= prompt(`ingresa una clave`);
// clave2= prompt(`confirma tu clave`);

// if (clave1==clave2){
// document.write(`Las claves coinciden`);
// } else{
//     document.write(`contraseña invalida`);
// }

// EJERCICIO7

// let numero;
// numero=parseInt(prompt(`ingrese un numero entero`));

// if(numero>0){
//     document.write(`el numero ingresado es POSITIVO`);
// } else if (numero<0){
//     document.write(`el numero ingresado es NEGATIVO`);
// } else if (numero==0){
//     document.write(`el numero ingresado es NULO`);
// } else{
//     document.write(` valor incorrecto `);
// }

// EJERCICIO 9
//  let nombre, cantidadpreguntas, correctas, promedio;
//  nombre= prompt(`ingrese el nombre del postulante`);
//  cantidadpreguntas= parseInt(prompt(`ingrese la cantidad de preguntas que se le realizaron`));
//  correctas= parseInt(prompt(`ingrese la cantidad de preguntas que respondio correctamente`));
//  promedio=(correctas*100)/cantidadpreguntas

// if(promedio>=90){
//     document.write(`el nivel de ${nombre} según el
//     porcentaje de respuestas correctas que ha obtenido es SUPERIOR`)
// }  else if (promedio>=75 && promedio<90){
//       document.write(`el nivel de ${nombre} según el
//      porcentaje de respuestas correctas que ha obtenido es MEDIO`)
// } else if(promedio>=50 && promedio<75) {
//      document.write(`el nivel de ${nombre} según el
//      porcentaje de respuestas correctas que ha obtenido es REGULAR`)
// } else if(promedio<50){
//      document.write(`el nivel de ${nombre} según el
//      porcentaje de respuestas correctas que ha obtenido esta FUERA DE NIVEL`)
// } else{
//     document.write(`valor incorrecto`)
// }

// EJERCICIO 12 
// for(i=0; i<=50; i= i+5 ){
//      document.write(`${valores} x 5 = ${i} <br>`)
// }
 
// ejercicio 14

let l1,l2,l3;
let cantidadEqui=0;
let cantidadIso=0;
let cantidadEsca=0;

for(let i=1; i<=4; i++){
     l1=parseFloat(prompt(`ingresa un valor del lado del triangulo`));
     l2=parseFloat(prompt(`ingresa un valor del lado del triangulo`));
     l3=parseFloat(prompt(`ingresa un valor del lado del triangulo`));
if( l1==l2 && l1==l3){
     cantidadEqui++;
} else if (l1==l2 && l1!==l3 || l2==l3 && l1!==l2 || l1==l3 && l2!==l3){
     cantidadIso++;
} else if(l1!==l2!==l3) {
     cantidadEsca++;
}
   document.write(`las medidas del triangulo ${i} son <br>`);
   document.write(`Lado 1 ${l1}<br>`);
   document.write(`Lado 2 ${l2}<br>`);
   document.write(`Lado 3 ${l3}<br>`);

}

document.write(`la cantidad de triangulos equilateros es ${cantidadEqui}<br>`);
document.write(`la cantidad de triangulos isosceles es ${cantidadIso}<br>`);
document.write(`la cantidad de triangulos escalenos es ${cantidadEsca}<br>`);


if(cantidadEqui<cantidadEsca && cantidadEqui<cantidadIso){
     document.write(`la menor cantidad de triangulos que tenemos son EQUILATEROS<br>`);
} else if(cantidadIso<cantidadEsca && cantidadIso<cantidadEqui){
     document.write(`la menor cantidad de triangulos que tenemos son ISOSCELES<br>`);
} else if(cantidadEsca<cantidadEqui && cantidadEsca<cantidadIso){
     document.write(`la menor cantidad de triangulos que tenemos son ESCALENOS<br>`);
} else if(cantidadEqui<=cantidadEsca && cantidadEqui<cantidadIso){
    document.write(`la menor cantidad de triangulos que tenemos son EQUILATEROS y ESCALENOS<br>`);
} else if(cantidadIso<=cantidadEsca && cantidadIso<cantidadEqui){
    document.write(`la menor cantidad de triangulos que tenemos son ESCALENOS e ISOSCELES<br>`);
}else if(cantidadIso<=cantidadEqui && cantidadIso<cantidadEsca){
    document.write(`la menor cantidad de triangulos que tenemos son EQUILATEROS e ISOSCELES<br>`);
} else if(cantidadEsca<=cantidadEqui && cantidadEsca<cantidadIso){
        document.write(`la menor cantidad de triangulos que tenemos son ESCALENOS y EQUILATEROS<br>`);
}
