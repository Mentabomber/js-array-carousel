// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

const imageList = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
let createImg, createDiv;





for(let i = 0; i <= (imageList.length -1); i++){

    let containerSelector = document.getElementById("container");

    createDiv = document.createElement('div');

    createDiv.classList.add("img-container", "fresh");
    
    containerSelector.append(createDiv);
    
    containerSelector = document.getElementsByClassName("img-container fresh"); 
    
    createImg.innerHtml = `<img src= $(imageList) alt="static-test-img">`;

    // createImg = document.createElement('img');

    // createImg.classList.add("myImg");

    // containerSelector.append(createImg);

 
    
    imageList[i];

    // createImg = document.classList.remove("fresh");

    // createImg.append(imageList)
   console.log(imageList);

}

console.log(containerSelector);