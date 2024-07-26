var deudas = [10000,5000,50000,35000];

var sumatoriaDeudas = deudas.reduce(function(contador,deuda){
    return contador + deuda;
});

console.log(sumatoriaDeudas);