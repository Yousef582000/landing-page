let nextbtn=document.querySelector(".next");
let backbtn=document.querySelector(".back");
let slides=document.querySelectorAll(".slide");
let counts=slides.length;
let slidecounter=0;

nextbtn.onclick =() =>{
    slides.forEach((slide)=>{

        slide.classList.remove('active')
    })
    slidecounter++;

    if(slidecounter >(counts -1)){

        slidecounter=0;
    }
    slides[slidecounter].classList.add('active');
}
backbtn.onclick =() =>{
    slides.forEach((slide)=>{

        slide.classList.remove('active')
    })
    slidecounter--;

    if(slidecounter <0){

        slidecounter=counts -1;
    }
    slides[slidecounter].classList.add('active');
}