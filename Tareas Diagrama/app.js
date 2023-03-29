// EJERCICIO 1
// let lado, perimetro
// lado= parseFloat(prompt(`cuanto mide el lado del cuadrado?`))
// perimetro= lado*4

// document.write(`El perimetro del cuadrado en cuestion es de ${perimetro}, ya que sus lados miden ${lado}`)

// EJERCICIO 2
// let suma, producto
// suma=0
// for(i=1;i<=2;i++){
//      let valores= parseInt(prompt(`ingrese los primeros valores`))
//      suma=suma+ valores;
// }
// document.write(`el resultado de la suma es ${suma}<br>`)
// producto=0
// for (i=1; i<=1;i++){
//      let valor1= parseInt(prompt(`ingrese valores `));
//      let valor2= parseInt(prompt(`ingrese valores`));
//      producto= producto+ valor1*valor2;
// }
// document.write(`el resultado de la multiplicacion de los ultimos dos numeros ingresados es ${producto}`)

// EJERCICIO 3
// let suma=0
// let producto=0
// for(i=1;i<=1;i++){
//      let valor1=parseInt(prompt(`ingrese valores`));
//      valor2=parseInt(prompt(`ingrese valores`));
//      valor3=parseInt(prompt(`ingrese valores`));
//      valor4=parseInt(prompt(`ingrese valores`));
//      suma= suma + valor1+valor2+valor3+valor4
//      producto= valor1*valor2*valor3*valor4
// }
// document.write(`la suma de los valores ingresados es igual a ${suma}<br>`);
// document.write(`el producto de los valores ingresados es igual a ${producto}`)

// EJERCICIO 4
// let precio, cantidad
// precio= parseInt(prompt(`Ingrese el precio del producto`))
// cantidad= parseInt(prompt(`Cuantas unidades lleva?`))
// abonar= precio*cantidad

// document.write(`El precio unitario del producto en cuestion es $ ${precio}, y el cliente lleva ${cantidad} unidades, entonces debe abonar $ ${abonar}`)

// EJERCICIO 5

// let suma=0
// let promedio=0
// for(i=1; i<=3; i++){
//      notas= parseInt(prompt(`ingrese las notas del alumno`));
//      suma= suma+notas;
// }
// promedio= promedio + suma/3
// if (promedio>=7){
//      document.write(`el alumno esta promocionado`)
// } else if(promedio<7){
//      document.write(`el alumno esta regular`)
// }else{
//      document.write(`undefined`)
// }


// EJERCICIO 6
// let clave1, clave2
// clave1= prompt(`ingresa una clave`);
// clave2= prompt(`confirma tu clave`);

// if (clave1==clave2){
// document.write(`Las claves coinciden`);
// } else{
//     document.write(`contraseña invalida`);
// }

// EJERCICIO 7

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

// EJERCICIO 8
// let num;
// num=parseInt(prompt(`ingrese un numero de hasta 3 crifras`));
// if(num<10){
//      document.write(`el numero tiene 1 cifra`);
// }else if(num<100){
//      document.write(`el numero tiene 2 cifras`);
// }else if(num<1000){
//      document.write(`el numero tiene 3 cifras`);
// }else if(num>999){
//      document.write(`numero invalido`)
// }else{
//      document.write(`valor incorrecto`)
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

// EJERCICIO 10
// let base, altura, superficie
// contador=0
// for(i=1; i<=3;i++){
//      base=parseFloat(prompt(`Ingrese el valor de la base del triangulo`));
//      altura=parseFloat(prompt(`Ingrese el valor de la altura del triangulo`));
//      superficie= (base*altura)/2;
//      if(superficie>12){
//      contador++
// }
// document.write(`El triangulo numero ${i}<br>`);
// document.write(`Su base es ${base}<br>`);
// document.write(`Su altura es ${altura}<br>`);
// document.write(`Su superficie ${superficie}<br>`)
// }
// document.write(`La cantidad de triangulos con superficie mayor a doce es de ${contador}`)

// EJERCICIO 11
// let suma,valores
// suma=0
// for(i=1; i<=10; i++){
//      valores=parseInt(prompt(`Ingrese un valor`))
//      if(i>5){
//          suma= suma+valores;
//      }
// }
// document.write(`los ultimos 5 valores dan como resultado ${suma}`)

// EJERCICIO 12 
// for(i=0; i<=50; i= i+5 ){
//      document.write(`${valores} x 5 = ${i} <br>`)
// }

// EJERCICIO 13
// let numero, conta
// numero=parseInt(prompt(`ingresa un numero del 1 al 10`));
// contador= numero;
// for(i=1; i<=12; i++){
//      document.write(contador + `<br>`);
//      contador=contador+numero
// }
 
// ejercicio 14

// let l1,l2,l3;
// let cantidadEqui=0;
// let cantidadIso=0;
// let cantidadEsca=0;

// for(let i=1; i<=4; i++){
//      l1=parseFloat(prompt(`ingresa un valor del lado del triangulo`));
//      l2=parseFloat(prompt(`ingresa un valor del lado del triangulo`));
//      l3=parseFloat(prompt(`ingresa un valor del lado del triangulo`));
// if( l1==l2 && l1==l3){
//      cantidadEqui++;
// } else if (l1==l2 && l1!==l3 || l2==l3 && l1!==l2 || l1==l3 && l2!==l3){
//      cantidadIso++;
// } else if(l1!==l2!==l3) {
//      cantidadEsca++;
// }
//    document.write(`las medidas del triangulo ${i} son <br>`);
//    document.write(`Lado 1 ${l1}<br>`);
//    document.write(`Lado 2 ${l2}<br>`);
//    document.write(`Lado 3 ${l3}<br>`);

// }

// document.write(`la cantidad de triangulos equilateros es ${cantidadEqui}<br>`);
// document.write(`la cantidad de triangulos isosceles es ${cantidadIso}<br>`);
// document.write(`la cantidad de triangulos escalenos es ${cantidadEsca}<br>`);


// if(cantidadEqui<cantidadEsca && cantidadEqui<cantidadIso){
//      document.write(`la menor cantidad de triangulos que tenemos son EQUILATEROS<br>`);
// } else if(cantidadIso<cantidadEsca && cantidadIso<cantidadEqui){
//      document.write(`la menor cantidad de triangulos que tenemos son ISOSCELES<br>`);
// } else if(cantidadEsca<cantidadEqui && cantidadEsca<cantidadIso){
//      document.write(`la menor cantidad de triangulos que tenemos son ESCALENOS<br>`);
// } else if(cantidadEqui<=cantidadEsca && cantidadEqui<cantidadIso){
//     document.write(`la menor cantidad de triangulos que tenemos son EQUILATEROS y ESCALENOS<br>`);
// } else if(cantidadIso<=cantidadEsca && cantidadIso<cantidadEqui){
//     document.write(`la menor cantidad de triangulos que tenemos son ESCALENOS e ISOSCELES<br>`);
// }else if(cantidadIso<=cantidadEqui && cantidadIso<cantidadEsca){
//     document.write(`la menor cantidad de triangulos que tenemos son EQUILATEROS e ISOSCELES<br>`);
// } else if(cantidadEsca<=cantidadEqui && cantidadEsca<cantidadIso){
//         document.write(`la menor cantidad de triangulos que tenemos son ESCALENOS y EQUILATEROS<br>`);
// }

// EJERCICIO 15
// let cuadrante1,cuadrante2,cuadrante3,cuadrante4
// cuadrante1=0;
// cuadrante2=0;
// cuadrante3=0;
// cuadrante4=0;
// cantidad=parseInt(prompt(`cuantos valores ingresara?`));
// cantidad=parseInt(cantidad);

// for(i=1; i<=cantidad; i++){
//      let x= parseInt(prompt(`ingrese cordenada x`));
//      let y= parseInt(prompt(`ingrese coordenada y`));

//  if(x>0 && y>0){
//      cuadrante1++;
// } else if(x<0 && y>0){
//      cuadrante2++;
// } else if(x<0 && y<0){
//      cuadrante3++;
// } else if(x>0 && y<0){
//      cuadrante4++;
// }
// }
// document.write(`cantidad de puntos ingresados en el primer cuadrante ${cuadrante1}<br>`);
// document.write(`cantidad de puntos ingresados en el segundo cuadrante ${cuadrante2}<br>`);
// document.write(`cantidad de puntos ingresados en el tercer cuadrante ${cuadrante3}<br>`);
// document.write(`cantidad de puntos ingresados en el cuarto cuadrante ${cuadrante4}<br>`);

// EJERCICIO 16

//  let cantnegativos=0;
//  let cantpositivos=0;
//  let cantidadmultiplos=0;
//  let sumapares=0;
//  for(let i=1; i<=10; i++){
//      let valor=parseInt(prompt(`ingrese valor`));
//  if( valor < 0 ){
//    cantnegativos++ ; 
//  }else if( valor > 0 ){
//    cantpositivos++ ;
// } 

// if (valor % 15 == 0 && valor != 0){
//      cantidadmultiplos++
// } 
// if (valor % 2 == 0){
//      sumapares= sumapares + valor;
// }
// }

// document.write(`la cantidad de numeros negativos son ${cantnegativos}<br>`)
//  document.write(`de positivos ${cantpositivos}<br>`)
//  document.write(`la cantidad de multiplos de 15 es ${cantidadmultiplos}<br>`);
//  document.write(`la suma de los valores pares es ${sumapares}<br>`)

// EJERCICIO 17

// let suma1=0;
// for(i=1; i<=5;i++){
//      let edadTmañana = parseInt(prompt(`ingrese la edad del alumno. turno mañana`));
//      suma1 = suma1 + edadTmañana;
// }

// let suma2=0;
// for(i=1; i<=6;i++){
//      let edadTtarde = parseInt(prompt(`ingrese la edad del alumno. turno tarde`));
//      suma2 = suma2+edadTtarde
// }

// let suma3=0;
// for(i=1;i<=11;i++){
//      edadTnoche=parseInt(prompt(`ingrese la edad del alumno.turno noche`));
//      suma3= suma3+edadTnoche;
// }
// let promedioMañana= suma1/5;
// let promedioTarde= suma2/6;
// let promedioNoche= suma3/11;

// document.write(`El promedio de la edad los alumnos del turno mañana es de ${promedioMañana}<br> `);
// document.write(`El promedio de la edad los alumnos del turno tarde es de ${promedioTarde}<br> `);
// document.write(`El promedio de la edad los alumnos del turno noche es de ${promedioNoche}<br> `);

// let promedioMayor= Math.max(promedioMañana,promedioNoche,promedioTarde)

// document.write(`el curso con mayor promedio en edades es de ${promedioMayor};`)
//  if(promedioMañana>promedioNoche && promedioMañana>promedioTarde){
//      document.write(`por lo tanto es el turno mañana`)
//  } else if(promedioTarde>promedioNoche){
//      document.write(`por lo tanto es el turno tarde`)
//  } else {
//      document.write(`por lo tanto es el turno noche`)
//  }
