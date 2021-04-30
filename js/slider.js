let images = document.querySelectorAll(".infinity_slider img");
let blocks = document.querySelectorAll(".img_block");
let step = 0;

function slider(){
    
    for(let i = 0; i < images.length; i++){
        images[i].classList.add("opacity0");
       
        
    }
    
    images[step].classList.remove("opacity0");
    
    setTimeout(function(){
        slider_2();
    },1000)
}



function slider_2(){
    for(let j = 0; j < blocks.length; j++){
        blocks[j].classList.add ("delay");
    }
        blocks[step].classList.remove("delay");
}

slider_2();
slider();


document.querySelector(".left").onclick = function(){
    
    if(step - 1 == -1){
        step = images.length - 1;
    }
    else{
        step--;
    }
    slider();
};
document.querySelector(".rigth").onclick = function(){
    if(step + 1 == images.length){
        step = 0;
    }
    else{
        step++;
    }
    slider();
};