// 1.La Escuela Café de las 3am solicita un sistema, donde le permita a sus estudiantes presentarse de una manera más interactiva y eficiente , por eso deciden acudir a un programador para crear un sistema, en el cual se podrá ingresar el nombre, edad, actividad favorita y deporte favorito en una tarjeta de presentación predeterminada.

// let nombre, edad, actividadfav, deportefav
// nombre= prompt(`Ingresa tu nombre`);
// edad= parseInt(prompt(`Cuantos años tienes?`));
// actividadfav= prompt(`Que es lo que mas te gusta hace?`);
// deportefav= prompt(`Cual es tu deporte favorito?`);

// document.write(`Mi nombre es ${nombre},tengo ${edad} años, lo que mas me gusta hacer es ${actividadfav} y mi deporte favorito es ${deportefav}`)

// 2. Realizar un programa que lea cuatro valores numéricos e informar su suma y producto.

// let num1, num2, num3, num4, suma, producto
// num1= parseInt(prompt(`ingresa un valor numerico`))
// num2= parseInt(prompt(`ingresa un valor numerico`))
// num3= parseInt(prompt(`ingresa un valor numerico`))
// num4= parseInt(prompt(`ingresa un valor numerico`))
// suma= num1+num2+num3+num4
// producto= num1*num2*num3*num4

// document.write(`Siendo que los valores con los que contamos son ${num1}, ${num2}, ${num3} y ${num4}, el resultado de la suma de los mismos es ${suma}, mientras que el producto resultante entre ellos es ${producto}`)

// 3. Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por teclado un precio sin decimales, es decir un entero: 2, 7, 90 etc.)

// let precio, cantidad
// precio= parseInt(prompt(`Ingrese el precio del producto`))
// cantidad= parseInt(prompt(`Cuantas unidades lleva?`))
// abonar= precio*cantidad

// document.write(`El precio unitario del producto en cuestion es $ ${precio}, y el cliente lleva ${cantidad} unidades, entonces debe abonar $ ${abonar}`)


// 4. Ingresar dos números
// ● Si el primero es mayor que el segundo mostrar en consola la suma de ambos
// ● Si el primero es menor que el segundo mostrar en consola la resta del segundo
// menos el primero.
// ● Si son iguales mostrar en consola la multiplicación de ambos.
// (ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3)

// let num1, num2
// num1= parseInt(prompt(`ingrese un primer numero`))
// num2= parseInt(prompt(`ingrese un primer numero`))
// if(num1>num2){
//    console.log (num1+num2);
// } else if (num1<num2){
//     console.log(num2-num1);
// } else if (num1==num2){
//     console.log(num1*num2)
// } else{
//     console.log(`valor no valido`)
// }



// 5. Ingresar 3 números
// ● indicar cual es el mayor
// ● indicar cual es el menor
// ● obtener la raíz cuadrada del segundo número

let num1, num2, raiz 
num1= parseInt(prompt(`ingresa un numero`));
num2= parseInt(prompt(`ingresa un segundo numero`));
raiz= parseFloat(Math.sqrt(num2))
 if(num1<num2){
    document.write(`El mayor numero ingrasado es ${num1}`)
 } else if(num2<num1){
    document.write(`el mayor numero ingresado es ${num2}`)
} else if(num1==num2){
    document.write(`no podemos decirte cual numero es el mayor porque ambos son iguales`)
} else {
   document.write(`valor igresado incorrecto`)
 }

document.write(`<br> la raiz cuadrada del segundo numero ingresado es ${raiz}`)