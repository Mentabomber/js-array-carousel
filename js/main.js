// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

const imageList = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

let indexImmagineAttiva = 0;

let containerSelector = document.getElementById("container");

console.log(containerSelector);





for(let i = 0; i <= imageList.length - 1; i++){

    containerSelector.innerHTML += `<div class="img-container"> 
                                        <img src=${imageList[i]} alt="static-test-img">
                                    </div>
                                    ` 
                                    


}

containerSelector = document.getElementById("thumb-nail");

for(let i = 0; i <= imageList.length - 1; i++){

    containerSelector.innerHTML += `<div class="img-thumb-nail"> 
                                        <img src=${imageList[i]} alt="static-test-img">
                                    </div>
                                    ` 
                                    

}

let container = document.getElementById("container");
let immagini = container.querySelectorAll("div.img-container");
immagini[indexImmagineAttiva].classList.add("active");

let immaginiThumbNail = container.querySelectorAll("div.img-thumb-nail");
immaginiThumbNail[indexImmagineAttiva].classList.add("thumb-nail-selected")

let  buttonInteractionUp = document.getElementById("arrow-down-carousel");
buttonInteractionUp.addEventListener('click',
    function(){

        immagini[indexImmagineAttiva].classList.remove("active");
        immaginiThumbNail[indexImmagineAttiva].classList.remove("thumb-nail-selected");
        indexImmagineAttiva++;
        if(indexImmagineAttiva == imageList.length ){
            indexImmagineAttiva = 0;

        }
        immagini[indexImmagineAttiva].classList.add("active");
        immaginiThumbNail[indexImmagineAttiva].classList.add("thumb-nail-selected");
        console.log(indexImmagineAttiva);
        

    

    }
);
let  buttonInteractionDown = document.getElementById("arrow-up-carousel");
buttonInteractionDown.addEventListener('click',
    function(){

        immagini[indexImmagineAttiva].classList.remove("active");
        immaginiThumbNail[indexImmagineAttiva].classList.remove("thumb-nail-selected");
        if(indexImmagineAttiva == 0 ){
            indexImmagineAttiva = imageList.length;

        }
        indexImmagineAttiva--;
        immagini[indexImmagineAttiva].classList.add("active");
        immaginiThumbNail[indexImmagineAttiva].classList.add("thumb-nail-selected");
        console.log(indexImmagineAttiva);
        

    

    }
);










// console.log(containerSelector);