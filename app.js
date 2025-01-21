// let numeroSecreto = 0;
// let intentos = 0;
// let listaNumerosSorteados = [];
// let numeroMaximo = 10;

// console.log (numeroSecreto);

// function asignarTextoElemento (elemento, texto) {
//     let elementoHTML = document.querySelector(elemento);
//     elementoHTML.innerHTML = texto;
//     return;
// }


// function verificarIntento () {
//     let numeroUsuario = parseInt(document.getElementById ('valorInput').value);
    
    
//     console.log (intentos);
    
//     if (numeroUsuario == numeroSecreto) {
//         asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        
//         document.getElementById ('reiniciar').removeAttribute ('disabled');

//     } else {
//         if (numeroSecreto > numeroUsuario) {
//             asignarTextoElemento ('p', 'El número secreto es mayor');
//         } else {
//             asignarTextoElemento ('p', 'El número secreto es menor');
//         }
//         intentos++;
//         limpiarCaja ();
//         if (intentos === 4) {
//             asignarTextoElemento ('p', 'Perdiste, el número secreto era ' + numeroSecreto);
//             document.getElementById ('reiniciar').removeAttribute ('disabled');
//         }
//     }

//     return;
// }

// function limpiarCaja () {
//     document.getElementById ('valorInput').value = '';
// }


// function condicionesIniciales () {
//     asignarTextoElemento ('h1', 'Juego del numero secreto');
//     asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}`);
//     numeroSecreto = generarNumeroSecreto();
//     intentos = 1;
// }


// function reiniciarJuego () {
//     limpiarCaja ();
//     condicionesIniciales ();
//     document.getElementById ('reiniciar').setAttribute ('disabled', 'true');
// }

// function generarNumeroSecreto () {
//     let numeroGenerado = parseInt(Math.random () * numeroMaximo) + 1;

//     if (listaNumerosSorteados.length == numeroMaximo) {

//         asignarTextoElemento ('p', 'Ya se sortearon todos los numeros posibles')

//     } else {
    
    
//         if (listaNumerosSorteados.includes(numeroGenerado)) {

//             return generarNumeroSecreto(); 


//         } else {
//             listaNumerosSorteados.push(numeroGenerado);

//             return numeroGenerado;
//         }
//     }
// }

// condicionesIniciales ();



// function elevarAlCuadradoWhile(lista) {
//     const cuadrados = [];
//     let i = 0;
  
//     while (i < lista.length) {
//       cuadrados.push(lista[i] * lista[i]);
//       i++;
//     }
  
//     return cuadrados;
//   }
  
//   let lista1 = [1, 3, 5, 6, 7, 9];
//   let resultado = elevarAlCuadradoWhile(lista1);
  
//   console.log(resultado);




// function sumList (lista1, lista2) {
//     let resultado = [];
//     let i = 0;

//     if (lista1.length == lista2.length){

//         while (i < lista1.length){
//             resultado.push(lista1[i] + lista2[i]);
//             i++;
//         }
//         return resultado;
//     }else 
//         {
//             console.log('Las listas deben tener la misma longitud');
//             return null;
//         }

// }  


// let lista1 = [1,3,5,6,7,9];
// let lista2 = [4,7,2,5,1,5];
// let resultado = sumList(lista1, lista2);

// console.log(resultado);






// function encontrarPosicion(lista, numero) {
//     return lista.findIndex(num => num === numero); 
//   }
  
//   let listaNumeros = [1, 2, 9, 4, 25, 6];
//   let numeroBuscar = parseInt(prompt('Número a elegir:'));
  
//   let posicion = encontrarPosicion(listaNumeros, numeroBuscar);
  
//   if (posicion !== -1) {
//     console.log(`El número ${numeroBuscar} se encuentra en la posición ${posicion}`);
//   } else {
//     console.log(`El número ${numeroBuscar} no se encuentra en la lista`);
//   }













// function sumar (lista) {
//     let suma = 0;
//     let i = 0;

//     while (i < lista.length) {

//         suma += lista[i];
//         i++;
//     }

//     console.log (i);

//     return suma;

// }

// let listaNumeros = [1, 2, 3, 4, 5, 6];

// // listaNumeros.push(parseInt(prompt('Inserte un numero')));



// resultado = sumar(listaNumeros);

// console.log (resultado);9
// console.log (listaNumeros);









// function numerosLength (lista){

//     let mayor = Math.max(...lista);
//     let menor = Math.min(...lista);

//     return {mayor, menor} ;

// }

// let listaNumeros = [1, 2, 3,15, 4, 5, 6];

// let resultado = numerosLength(listaNumeros);

// console.log("El número mayor es:", resultado.mayor);
// console.log("El número menor es:", resultado.menor);




// function sumar (lista) {
//     let suma = 0;
//     let i = 0;

//     while (i < lista.length) {

//         suma += lista[i];
//         i++;
//     }

//     console.log (i);

//     return suma/i;

// }

// let listaNumeros = [1, 2, 3, 4, 5, 6];

// listaNumeros.push(parseInt(prompt('Inserte un numero')));



// resultado = sumar(listaNumeros);

// console.log (resultado);
// console.log (listaNumeros);










// let listaGenerica = [];
// console.log (listaGenerica);



// function lenguajesDeProgramacion (){
//     let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];

//     lenguajesDeProgramacion.push ('Java', 'Ruby' , 'GoLang');

//     lenguajesDeProgramacion.reverse();

//     return lenguajesDeProgramacion;

// }

// let lenguajes = lenguajesDeProgramacion ();

// console.log (lenguajes);





// function tablaMultiplicar(numero) {
//     let i = 1;
//     while (i <= 9) {
//         console.log(numero + " x " + i + " = " + numero * i);
//         i++;
//     }
//     return;
// }

// let numero = parseInt (prompt('Inserte el numero del que desea la tabla'));

// tablaMultiplicar(numero);





// function calculo (radio) {
//     Pi = 3.14;
//     let area = Pi * (radio * radio);
//     let perimetro = (2 * radio) * Pi;
//     return 'El area de la circunferencia es : ' + area + ' m2 y el perimetro de : ' + perimetro + ' m';
// }


// let a = parseFloat(prompt('Inserte el radio de la circunferencia '));

// console.log(calculo(a));






// function calculo (alto, ancho) {
//     let area = alto * ancho;
//     let perimetro = 2*alto + 2*ancho;
//     return 'El area del rectangulo es : ' + area + ' m2 y el perimetro de : ' + perimetro + ' m';
// }


// let a = parseFloat(prompt('Inserte el alto del rectangulo '));
// let b = parseFloat(prompt('Inserte el ancho del rectangulo '));

// console.log(calculo(a, b));





// function dolar (cantidad) {
//     return cantidad * 4.80;
// }

// let monedas = parseFloat(prompt('Inserte la cantidad de dolares a convertir'));

// console.log(`El equivalente en pesos argentinos es: ${dolar(monedas)}`);






// function factorialWhile(n) {
//     let resultado = 1;
//     let i = 2;
  
//     while (i <= n) {
//       resultado *= i;
//       i++;
//     }
//     console.log(resultado);
//     console.log(i);
    
  
//     return resultado;
//   }

  
//   let fac = parseInt(prompt('Inserte el numero a factorizar'));
//   console.log(`El factorial de ${fac} es: ${factorialWhile(fac)}`);













// function calcularIMC(peso, altura) {
    
//     if (isNaN(peso) || isNaN(altura) || altura === 0) {
//       return "Por favor, ingrese valores numéricos válidos para el peso y la altura.";
//     }
  
//     const imc = peso / (altura * altura);
//     console.log("Su IMC es: " + imc);
    
//     if (imc < 18.5) {
//       return "Bajo peso";
//     } else if (imc < 25) {
//       return "un Peso normal";
//     } else if (imc < 30) {
//       return "Sobrepeso";
//     } else {
//       return "Obesidad";
//     }
//   }
  
//   // Obtener datos del usuario
//   const peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
//   const altura = parseFloat(prompt("Ingrese su altura en metros:"));
  
//   // Calcular e imprimir el resultado
//   const resultado = calcularIMC(peso, altura);
//   console.log("Tienes: " + resultado);










// function calcularPromedio (nota1, nota2, nota3, nota4){
//     let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
//     return promedio;
// }
// function verificarAprobacion (promedio){
//     if (promedio >= 5){
//         console.log ('Aprobado')
//     } else {
//         console.log ('Reprobado')
//     }
// }



// let promedio = calcularPromedio (7,6,3,4);
// console.log (promedio);
// verificarAprobacion (promedio);






// function saludo (nombre = prompt ('Inserte su nombre')) {
//     // let nombreUsu = prompt ('Inserte su nombre');
//     alert (`Hola ${nombre}!`);
//     console.log (`Hola ${nombre}!`);
//     return;
// }

// saludo ();

// function doble(numero = parseInt(prompt('Inserte un número'))) { 

//     let resultado = numero * 2; 
//     console.log(`El doble es: ${resultado}!`); 
//     return resultado; 
// } 


// function triple (numero1 = parseFloat(prompt('Inserte el primer numero')), numero2 = parseFloat(prompt('Inserte el segundo numero')), numero3 = parseFloat(prompt('Inserte el tercer numero'))    ) {
//     let resultado = parseFloat((numero1 + numero2 + numero3) / 3) ;
//     console.log(`El promedio es: ${resultado}!`);
//     return resultado;
// }

// function triple (numero1 = parseFloat(prompt('Inserte el primer numero')), numero2 = parseFloat(prompt('Inserte el segundo numero'))) {
//     if (numero1 < numero2) {
//         alert (`El numero mayor es : ${numero2} !`);
//     }else if (numero1 > numero2) {
//         alert (`El numero mayor es : ${numero1} !`);
//     }else
//         alert (`Los numeros son iguales!`);
//     return;
// }

// function triple (numero1 = parseFloat(prompt('Inserte el numero'))) {
//     let resultado = parseFloat(numero1 * numero1) ;
//     console.log(`El resultado de multiplicar por él mismo es: ${resultado}!`);
//     return resultado;
// }