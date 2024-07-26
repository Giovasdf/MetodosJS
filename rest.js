//Operador REST (...)
// Descripción: Permite representar un número indefinido de argumentos como un arreglo.

// Pasos:

// Se usa el operador ... antes de una variable en una función o declaración de arreglo.
// En una función, captura todos los argumentos restantes en un solo arreglo.
// En una declaración de arreglo, captura todos los elementos restantes en un solo arreglo.

function sumar(...numeros){
    return numeros.reduce((acumulador, num)=> 
        acumulador+num,0
    );
}


console.log(sumar(1,2,3,4,5,6));