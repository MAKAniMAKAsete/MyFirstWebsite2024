document.addEventListener('DOMContentLoaded', () => {

const jsonContentData = [
    {"title": "Qué es HTML", "content": "HTML es..."},
    {"title": "Qué es CSS", "content": "CSS es..."}
];

let menu = document.getElementById('menu');

jsonContentData.forEach(item => {
    const liItem = document.createElement('li');
    liItem.content = item.title;
    liItem.innerHTML = item.title;
    menu.appendChild(liItem);
});
console.log("hello")
})