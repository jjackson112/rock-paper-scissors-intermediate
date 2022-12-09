const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const gameGrid = document.getElementById('game');

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice

const handleClick = () => {
    // console.log('clicked')
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
}

// create three buttons, grab button with an id, give the id choices, event listener, call function handleClick
for (let i=0; i <choices.length; i++) {
    const button =  document.createElement ('button')
    button.id = choices[i] // you can delete this if you want to use e.target.HTML
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

