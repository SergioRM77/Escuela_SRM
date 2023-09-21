// Promesas
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

//Se crea una promesa para obtener los productos, le decimos
//que espere 500ms para obtener los productos
//si resuelve te da productos
function conseguirProductos(){
    return new Promise((resolve, reject) => {
        console.log("Cargando productos...");
        setTimeout(() => {
            resolve(productos);
            reject(new Error("No hay productos disponibles"));
        }, 1500);
    });
}

function productoComprado(nombreProducto){
    return new Promise((resolve, reject) => {
        console.log("Comprando producto:");

        setTimeout(() => {
            resolve(
                {
                    producto: nombreProducto,
                    cliente: "Juan",
                }
            );
            // reject(new Error("No se pudo comprar el producto"));
        }, 1500);
    });
}

function procesarVenta(venta){
    console.log("Producto comprado:", venta);

        //quitamos el producto de la lista
        productos = productos.filter((producto) => {
            return producto.nombre != venta.producto;
        });
    }

//una vez llamado a los proudcos luego le decimos que lo que te devuelve
//que lo muestre en consola
conseguirProductos()
    .then((items) => {
        console.log("Productos disponibles", items);

        console.log("Haciendo compra:")
        return productoComprado("Tablet");
    })
    .then(venta => {
        procesarVenta(venta);

        return productoComprado("Cámara");
    })
    .then(venta => {

        procesarVenta(venta);
            
        return productoComprado("Monitor");
    })
    .then(venta => {
        procesarVenta(venta);
    })
    .catch((error) => console.log(error))
    .finally((() => {
        if (productos.length >= 1) {
            console.log("Productos restantes:", productos);
        } else {
            console.log("No hay productos disponibles");
        }
        console.log("Fin de promesa");
    })
);

// Promise.all([conseguirProductos(), productoComprado("Cámara"), productoComprado("Monitor")])
//     .then(venta => {
//         console.log(venta)}
// );