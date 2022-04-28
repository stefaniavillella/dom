// DESAFIO DOM


// CREO Y AGREGO DIV CON ETIQUETA PARA TÍTULO

let div = document.createElement("div");
div.innerHTML = ` <div>
                    <h2> LISTA DE PRODUCTOS </h2>
                  </div>`;
 
document.body.appendChild(div);






// CREO Y AGREGO LISTADO DE PRODUCTOS Y PRECIOS

const producto = [
    { id: 1, nombre: "Nube", precio: 500 },
    { id: 2, nombre: "Unicornio", precio: 400 },
    { id: 3, nombre: "Sirena", precio: 250 },
    { id: 4, nombre: "Selva", precio: 500 },
    { id: 5, nombre: "Rústico", precio: 600 },
    { id: 6, nombre: "LOL", precio: 500 },
];


for (const productos of producto) {
    let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `<h3> Kit ${productos.nombre} </h3>
                            <p> $${productos.precio}</p>`;
    document.body.appendChild(contenedor);
}

let parrafo = document.querySelector("#contenedor p") 
let contenedor = document.querySelector("#contenedor")





// CAMBIO CONTENIDO DE ELEMENTO HTML

let saludar = document.getElementById("saludo");
console.log( saludo.innerText );

saludo.innerText = "Hola gente";
console.log( saludo.innerText );


// GENERO SALUDO ALEATORIO

const saludoAleatorio = [
   "Hola comunidad",
   "Hola gente",
   "Bienvenidos"
]
saludo.innerText = saludoAleatorio[random(0,2)];

function random (min,max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
