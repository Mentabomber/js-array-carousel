// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

const imageList = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
let createDiv, createImg;

let containerSelector = document.getElementsByClassName("container");





for(let i = 0; i <= (imageList.length -1); i++){
    
    createDiv = document.createElement("div").classList.add("img-container" + "fresh");

    createImg = document.getElementsByClassName("fresh"); 
    .innerHtml(`<img src=` + imageList + ` alt="static-test-img">`)
    createImg.append(imageList)
    imageList++;

}

console.log(containerSelector);