let clientes = [
  { nombre: "Juan", edad: 28 },
  { nombre: "Carlos", edad: 22 },
  { nombre: "Karla", edad: 27 },
];

clientes.forEach(
    function(cliente){
        console.log(cliente.nombre);
    }
);