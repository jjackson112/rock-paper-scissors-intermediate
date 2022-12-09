const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const gameGrid = document.getElementById('game');

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice

const handleClick = (e) => {
    // console.log('clicked')
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User Choice: ' + userChoice
    generateComputerChoice()
}

// create three buttons, grab button with an id, give the id choices, event listener, call function handleClick
for (let i=0; i <choices.length; i++) {
    const button =  document.createElement ('button')
    button.id = choices[i] // you can delete this if you want to use e.target.HTML
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

// without choices math.floor, etc generates 0,1, or 2so you out it through the choices array
const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoiceDisplay.innerHTML = 'Computer Choice: ' + randomChoice
    computerChoice = randomChoice
}

const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':  
            resultDisplay.innerHTML = "You're the winner!"
    }
}