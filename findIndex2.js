var personas = ["pedro","juan","diego"];

var juanIndice = personas.findIndex(
    function(persona){
        return persona == "juan"
    }
);

console.log(juanIndice);