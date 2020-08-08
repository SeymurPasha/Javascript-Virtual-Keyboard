let input = document.querySelector('textarea')
let buttons = document.querySelectorAll('.button')
let backspace = document.querySelector('#backspace')
let capsLock = document.querySelector('#capsLock')
let shift = document.querySelector('#shift')
let space = document.querySelector('#space')
let capslockActive = document.querySelector('.switchOff')
let enter = document.querySelector('#enter')

 

buttons.forEach(button => { 
    button.addEventListener('click', (e) => {
    input.value += e.target.textContent
})
})

space.addEventListener('click', ()=> {
    input.value += ' '
})

backspace.addEventListener('click', ()=> {
    input.value = input.value.substr(0, input.value.length-1)
})

capsLock.addEventListener('click', ()=> {
    capslockActive.classList.toggle('switchOn')
    buttons.forEach(button => {
        if(button.textContent === button.textContent.toLowerCase()) {
            button.textContent = button.textContent.toUpperCase()
            
        }
        else {
            button.textContent = button.textContent.toLowerCase()
            
        }
    })
})

enter.addEventListener('click', (e)=> {
    input.value += '\n' 
})