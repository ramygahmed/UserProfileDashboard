let logo = document.getElementById('proHead')
let menu = document.getElementsByClassName('menu')
let pp = document.getElementsByClassName('profilepic')[0]
menu[0].style.display = 'none'
let clickCount = 0;
pp.addEventListener('click',e=>{
    if (clickCount < 1) {
        menu[0].style.display = 'block'
        
        clickCount = 1;
    } else {
        menu[0].style.display = 'none'
        clickCount = 0;
    }
    
})

    




