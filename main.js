//this makes sure that my document has been loaded 
document.addEventListener('DOMContentLoaded', () => {

    //json with main content
const jsonContentData = [
    {"title": "Qué es HTML", 
    "content": "HTML significa Hyper-Text Markup Language, o Lenguaje de Marcado de HiperTexto. Es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. HTML no es un lenguaje de programación; es un lenguaje de marcado que define la estructura del contenido."},
    {"title": "Qué es CSS", 
    "content": "CSS, o de sus siglas en inglés, Cascading Style Sheets, o en español, Hojas de Estilo en Cascada, es un lenguaje de diseño gráfico para definir crear como se presentará un documento estructurado escrito en un lenguaje de marcado (como HTML). Es usualmente usado para establecer el diseño visual de documentos web, interfaces de usuario escritas en HTML o XHTML. Junto con HTML y JavaScript, CSS es una tecnología usada por muchos sitios web para crear páginas visualmente atractivas, incluso aplicaciones móviles. CSS está diseñado principalmente para marcar la separación del contenido del documento y la forma de presentación del mismo, indicando características tales como las capas o layouts, los colores y las fuentes. Esta separación busca mejorar la accesibilidad del documento, proveer más flexibilidad y control en la especificacipon de características presentacionales, permite que varios documentos HTML compartan el mismo estilo usando una sola hoja de estilos separada en un archivo '.css' y reduce la complejidad y repetición del código."},
    {"title": "Qué es JS", "content": "JS es..."}
];

//looks for side menu 
let menu = document.getElementById('menu');
let titleChosen = document.getElementById('tituloElegido');
let contentChosen = document.getElementById('contenidoElegido');
//fills up side menu with the json titles
jsonContentData.forEach(item => {
    const liItem = document.createElement('li');
    liItem.innerHTML = item.title;
    menu.appendChild(liItem);
    liItem.addEventListener('click', () => {

        //now look for container to fill with title and content
        titleChosen.innerHTML = item.title;
        contentChosen.innerHTML = item.content;
    })
});
let terminoBuscado = document.getElementById("busqueda");
let botonBusqueda = document.getElementById("buscador");
botonBusqueda.addEventListener('click', buscarTerminoYHighlight());

function buscarTerminoYHighlight(){
jsonContentData.forEach(item => {
    if (item.content.toLowerCase().includes(terminoBuscado.value)){
        titleChosen.innerHTML = item.title;
        contentChosen.innerHTML = item.content; 
    } 
})

};


})