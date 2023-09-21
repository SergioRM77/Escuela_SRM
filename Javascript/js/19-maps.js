const gadgets = new Map();
const antiguos_gadgets = {
    4: "portatil",
    "5": "altavoz",
    seis: "gafas"
}

gadgets.set('1', "PC");
gadgets.set('2', "TV");
gadgets.set(3, "Tablet")
    .set('isOlder', true);

console.log(gadgets);

const gadgets2 = new Map( Object.entries(antiguos_gadgets));

gadgets2.set('1', "PC");
gadgets2.set('2', "TV");
gadgets2.set(3, "Tablet")
    .set('isOlder', true);

console.log(gadgets2);

console.log(gadgets2.get(3));//Tablet
// console.log(gadgets2.entries());    //DUDA***