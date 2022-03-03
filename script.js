const fieldMenu = document.querySelector('.games')
const menu = document.querySelector('.menu_first')
const progr = document.querySelector('.programma')
const lec = document.querySelector('.open_lec')
const menu2 = document.querySelector('.menu_second')

console.log(menu);

progr.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event.target);
    if (event.target.classList.contains('spisok')){
        if (menu.classList.contains('show')){
            menu.classList.add('hide')
            menu.classList.remove('show')
            menu2.classList.add('hide')
            menu2.classList.remove('show')
            
        } else {
            menu.classList.add('show')
            menu.classList.remove('hide')
        }
    }
})

lec.addEventListener('click', (event) => {
    event.preventDefault()
    // console.log(event.target);
    if (event.target.classList.contains('spisok')){
        if (menu2.classList.contains('show')){
            menu2.classList.add('hide')
            menu2.classList.remove('show')
        } else {
            menu2.classList.add('show')
            menu2.classList.remove('hide')
        }
    }
})


fieldMenu.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target.classList.contains('openarrow')){
        const arrow = event.target.nextSibling.nextSibling
        console.log(arrow);
        if (arrow.classList.contains('arrow-up')){
            arrow.classList.add('arrow-down')
            arrow.classList.remove('arrow-up')
        } else {
            arrow.classList.add('arrow-up')
            arrow.classList.remove('arrow-down')
        }
    }
})