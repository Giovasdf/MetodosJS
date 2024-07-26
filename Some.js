var autos = [
  { marca: "Toyota", modelo: "Corolla", combustible: "Gasolina" },
  { marca: "Mazda", modelo: "3", combustible: "Gasolina" },
  { marca: "Honda", modelo: "Civic", combustible: "Gasolina" },
  { marca: "Bmw", modelo: "116d", combustible: "Diesel" },
];

var algunDiesel = autos.some(
    function(auto){
        return auto.combustible == "Diesel";
    }
);
console.log(algunDiesel);