const carrusel = document.querySelector('.carrusel');
const carruselItem = carrusel.querySelectorAll('.carrusel-item');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
let currentIndex = 0;

document.addEventListener('DOMContentLoaded', function(){
    function shosCarruselItem (){
        carruselItem.forEach((item,index) => {
            if(currentIndex === index){
                item.style.display = 'flex';
            }else{
                item.style.display = 'none';
            }
        })
    }
    
    btnPrev.addEventListener('click', ()=>{
        currentIndex = (currentIndex === 0) ? carruselItem.length - 1 : currentIndex -1;
        shosCarruselItem();
    })
    
    btnNext.addEventListener('click', ()=>{
        currentIndex = (currentIndex === carruselItem.length - 1) ? 0 :currentIndex + 1;
        shosCarruselItem();
    })
    
    shosCarruselItem();
});