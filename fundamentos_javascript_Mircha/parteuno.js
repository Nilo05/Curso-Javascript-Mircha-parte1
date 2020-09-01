//Primera parte del curso. Fundamentos. videos (1 - 43)

// Problemas propuestos video 34

// 1) Programa una función que cuente el número de caracteres de una cadena de
// texto, pe. miFuncion("Hola Mundo") devolverá 10.

//fucnion anonima clasica (declarada)
      // function longitud(cadena = ''){
      //   if ( !isNaN(cadena) || !cadena){
      //     console.log('La cadena no es valida o no existe');
      //   }
      //   else
      //   {
      //     const long = cadena.length
      //     console.log(`${long} es la longitud de la cadena de texto`)
      //   }
      // }
      // longitud('j')


//funcion Expresada
      // const long = function(cadena){
      //   if (!isNaN(cadena)) {
      //     console.log('cadena no valida');
      //   }
      //   else{
      //     console.log(`${cadena.length} es la longitud de la cadena`);
      //   }
      // }
      // long('hi')

//funcion flecha
          // const long = (cadena='') => {
          // if(!isNaN(cadena) || !cadena){
          //   console.log('Cadena no valida o inexistente');
          // }
          // else
          // {
          //   console.log(`${cadena.length} es la longitud de la cadena`);
          //   }
          // }
          // long('hola')

//funcion flecha codigo mas recortado
          // const long = (cadena='') =>
          // (!isNaN(cadena) || !cadena)? console.log('Cadena no valida o inexistente'):
          // console.log(`${cadena.length} es la longitud de la cadena`);
          //
          // long('hola mundo')



// 2) Programa una función que te devuelva el texto recortado según el número
// de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

//funcion declarada:
          // function recortarCadena(cadena = '', num = undefined){
          //   if(!isNaN(cadena) || !cadena || !num || isNaN(num) || Math.sign(num)===-1){
          //     console.log('Debe ingresar una cadena seguido de coma seguido de un numero positivo');
          //   }
          //   else {
          //     console.log(`La nueva cadena es "${cadena.substring(0,num)}"`);
          //   }
          // }
          // recortarCadena('hola mundo',4)


//funcion Expresada
          // const recortar = function(cadena, num = undefined){
          //   if(!isNaN(cadena) || !cadena || !num || isNaN(num) || Math.sign(num)===-1){
          //     console.log('Debe ingresar una cadena seguido de coma seguido de un numero positivo');
          //   }
          //   else {
          //     console.log(`La nueva cadena es "${cadena.substring(0,num)}"`);
          //   }
          // }
          // recortar('hola que tal',8)

//funcion flecha
          // const recortar = (cadena = '',num = undefined) => {
          //   if(!isNaN(cadena) || !cadena || !num || isNaN(num) || Math.sign(num)===-1){
          //   return console.log('Debe ingresar una cadena seguido de coma seguido de un numero positivo');
          //   }
          //     console.log(`La nueva cadena es "${cadena.substring(0,num)}"`);
          //
          // }
          //
          // recortar("",4)

//funcion flecha codigo mas corto
          // const recortar = (cadena='',num = undefined) =>
          //   (!isNaN(cadena) || !cadena || !num || isNaN(num) || Math.sign(num)===-1)
          //     ? console.log('Debe ingresar una cadena seguido de coma seguido de un numero positivo'):
          //     console.log(`La nueva cadena es "${cadena.substring(0,num)}"`)
          //
          // recortar('hola mundo',4)

// 3) Programa una función que dada una String te devuelva un Array de textos
// separados por cierto caracter, pe. miFuncion('hola que tal', ' ')
// devolverá ['hola', 'que', 'tal'].

          // const separar = (cadena = '', separador = undefined) =>
          //   (!cadena || !isNaN(cadena))
          //     ? console.log('No ingresaste cadena de texto')
          //     : (separador === undefined)
          //         ? console.log('No ingresaste separador')
          //         : console.log(cadena.split(separador));
          //
          // separar('Hola que tal como te va', ' ')

// 4) Programa una función que repita un texto X veces,
// pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


//funcion flecha
            // const repetir = (cadena = '', veces = undefined) => {
            //   if(!isNaN(cadena) || !cadena){
            //     return console.log('debe ingresar una cadena de texto')
            //   }
            //   if (veces === undefined || isNaN(veces) || Math.sign(veces)=== -1) {
            //     return console.log('no ingreso el numero de veces a repetir la cadena');
            //   }
            //
            //     for (let i = 1; i <= veces; i++){
            //       console.log(`${cadena}, ${i}`);
            //     }
            //   }
            //
            //   repetir('hola mundo ',3)



//********************************************************************************************


// Problemas propuestos video 35

// 5) Programa una función que invierta las palabras de una cadena de texto,
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

        // const invertirCadena = (cadena="") =>
        // (!cadena)
        // ? console.log('Debe ingresar una cadena para invertir')
        // : console.log(cadena.split('').reverse().join(''));
        //
        // invertirCadena('Hola Mundo');

// 6) Programa una función para contar el número de veces que se repite una
// palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo")
// devolverá 2.



        // const contPalabra = (cadena = '', buscar='') => {
        //   if(!cadena) return console.log('No ingresaste el texto largo');
        //   if(!buscar) return console.log('No ingresaste la palabra a evaluar');
        //
        //   let i = 0;
        //   let cont = 0;
        //
        //     while (i !== -1){
        //       i = cadena.indexOf(buscar,i);
        //       if (i !== -1){
        //         i++;
        //         cont++;
        //       }
        //     }
        //
        //     return console.log(`La palabra '${buscar}' esta en ${cont} veces`);
        //
        // }
        // contPalabra('hola hola que tal hola', 'hola')

// 7) Programa una función que valide si una palabra o frase dada, es un
// palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas")
// devolverá true.

          // const polindromo = (cadena = '') => {
          //   if(!cadena) return console.log('La cadena esta vacia');
          //   if(!isNaN(cadena)) return console.log('No se adminten numeros');
          //
          //
          //     const cadena1 = cadena.toLowerCase().split(' ').join('');
          //     const cadena2 = cadena.toLowerCase().split('').reverse().join('').split(' ').join('');
          //
          //       return (cadena1 === cadena2)
          //       ? console.log('La cadena ingresada es un palindromo')
          //       : console.log('La cadena NO es un palindromo');
          //   }
          //
          // polindromo('Acaso Hubo buhos aca')

// 8) Programa una función que elimine cierto patrón de caracteres de un texto
// dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
// devolverá  "1, 2, 3, 4 y 5.
          
    //sin Expresiones regulares
          /*const eliminarPatron = (cadena= '', patron = '') => {
            if (!cadena) return console.log('Debe ingresar una cadena');
            if (!isNaN(cadena)) return console.log('No se admiten numeros en la primera entrada');
            if (!patron) return console.log('Debe ingresar una patron a eliminar');
            if (!isNaN(patron)) return console.log('No se admiten numeros en la segunda entrada');
            
            i = 0;
            let cadena2 = cadena;
            let cadena3 = '';

            while(i !== -1){
              i = cadena2.indexOf(patron,i);
              cadena3 = cadena2.replace(patron,'')
              cadena2 = cadena3;
              if (i !== -1) {
                i++;              
              }
            }
            
            return  console.log(`Cadena original: ${cadena}`),
                    console.log(`Resultado: ${cadena2}`);
                     
                   // console.log(cadena) 
            
          }          

          eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");  */

    //Con expresiones regulares
            /*const eliminarPatron = (cadena = '', patron = '') =>
              (!cadena)
                ? console.warn('debe ingresar una cadena')
                : (!patron)
                  ? console.warn('debe ingresar un patron')
                  : console.log(cadena.replace(new RegExp(patron,"ig"),''))

            eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5",'xyz'); */

//*************************************************************

// Problemas propuestos video 36

/*9) Programa una función que obtenga un numero aleatorio 
entre 501 y 600.*/    

        // const numAleatorio = () => 
        //   console.log(Math.round(Math.random()*(600-501)+501));  
        
        // numAleatorio(); 

/*10) Programa una función que reciba un número y evalúe si es 
capicúa o no (que se lee igual en un sentido que en otro), 
pe. miFuncion(2002) devolverá true.*/

        // const numCapicua = (num = undefined) => {
        //   if (num === undefined)
        //     return console.log('No ha ingresado numero')
        //   if (typeof num !== 'number')
        //     return console.log('El dato debe ser tipo numero')
          
        //   num = num.toString();
        //   let num2 = num.split('').reverse().join('');

        //       return (num2 === num)
        //         ? console.log(`El numero ${num} Es capicua. Invertido es: ${num2}`)
        //         : console.log(`El numero ${num} NO es capicua. Invertido es: ${num2}`)
        //   }  

        // numCapicua(2002);


/*11) Programa una función que calcule el factorial de un número 
El factorial de un entero positivo n, se define como el producto 
 todos los números enteros positivos desde 1 hasta n), 
pe. miFuncion(5) devolverá 120.*/   

        // const factorial = (num = undefined) => {
        //   if (num === undefined) return console.log('Ingrese un numero'); 
        //   if (typeof num !== 'number') return console.log('El dato debe ser tipo numero');
        //   if (num === 0) return console.log('No puede ser cero');
        //   if (Math.sign(num) === -1) return console.log('No se admiten numeros negativos')
          
        //   let fac = 1;
        //     for (let i = 1; i <= num; i++) {
        //       fac *= i;
        //      } 

        //      return console.log(`El factorial de ${num} es: ${fac}`);
        // }

        // factorial(5);

//********************************************************
// propuestos video 37

// 12) Programa una función que determine si un número es primo 
//(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) 
//devolverá true.

    // forma 1 

       //  const numeroPrimo = (num = undefined) => {
       //    if (num === undefined) return console.log('debe ingresar un numero')
       //    if (typeof num !== 'number') return console.log('Solo se admiten numero')
       //    if (num === 0 || num === 1 || Math.sign(num) ===-1) return console.log('debe ser un en entero positivo mayor a uno')
         
       //    cont = 0;
       //    for (let i = 1;i<=num;i++){
       //      if(num%i === 0) cont++            
       //    }
       //      return (cont == 2)
       //              ? console.log(`El numero ${num} es primo`)
       //              : console.log(`El numero ${num} No es primo`)
       //   }

       // numeroPrimo(1) 

    // forma dos (mejor rendimiento)

        // const numeroPrimo = (num = undefined) => {
        //   if (num === undefined) return console.log('debe ingresar un numero')
        //   if (typeof num !== 'number') return console.log('Solo se admiten numero')
        //   if (num === 0 || num === 1 || Math.sign(num) ===-1) return console.log('debe ser un en entero positivo mayor a uno')
         
        //   let divisible = false;

        //   for(let i = 2; i < num; i++){
        //     if (num%i === 0){
        //       divisible = true;
        //       break;
        //     }
        //   }

        //   return (divisible)
        //     ? console.log(`El numero ${num} No es primo`)
        //     : console.log(`El numero ${num} es primo`)
        // }

        // numeroPrimo(7);

// 13) Programa una función que determine si un número es par o impar, 
// pe. miFuncion(29) devolverá Impar. 

        // const numeroParImpar = (num = undefined) => {
        //   if (num === undefined) return console.log('debe ingresar un numero')
        //   if (typeof num !== 'number') return console.log('Solo se admiten numero')
        //   if (num === 0) return console.log('debe ser un en entero diferente de cero')
         
        //  return (num%2 === 0)
        //           ? console.log(`El numero ${num} Es PAR`)
        //           : console.log(`El numero ${num} es IMPAR`)

        // }  

        // numeroParImpar(29);   


// 14) Programa una función para convertir grados Celsius a Fahrenheit 
// y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

        // const gradosCAF = (num = undefined, grados = '') => {
        //   if (num === undefined) return console.log('Debe ingresar un numero')
        //   if (typeof num !== 'number') return console.log('El dato debe ser tipo numero')
        //   if (!grados) return console.log('debe ingresar F para Fahrenheit o C para Celsius')
        //   if (typeof grados !== 'string') return console.log('El dato debe ser tipo String')
        //     grados = grados.toLowerCase()
        //   if (grados !== 'c' && grados !== 'f') return console.log('letra no valida. solo se admiten F y C')  
        
        //   return (grados === 'c')
        //           ? console.log(`${num} ºC equivale a ${((num*1.8)+32)} ºF`)
        //           : console.log(`${num} ºF equivale a ${((num-32)/1.8)} ºC`)
        // }         

        // gradosCAF(50,'c');


//***************************************************************************

//Propuestos videos 38


// 15) Programa una función para convertir números de base binaria a decimal y viceversa, 
// pe. miFuncion(100,2) devolverá 4 base 10.

          // const baseDecYBin = (num = undefined, base = undefined) => {
          //   if (!num) return console.log('debe ingresar un numero')
          //   if (typeof num !== "number") return console.log('Solo se admiten numeros')
          //   if (!base) return console.log('debe ingresar base 2 o base 10') 
          //   if (typeof base !== "number") return console.log('Solo se admiten numeros')
          //   if ((base !== 2) && (base !== 10)) return console.log('valor no admitido')
            
          //   return (base === 2)
          //           ? console.log(`${num} base ${base}: ${parseInt(num,base)} base 10`)
          //           : console.log(`${num} base ${base}: ${num.toString(2)} base 2`)

          // }

          // baseDecYBin(111,10);

// 16) Programa una función que devuelva el monto final después de aplicar un descuento 
// a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

          // const descuento = (inicial = undefined, descuento = undefined) => {
          //   if (inicial === undefined) return console.log('debe ingresar valor inical')
          //   if (typeof inicial !== "number") return console.log('Solo se admiten numeros')
          //   if (Math.sign(inicial) === -1) return console.log('No se admiten valores negativos')  
          //   if (descuento === undefined) return console.log('debe ingresar descuento en %')
          //   if (typeof descuento !== "number") return console.log('Solo se admiten numeros')
          //   if ((descuento <= 0) || (descuento > 100)) return console.log('Debe ingresar valor positivo menor a 100')

          //   return console.log(`${inicial} - descuento del ${descuento}% = ${inicial - inicial*(descuento/100)}`)

          // }    

          // descuento(1000,20); 

// 17) Programa una función que dada una fecha válida determine cuantos 
// os han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 
// 35 años (en 2020).          

          // var fechaEnMiliseg = Date.now(); sintaxis hora en milisegundos
          // desde las 0 horas UTC (londres) del primero de enero de 1970

          // console.log(Date.now()) // milisegundos de hoy
          // console.log(New Date(1991,5,27)); // ingresar fecha 




     // solucion 1     

        //   const cuantosAniosPasaron = (anio = undefined, mes = undefined, dia = undefined) => {
        //     if (!anio) return console.log('Debe ingresar un año')
        //     if (typeof anio !== 'number') return console.log('Solo se admiten numeros')  
        //     if (!mes) return console.log('Debe ingresar un mes')
        //     if (typeof mes !== 'number') return console.log('Solo se admiten numeros')
        //     if (!dia) return console.log('Debe ingresar un dia')
        //     if (typeof dia !== 'number') return console.log('Solo se admiten numeros')  
            

        //     const hoy = Date.now();
        //     const ref = new Date(anio,mes-1,dia).getTime();
        //     const dif = hoy - ref;
        //     const horasconv = 1000*60*60;
        //     const diasconv = 1000*60*60*24;
        //     const aniosconv = 1000*60*60*24*365;

        //     return console.log(`Desde la fecha ingredada han pasado ${Math.floor(dif/aniosconv)} años`),
        //            console.log(`o ${Math.floor(dif/diasconv)} dias`),
        //            console.log(`o ${Math.floor(dif/horasconv)} horas`)
        //   }



        // cuantosAniosPasaron(1991,5,27);

   // solucion 2     

        // const cuantosAnios = (fecha = undefined) => {
        //   if (!fecha) return console.log('no ingreso fecha')
        //   if (!(fecha instanceof Date)) return console.log('No ingreso una fecha valida')
          
        //   let hoyMenosFecha = new Date().getTime()-fecha.getTime(); 
        //   aniosMs = 1000*60*60*24*360
        //   aniosHumanos = Math.floor(hoyMenosFecha/aniosMs); 

        //   return (Math.sign(aniosHumanos) === -1)
        //     ? console.log(`faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        //     : (Math.sign(aniosHumanos) === 1)
        //        ? console.log(`Han pasado ${Math.abs(aniosHumanos)} años desde ${fecha.getFullYear()}`)
        //        : console.log(`Estamos en el año ingresado ${fecha.getFullYear()}`) 
        // }

        // cuantosAnios(new Date(2022,4,27));


//*******************************************************************

//Propuestos video 39 (Expresiones regulares)


// 18) Programa una función que dada una cadena de texto cuente el número 
// de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva 
// Vocales: 4, consonantes: 5.

    // solucion 1. Sin expresiones regulares

          // const vocalesConsonantes = (cadena = '') => {
          //   if (!cadena) return console.log('Debe ingresar una cadena')
          //   if (typeof cadena !== 'string') return console.log('solo se admiten strings') 
            
          //   let cont = 0;
          //   let cadena2 = cadena.toLowerCase().split(' ').join('')

          //   for (let letra of cadena2) {
          //     if ((letra === 'a') || (letra === 'e') || (letra === 'i') || (letra === 'o') || (letra === 'u'))
          //             cont++
          //   }

          //   return console.log(`En la cadena hay ${cont} vocales y hay ${cadena2.length-cont} consonantes`)

          // }

          // vocalesConsonantes('Hola Mundo');

    // solucion 2. Con espresiones regulares
          // const vocalesConsonantes = (cadena = '') => {
          //   if (!cadena) return console.log('Debe ingresar una cadena')
          //   if (typeof cadena !== 'string') return console.log('solo se admiten strings') 

          //     let vocales = 0;
          //     let consonantes = 0;

          //     cadena = cadena.toLowerCase();

          //     for(let letra of cadena){
          //       if(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/.test(letra)) vocales++;
                
          //       if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;                
          //     }

          //     console.log({
          //       cadena,
          //       vocales,
          //       consonantes
          //     })

          // }

          // vocalesConsonantes('Hola Mundo')



// 19) Programa una función que valide que un texto sea un nombre válido, 
// pe. miFuncion("Jonathan MirCha") devolverá verdadero.    

          // const validarNombre = (nombre = '') => {
          //   if (!nombre) return console.log('No ha ingresado su nombre')
          //   if (typeof nombre !== 'string') return console.log('solo se admiten cadenas de texto')
              
          //   let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);
            
          //   return (expReg)   
          //     ? console.log(`${nombre}, es un nombre valido`)
          //     : console.log(`${nombre}, NO es un nombre valido`)
          // }  

          // validarNombre('Pepito Perez');    

// 20) Programa una función que valide que un texto sea un email válido, 
// pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

        //   const validarEmail = (email = '') => {
        //     if (!email) return console.log('No ha ingresado su email')
        //     if (typeof email !== 'string') return console.log('solo se admiten cadenas de texto')

        //     let expReg = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

        //      return (expReg)   
        //       ? console.log(`${email}, es un email valido`)
        //       : console.log(`${email}, NO es un email valido`)  
         
        //   }

        // validarEmail('yulmerdanilo@gmail.com');


//**********************************************************************
// Propuestos video 40 (Arreglos)
 

// 21) Programa una función que dado un array numérico devuelve otro array 
// con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) 
// devolverá [1, 16, 25].

      // mi solucion
          //   const elevarCuadrado = (array = undefined) => {
          //     if (array === undefined) return console.log('Debes ingresar un arreglo de numeros');
          //     if (!(array instanceof Array)) return console.log('solo se admiten arreglos');
          //     if (array.length === 0) return console.log('El arreglo est vacio');

          //     for (let num of array){
          //       if (typeof num !== 'number') return console.log(`'${num}' no es un numeros`); 
          //     }
              
          //     let array2 = [];

          //     for (let i = 0; i<array.length; i++){
          //       array2[i] = Math.pow(array[i],2);
          //     }

          //     return console.log(array2);               

          // }  

          //   elevarCuadrado([1,'hola que tal',3]); 

    // solucion Mircha  
            
          //   const elevarCuadrado = (array = undefined) => {
          //     if (array === undefined) return console.log('Debes ingresar un arreglo de numeros');
          //     if (!(array instanceof Array)) return console.log('solo se admiten arreglos');
          //     if (array.length === 0) return console.log('El arreglo est vacio');

          //     for (let num of array){
          //       if (typeof num !== 'number') return console.log(`'${num}' no es un numeros`); 
          //     }
              
          //     const newarray = array.map(el => el*el);

          //     return console.log(`El arreglo elevado al cuadrado es: ${newarray}`);               

          // }  

          //   elevarCuadrado([1,2,3]); 




// 22) Programa una función que dado un array devuelva el número mas alto 
// y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) 
// devolverá [99, -60].

      //mi solucion
            // const menorMayor = (array = undefined) => {
            //   if (array === undefined) return console.log('Debes ingresar un arreglo de numeros');
            //   if (!(array instanceof Array)) return console.log('solo se admiten arreglos');
            //   if (array.length === 0) return console.log('El arreglo est vacio');

            //     for (let num of array){
            //       if (typeof num !== 'number') return console.log(`'${num}' no es un numeros`); 
            //     }

            //   let mayor = array[0];
            //   let menor = array[0];

            //   for (let i = 1; i < array.length; i++){
            //     (mayor > array[i])
            //       ? mayor = mayor
            //       : mayor = array[i];
                
            //     (menor < array[i])
            //       ? menor = menor
            //       : menor = array[i]; 
                
            //    } 

            //     return console.log(`De ${array} el mayor es: ${mayor} y el menor es: ${menor}`)

            // }

            //   menorMayor([100,2,-3,4,500,6,2,88,9]);

      //solucion Mircha

            // const menorMayor = (array = undefined) => {
            //   if (array === undefined) return console.log('Debes ingresar un arreglo de numeros');
            //   if (!(array instanceof Array)) return console.log('solo se admiten arreglos');
            //   if (array.length === 0) return console.log('El arreglo est vacio');

            //   for (let num of array){
            //     if (typeof num !== 'number') return console.log(`'${num}' no es un numeros`); 
            //   }

            //     return console.log(`Arreglo original: ${array}\nValor mayor: ${Math.max(...array)}\nValor menor: ${Math.min(...array)}`)

            // }

            //   menorMayor([100,2,-3,4,500,6,2,88,9]);
                  
          

// 23) Programa una función que dado un array de números devuelva un 
// objeto con 2 arreglos en el primero almacena los números pares y en 
// el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá 
// {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

      // Mi solucion
            // const parImpar = (array = undefined) => {
            //   if (array === undefined) return console.log('Debes ingresar un arreglo de numeros');
            //   if (!(array instanceof Array)) return console.log('solo se admiten arreglos');
            //   if (array.length === 0) return console.log('El arreglo est vacio');

            //     for (let num of array){
            //       if (typeof num !== 'number') return console.log(`'${num}' no es un numeros`); 
            //     }

            //   let par = [], impar = [], contpar = 0, contimpar = 0;

            //   for (let i = 0; i < array.length; i++){

            //        if (array[i]%2 === 0) {
            //           par[contpar] = array[i];
            //           contpar++;
            //        }else{
            //           impar[contimpar] = array[i];
            //           contimpar++;
            //        }
            //   }

            //   resultado = {
            //     array,
            //     par,
            //     impar
            //   }

            //   return  console.log(`El objeto contiene el array original, pares e impares`),
            //           console.log(resultado)
            // }

            // parImpar([1,2,3,4,5,6,7,8,9,0]);

      // solucion Mircha

            // const parImpar = (array = undefined) => {
            //   if (array === undefined) return console.log('Debes ingresar un arreglo de numeros');
            //   if (!(array instanceof Array)) return console.log('solo se admiten arreglos');
            //   if (array.length === 0) return console.log('El arreglo est vacio');

            //   for (let num of array){
            //     if (typeof num !== 'number') return console.log(`'${num}' no es un numeros`); 
            //   }

            //   return console.log({
            //     pares: array.filter(num => num%2 === 0),
            //     impares: array.filter(num => num%2 === 1)
            //   })
             
            // }

            // parImpar([1,2,3,4,5,6,7,8,9,0]);


//****************************************************************

//Propuestos video 41                      

// 24) Programa una función que dado un arreglo de números devuelva un objeto
// con dos arreglos, el primero tendrá los numeros ordenados en forma 
// ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6])
// devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

        // Mi solucion 
            // const ordenarAscDesc = (arr = undefined) => {
            //   if (arr === undefined) return console.log('Debe ingresar un arreglo')
            //   if (!(arr instanceof Array)) return console.log('solo se admiten arreglos de numeros')
            //   if (arr.length === 0) return console.log('El arreglo est vacio');
 
            //   for(let num of arr){
            //     if(typeof num !== 'number') return console.log(`'${num}' no es un numero`)
            //   } 

            //   let asc = arr.map(el => el);
            //   let desc = arr.map(el => el);
            //   let auxa, auxd;
            //    // console.log('--------------------')
            //     for(let r = 0; r<arr.length; r++){
            //       // console.log('este es r: '+r) 
            //       for(let i = 0; i<arr.length-1;i++){
            //           // console.log('este es i: '+i)
            //         if (asc[i]>asc[i+1]) {
            //           auxa = asc[i];
            //           asc[i]=asc[i+1];
            //           asc[i+1] = auxa; 
            //         }
            //         if (desc[i]<desc[i+1]){
            //           auxd = desc[i];
            //           desc[i]=desc[i+1];
            //           desc[i+1] = auxd;
            //         }   
            //         // console.log(r,i)
            //       } 
            //     }                               
            //  let resultado = {
            //   arr,
            //   asc,
            //   desc
            //  }

            // return console.log('objeto con arreglo original, ascendente y descendente'),
            //        console.log(resultado)
            // }         

            // ordenarAscDesc([1,5,8,100,4,7,8,10]);

      // Solucion Mircha      
            // const ordenarAscDesc = (arr = undefined) =>{
            //   if (arr === undefined) return console.log('Debe ingresar un arreglo')
            //   if (!(arr instanceof Array)) return console.log('solo se admiten arreglos de numeros')
            //   if (arr.length === 0) return console.log('El arreglo est vacio');


            //   for(let num of arr){
            //     if(typeof num !== 'number') return console.log(`'${num}' no es un numero`)
            //   } 

            //   return console.log({
            //     arr,
            //     asc: arr.map(el => el).sort((a,b)=>a-b),
            //     desc: arr.map(el => el).sort((a,b)=>b-a)
            //   })

            // }

            //  ordenarAscDesc([1,5,8,100,4,7,8,10]);


// 25) Programa una función que dado un arreglo de elementos, elimine los 
// duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
// devolverá ["x", 10, 2, "10", true].

      // Mi solucion
            // const eliminarDuplicado = (arr = undefined) => {
            //   if (arr === undefined) return console.warn('Debe ingresar una cadena')
            //   if (!(arr instanceof Array)) return console.warn('Solo se admiten arreglos')  
            //   if (arr.length === 0) return console.log('El arreglo est vacio');

            //   let i, i2=0;
            //   for (let elem of arr){
                
            //      i = arr.indexOf(elem)

            //         while (i2 !== -1){
            //           i2 = arr.indexOf(elem,i+1)

            //             if(i2 !== -1){
            //               arr.splice(i2,1)
            //               i = i2-1;
            //             }
            //         }
            //      i2 = 0;                                
            //   }

            //  return console.log(`Este es el arreglo eliminando todos los elemtos repetidos`),
            //         console.log(arr);

  
            // } 

            // eliminarDuplicado(["x", 10, "x", 2, "10", 10, "x",true, true]); 

      // solucion Mircha 1
            
            //  const eliminarDuplicado = (arr = undefined) => {
            //   if (arr === undefined) return console.warn('Debe ingresar una cadena')
            //   if (!(arr instanceof Array)) return console.warn('Solo se admiten arreglos')  
            //   if (arr.length < 2) return console.log('El arreglo debe tener minimo 2 elementos');

            //   return console.log({
            //     original: arr,
            //     sinDuplicados: arr.filter((value,index,self) => self.indexOf(value) === index),
            //   }) 
            // } 

            // eliminarDuplicado(["x", 10, "x", 2, "10", 10, "x",true, true]); 

      // Mas Optimo (con dato tipo set)
      // La naturaleza de este tipo de dato es no tener elementos duplicados

            //  const eliminarDuplicado = (arr = undefined) => {
            //   if (arr === undefined) return console.warn('Debe ingresar una cadena')
            //   if (!(arr instanceof Array)) return console.warn('Solo se admiten arreglos')  
            //   if (arr.length < 2) return console.log('El arreglo debe tener minimo 2 elementos');

            //   return console.log({
            //     original: arr,
            //     sinDuplicados:[...new Set(arr)],
            //   }) 
            // } 

            // eliminarDuplicado(["x", 10, "x", 2, "10", 10, "x",true, true]); 




// 26) Programa una función que dado un arreglo de números obtenga el 
// promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

            // const promedioArr = (arr = undefined) => {
            //   if (arr === undefined) return console.log('Debe ingresar una cadena')
            //   if (!(arr instanceof Array)) return console.log('Solo se admiten arreglos')  
            //   if (arr.length === 0) return console.log('El arreglo est vacio');

            //   for(let num of arr){
            //     if(typeof num !== 'number') return console.log(`'${num}' no es un numero`)
            //   } 

            //   return console.log((arr.reduce((a,b)=>a+b))/arr.length)

            // }

            // promedioArr([9,8,7,6,5,4,3,2,1,0]);

//*********************************************************************

//propuesto video 42. objetos

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes 
// datos: id de la película en IMDB, titulo, director, año de estreno, país 
// o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras 
//   y los 7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha 
//     técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, 
// Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, 
// istory, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, 
// Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.


    class Pelicula{

      constructor ({id, titulo, director, anioEstreno, paises, generos, calificacion}){
      this.id = id;
      this.titulo = titulo;
      this.director = director;
      this.anioEstreno = anioEstreno;
      this.paises = paises; 
      this.generos = generos;
      this.calificacion = calificacion;
     
     

      this.validarIMDB(id);
      this.validarTitulo(titulo);
      this.validarDirector(director);
      this.validarAnio(anioEstreno);
      this.validarPaises(paises);
      this.validarGeneros(generos);
      this.validarCalificacion(calificacion);
      }

      static get listaGeneros(){
      return ['Action','Adult','Adventure','Animation','Biography', 
      'Comedy','Crime','Documentary','Drama','Family','Fantasy','Film Noir','Game-Show', 
      'History','Horror','Musical','Music','Mystery','News','Reality-TV','Romance',
      'Sci-Fi','Short','Sport','Talk-Show','Thriller','War','Western']
      }

      static generosAceptados(){
        return console.log(`Los generos aceptados son: ${Pelicula.listaGeneros.join(', ')}`)
      }


      //Metodos

      validarCadena(propiedad, valor){
        if (!valor) return console.log(`${propiedad} '${valor}' esta vacío`)
        if (typeof valor !== 'string') return console.log(`${propiedad} '${valor}' NO es una cadena de texto`)
        
        return true;
      }

      validarCantidad(propiedad,valor,longitud){
        
        if(valor.length > longitud) return console.log(`Para ${propiedad} se admiten maximo ${longitud} caracteres`)
        
          return true;
        }

      validarNumero(propiedad,valor){
        if (!valor) return console.log(`${propiedad} esta vacío`)
        if (typeof valor !== 'number') return console.log(`'${valor}' NO es un numero`)
        
        return true  
      }  

      validarArreglo(propiedad,valor){
        if (!valor) return console.log(`${propiedad} esta vacío`)
        if (!(valor instanceof Array)) return console.log(`${valor} no es un arreglo`)
        if (valor.length === 0) return console.log(`${propiedad} es un arreglo vacio`)

        for (let val of valor){
          if (typeof val !== 'string') return console.log(`${val} NO es una cadena de texto`)
        }

        return true;  
      }

      //------------------------------------------------------------------
      
      validarIMDB(id){
        if (this.validarCadena('IMDB id',id)){
          if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
            return console.log(`IMDB id '${id}' no es valido, debe tener 9 caracteres, los dos primeros letras y el resto numeros`)

          }
        }
      }

      validarTitulo(titulo){
        if (this.validarCadena('Titulo',titulo)){
          this.validarCantidad('Titulo',titulo,30)         
        }
      }

      validarDirector(director){
        if (this.validarCadena('Director',director)){
          this.validarCantidad('Director',director,20)         
        }
      }

      validarAnio(anioEstreno){
        if (this.validarNumero('año de estreno',anioEstreno)){
          if(!(/^([0-9]){4}$/.test(anioEstreno))){
            return console.log(`año Estreno '${anioEstreno}' no es valido, debe tener un numero entero de 4 digitos`)

          }
        }
      }

      validarPaises(paises){
        this.validarArreglo('Pais o paises de origen',paises)
      }

      validarGeneros(generos){
       if (this.validarArreglo('Generos',generos)){
        for(let genero of generos){         
          if (!Pelicula.listaGeneros.includes(genero)) {
            console.log(`${genero} NO es un genero admitido`)
            Pelicula.generosAceptados()
          }
        }
       }
      }

      validarCalificacion(calificacion){
        if (this.validarNumero('calificacion',calificacion)){
            return (calificacion < 0 || calificacion > 10)
              ? console.log(`${calificacion} NO es valido. Debe ser entre 0 y 10`)
              : this.calificacion = calificacion.toFixed(1);
          }
        }

      fichaTecnica(){
        console.log(`Ficha Técnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño de estreno: "${this.anioEstreno}"\nPaís: "${this.paises.join('-')}"\nGenero(s): ${this.generos.join(', ')}\nCalificacion: "${this.calificacion}"\nIMDB id: "${this.id}"`)
      }  

    }

    // const peli = new Pelicula({
    //   id: 'tt1547122',
    //   titulo: 'Detras del ultimo no hay nadie',
    //   director: 'Pepito perez VII',
    //   anioEstreno: 2018,
    //   paises: ['Colombia','Venezuela'],
    //   generos: ['Action','Drama'],
    //   calificacion: 8.58
    // });

    // peli.fichaTecnica();


    const misPelis = [
    {
      id: 'pp1234567',
      titulo: 'La venganza de la piraña mueca',
      director: 'Juanito cruz',
      anioEstreno: 2017,
      paises: ['Francia','Chile'],
      generos: ['Family','Fantasy'],
      calificacion: 9.21
    },
    {
      id: 'ta1122334',
      titulo: 'Sin corriente',
      director: 'Allam Brito',
      anioEstreno: 2005,
      paises: ['Peru','Rusia'],
      generos: ['War','Sport'],
      calificacion: 7.86
    },
    {
      id: 'lk7654321',
      titulo: '¿Quien fue?',
      director: 'Jhony Se',
      anioEstreno: 1998,
      paises: ['China','Estados Unidos'],
      generos: ['Action','Adult'],
      calificacion: 7.42
    }
    ]

misPelis.forEach(el => new Pelicula(el).fichaTecnica());