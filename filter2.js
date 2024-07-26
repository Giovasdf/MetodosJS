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

let aniosDeExperiencia = experiencias.filter(
    function (experiencia){
        return experiencia.anios > 2;
    }
);

console.log(aniosDeExperiencia);
