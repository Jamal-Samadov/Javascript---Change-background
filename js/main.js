
let body = document.querySelector('body')
let btn = document.querySelector('#btn')
let colors = [
    '#f4791f',
    '#659999',
    '#b92b27',
    '#1565C0',
    '#373B44',
    '#4286f4',
    '#6be585',
    '#dd3e54',
    '#dd3e54'
]

btn.addEventListener('click', ChangeBackground)

function ChangeBackground(){    
    let anyColor = Math.floor(Math.random() * colors.length);
    let select = colors[anyColor]
    console.log(anyColor,select);

    body.style.backgroundColor = select
}

