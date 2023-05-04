// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

const imageList = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

let indexImmagineAttiva = 0;

let containerSelector = document.getElementById("container");
console.log(containerSelector)



for(let i = 0; i <= imageList.length - 1; i++){

    containerSelector.innerHTML += `<div class="img-container"> 
                                        <img src=${imageList[i]} alt="static-test-img">
                                    </div>` 

}

let container = document.getElementById("container");
let immagini = container.querySelectorAll("div");
immagini[indexImmagineAttiva].classList.add("active");

let  buttonInteractionUp = document.getElementById("arrow-up-carousel");
buttonInteractionUp.addEventListener('click',
    function(){

        immagini[indexImmagineAttiva].classList.remove("active");
        indexImmagineAttiva++;
        if(indexImmagineAttiva == imageList.length ){
            indexImmagineAttiva = 0;

        }
        immagini[indexImmagineAttiva].classList.add("active");
        console.log(indexImmagineAttiva);
        

    

    }
);
let  buttonInteractionDown = document.getElementById("arrow-down-carousel");
buttonInteractionDown.addEventListener('click',
    function(){

        immagini[indexImmagineAttiva].classList.remove("active");
        if(indexImmagineAttiva == 0 ){
            indexImmagineAttiva = imageList.length;

        }
        indexImmagineAttiva--;
        immagini[indexImmagineAttiva].classList.add("active");
        console.log(indexImmagineAttiva);
        

    

    }
);





console.log(buttonInteraction);




// console.log(containerSelector);