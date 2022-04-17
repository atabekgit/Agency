const nav  = document.querySelector('.nav')
window.addEventListener('scroll',fixNav)



function fixNav(){
    if(window.screenY < nav.offsetHeight + 150){
        nav.classList.add('active')

    }else {
        nav.classList.remove('active')
    }
}

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes )
function checkBoxes(){
    const tr =  window.innerHeight / 5*4
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < tr){
            box.classList.add('show')
        } else {
            box.classList.remove('show')


        }
    })
}