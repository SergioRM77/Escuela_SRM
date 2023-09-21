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


export function conseguirProductos(){
    return new Promise((resolve, reject) => {
        console.log("Cargando productos...");
        setTimeout(() => {
            resolve(productos);
            reject(new Error("No hay productos disponibles"));
        }, 3500);
    });
}

// conseguirProductos().then((productos) => console.log(productos))

async function getProductosAsync(){
    try {

        let misProductos = await conseguirProductos();
        
        //varios await al mismo tiempo
        // let multiPromesas = await Promise.all([conseguirProductos1(), conseguirProductos2(), ...]);
        console.log(misProductos);
    } catch (error) {
        console.log(error);
    }
}

getProductosAsync();