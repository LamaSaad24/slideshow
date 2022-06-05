let next = document.getElementById('next')
let prev = document.getElementById('prev')
let slides = document.getElementsByClassName('slide-item')
let dots = document.getElementsByClassName('dot')

let max = slides.length - 1

let index = 0

next.addEventListener('click', function(){
    showSlide(index + 1)
})

prev.addEventListener('click', function(){
    showSlide(index - 1)
})

function showSlide(id){
    if(id > max){
        id =0;
    }else if (id < 0){
        id = max
    }

    for(let i=0; i<=max; i++){
        slides[i].classList.remove('show')
        dots[i].classList.remove('active')
    }

    slides[id].classList.add('show')
    dots[id].classList.add('active')

    index = id
}

document.onkeydown = function(e){
    var keyCode = e.keyCode

    if(keyCode == 39){
        next.click()
    } else if(keyCode == 37){
        prev.click()
    }
}