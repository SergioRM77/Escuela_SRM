let gadgets = new Set(["movil", "ratón", "pantalla", "pantalón"]);
console.log(gadgets)

gadgets.forEach(function(item) {
    console.log(item);
})

//guarda al final
gadgets.add("alfombra");

gadgets.delete("ratón");
gadgets.delete("pantalla");

//comprueba si existe
console.log(gadgets.has("ratón"));

console.log(gadgets.size)
console.log(gadgets)

gadgets.clear();