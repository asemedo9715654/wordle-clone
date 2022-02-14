const tileDisplay =document.querySelector('.tile-container')
const keyboard =document.querySelector('.key-container')
const messageDisplay =document.querySelector('.message-container')

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
    '«',

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
let isGameOver = false


guessRows.forEach((guessRow,guessRowIndex) => {
    const rowelement  =document.createElement('div')
    rowelement.setAttribute('id', 'guessRow-'+guessRowIndex)
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


const handleClick = (letter) => {
    console.log('clicked',letter)
    if(letter==='«'){
        deleteLetter()
        console.log('delete letter')
        return
    }
    if(letter==='ENTER'){
        checkRow()
        console.log('check the row')
        return
    }
    addLetter(letter)
}



const addLetter = (letter) => {

    if(currentTile<5 && currentRow<6){
        var tile =document.getElementById('guessRow-'+currentRow+'-tile-'+currentTile)
        tile.textContent = letter;
        guessRows[currentRow][currentTile] = letter
        tile.setAttribute('data',letter)
        console.log('guessRows',guessRows)
        currentTile++
    }
   
}

const deleteLetter = () => {
    if(currentTile>0){
        currentTile--
        var tile =document.getElementById('guessRow-'+currentRow+'-tile-'+currentTile)
        tile.textContent = '';
        guessRows[currentRow][currentTile] = ''
        tile.setAttribute('data','')
    }
   
}

const checkRow = () =>{
    var guess =  guessRows[currentRow].join('')
    if(currentTile===5){
       
        console.log('guess is'+guess, 'wordle'+wordle)
        flipTile();
        if(wordle===guess){
            showMessage('Magnigicent!')
            isGameOver = true
            return
        }else{
            if(currentRow>=5){
                isGameOver = false
                showMessage('Game Over!')
                return
            }

            if(currentRow<5){
                currentRow++
                currentTile = 0
            }
        }
    }
}

const showMessage = (message) =>{
   const messageElement = document.createElement('p')
   messageElement.textContent = message
   messageDisplay.append(messageElement)
   setTimeout(()=>messageDisplay.removeChild(messageElement),2000)
}


const addColorToKey=(keyLetter,color)=>{
    const key =document.getElementById(keyLetter)
    key.classList.add(color)
}


const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow-'+currentRow).childNodes
    let checkWordle = wordle
    const guess = []


    rowTiles.forEach((tile,index) => {
        guess.push({letter:tile.getAttribute('data'),color:'grey-overlay'})
    })


    guess.forEach((guess,index)=>{
        if(guess.letter==wordle[index]){
            guess.color='green-overlay'
            checkWordle = checkWordle.replace(guess.letter,'')
        }
    })


    guess.forEach(guess=>{
        if(checkWordle.includes(guess.letter)){
            guess.color = 'yellow-overlay'
            checkWordle = checkWordle.replace(guess.letter,'')
        }
    })


    rowTiles.forEach((tile,index) => {
        const dataLetter = tile.getAttribute('data')


        setTimeout(() => {
            tile.classList.add('flip')
            if(dataLetter==wordle[index]){
                tile.classList.add('green-overlay')
                addColorToKey(dataLetter,'green-overlay')
            }else if(wordle.includes(dataLetter)){
                tile.classList.add('yellow-overlay')
                addColorToKey(dataLetter,'yellow-overlay')
            }else{
                tile.classList.add('grey-overlay')
                addColorToKey(dataLetter,'grey-overlay')
            }
        },500*index)

       

    })
}
