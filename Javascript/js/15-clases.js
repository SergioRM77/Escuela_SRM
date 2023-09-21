class Coche{
    //propiedad privada
    #numPuertas = 4;
    //propiedad protegida
    _plazas = 5;

    constructor(marca, modelo, velocidad = 0, color = "blanco"){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.color = color;
    }

    subirVelocidad(aumento){
        this.velocidad += aumento;
    }

    bajaVelocidad(bajada){
        this.velocidad - bajada <= 0 ?
            this.velocidad  = 0 : this.velocidad -= bajada;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(valor){
        this._modelo = valor;
    }

    get numPuertas(){
        return this.#numPuertas;
    }

    get numPlazas(){
        return this._plazas;
    }

    static describir(){
        console.log("Esto es un Coche");
    }
}

const coche1 = new Coche('Ford', 'Focus');
const coche2 = new Coche('Opel', 'Astra');

console.log(coche1.marca);

coche1.subirVelocidad(100);
coche1.modelo = 'Ford 2000';

console.log(coche1.modelo);

Coche.describir();

console.log(coche2.numPuertas);
console.log(coche2._plazas);
console.log(coche2.numPlazas);
console.log(Coche._plazas);

// HERENCIA
class Quad extends Coche{
    constructor(marca, modelo, velocidad = 0, color = "blanco", cilindrada, annio){
        super(marca, modelo, velocidad, 
            color);

        this.cilindrada = cilindrada;
        this.annio = annio;
    }
}

let quad = new Quad('yamaha', 'z-20', 100, 'blanco', 2.5, 2020);

console.log(quad);