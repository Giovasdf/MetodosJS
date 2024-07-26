var experiencias = [
  {
    titulo: "Practica",
    anios: 1,
  },
  {
    titulo: "Programador Junior",
    anios: 2,
  },
  {
    titulo: "Programador Senior",
    anios: 4,
  },
  {
    titulo: "Jefe de proyecto",
    anios: 5,
  },
];


var aniosDeExperiencia = experiencias.reduce(
    //function
    function(acumulador, experiencia){
        return acumulador + experiencia.anios;
    }
    ,0
);

console.log(aniosDeExperiencia);