//this makes sure that my document has been loaded 
document.addEventListener('DOMContentLoaded', () => {

    //json with main content
const jsonContentData = [
    {"title": "Qué es HTML", "content": "HTML es..."},
    {"title": "Qué es CSS", "content": "CSS es..."},
    {"title": "Qué es JS", "content": "JS es..."}
];

//looks for side menu 
let menu = document.getElementById('menu');

//fills up side menu with the json titles
jsonContentData.forEach(item => {
    const liItem = document.createElement('li');
    liItem.innerHTML = item.title;
    menu.appendChild(liItem);
});

})