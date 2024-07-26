var numeros = [1,2,3,4,5,6,7];

var AlgunNumMenorTres = numeros.some(
    function (num){
        return num < 3;
    }
);

console.log(AlgunNumMenorTres);