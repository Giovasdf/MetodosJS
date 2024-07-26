var autosCompactos = [
  { marca: "Toyota", modelo: "Corolla", combustible: "Gasolina" },
  { marca: "Mazda", modelo: "3", combustible: "Gasolina" },
  { marca: "Honda", modelo: "Civic", combustible: "Gasolina" },
  { marca: "Bmw", modelo: "116d", combustible: "Diesel" },
];
var autosDeportivos = [
  { marca: "Opel", modelo: "Astra OPC", combustible: "Gasolina" },
  { marca: "Renault", modelo: "Megane RS", combustible: "Gasolina" },
  { marca: "Mitsubishi", modelo: "Lancer Evo", combustible: "Gasolina" },
];


var autos = autosCompactos.concat(autosDeportivos);
console.log(autos);