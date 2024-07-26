var productos = [
    { nombre: "coca-cola", precio: 990 },
    { nombre: "papas fritas", precio: 590 },
    { nombre: "ramitas", precio: 290 },
    { nombre: "kapo", precio: 190 },
  ];

  var ramitasIndice = productos.findIndex(
    function(producto){
        return producto.nombre == "ramitas";
    }
  );

  console.log(ramitasIndice);