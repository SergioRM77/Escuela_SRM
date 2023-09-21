//Objeto literal
let empresa = {
    nombre: "Microsoft",
    sector: "Software",
    servicios: ["Sistemas operativos", "Ofimatica"],
    facturacion: 55_000_000_000
}

type empresa = {
    nombre: string,
    sector: string,
    servicios: [string, string],
    facturacion: number,
    mostrar: () => void
}

let empresa2:empresa = {
    nombre: "Microsoft",
    sector: "Software",
    servicios: ["Sistemas operativos", "Ofimatica"],
    facturacion: 55_000_000_000,
    mostrar: () => {
        console.log(empresa2.nombre)
    }
}