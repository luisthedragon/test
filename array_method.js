let articulos = [
  {nombre: "bici", costo: 884},
  {nombre: "tv", costo: 48182},
  {nombre: "libro", costo: 837},
  {nombre: "celular", costo: 1355},
  {nombre: "laptop", costo: 4235},
  {nombre: "teclado", costo: 123},
  {nombre: "audifonos", costo: 45}
]

let articulosFil = articulos.filter(function(articulo) {
  return articulo.costo <= 500
})

console.log(articulosFil)

let nomArticulos = articulos.map(function(articulo) {
  return articulo.nombre
})

console.log(nomArticulos)

let encuentraArt = articulos.find(function(articulo) {
  return articulo.nombre === "laptop"
})

console.log(encuentraArt)

articulos.forEach(function(articulo) {
  console.log(articulo.nombre)
});

let articulosBaratos = articulos.some(function(articulo) {
  return articulo.costo <= 700
})

console.log(articulosBaratos)
console.log(typeof(articulos[0].numero))
