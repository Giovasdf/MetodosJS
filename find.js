var productos = [
  { nombre: "coca-cola", precio: 990 },
  { nombre: "papas fritas", precio: 590 },
  { nombre: "ramitas de queso", precio: 290 },
  { nombre: "kapo", precio: 190 },
];

var kapo = productos.find(
    function (producto) {
        // return producto.nombre == "kapo";
        return producto.precio == 290;
    }
);

console.log(kapo);