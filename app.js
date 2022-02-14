const tileDisplay =document.querySelector('.tile-container')
const keyboard =document.querySelector('.key-container')

const wordle = 'SUPER';

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '<<',

]


const guessRows = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
];

let currentRow = 0
let currentTile = 0


guessRows.forEach((guessRow,guessRowIndex) => {
    const rowelement  =document.createElement('div')
    rowelement.setAttribute('id', 'guessRowIndex-'+guessRowIndex)
    tileDisplay.append(rowelement)


    guessRow.forEach((guess,guessIndex)=>{
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id','guessRow-'+guessRowIndex+'-tile-'+guessIndex )
        tileElement.classList.add('tile')
        rowelement.append(tileElement)
    })


})




keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent =key
    buttonElement.setAttribute('id',key)
    buttonElement.addEventListener('click',()=>handleClick(key))
    keyboard.append(buttonElement)
})


const handleClick = (key) => {
    console.log('clicked',key)
}



const addLetter = (letter) => {
    document.getElementById()
}
