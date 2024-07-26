var clientes = [
    {nombre: 'Juan', edad: 28},
    {nombre: 'Carlos', edad: 17},
    {nombre: 'Karla', edad: 27},
   ];

var clientes_modificado = clientes.map(function(cliente){

    if(cliente.edad >=18){
        //es mayor de edad
        cliente.adulto = true;
    }else{
        //es menor de edad
        cliente.adulto  = false;
    }

    return cliente;

});

console.log(clientes_modificado);
