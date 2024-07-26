var clientes = [
    {nombre: 'Juan', edad: 28},
    {nombre: 'Carlos', edad: 17},
    {nombre: 'Karla', edad: 27},
   ];

var adultos = clientes.filter(
    function (cliente){
        return cliente.edad >= 18;
    }
);
console.log(adultos);