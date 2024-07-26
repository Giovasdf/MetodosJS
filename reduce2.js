var clientes = [
  { nombre: "Juan", edad: 28 },
  { nombre: "Carlos", edad: 17 },
  { nombre: "Karla", edad: 27 },
];
//| Juan | Carlos | Karla

var nombres = clientes.reduce(function(acumulador, cliente){
    return acumulador + ' | ' + cliente.nombre;
},'');

console.log(nombres);
