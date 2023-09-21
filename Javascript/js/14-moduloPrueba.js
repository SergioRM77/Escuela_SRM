let productos = [
    {
        nombre: "Tablet",
        marca: "Samsung",
        precio: 300
    },
    {
        nombre: "Cámara",
        marca: "Canon",
        precio:450
    },
    {
        nombre: "Monitor",
        marca: "LG",
        precio:180
    },
];

function getProductos(){
    productos.forEach(function(producto){
        console.log(producto.nombre);
    });
    return productos;
}

export default getProductos;